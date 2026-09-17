/*
 * POST /api/contact — Vercel serverless function.
 * Validates an inquiry and emails it to the Valtraq inbox via the Resend REST API.
 *
 * Required env (Vercel project settings):
 *   RESEND_API_KEY     Resend API key
 *   CONTACT_TO_EMAIL   inbox that receives inquiries
 * Optional:
 *   CONTACT_FROM_EMAIL verified sender, defaults to Resend's onboarding sender
 */

const LIMITS = { name: 120, email: 254, organization: 160, inquiryType: 60, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;

// Best-effort per-instance limiter; resets when the function instance is recycled.
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "invalid_json" });
    }
  }
  body = body || {};

  // Honeypot: real users never see or fill this field. Pretend success so bots move on.
  if (clean(body.website, 200)) {
    return res.status(200).json({ ok: true });
  }

  const data = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    organization: clean(body.organization, LIMITS.organization),
    inquiryType: clean(body.inquiryType, LIMITS.inquiryType),
    message: clean(body.message, LIMITS.message),
  };

  const fields = {};
  if (!data.name) fields.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) fields.email = "Please enter a valid email address.";
  if (data.message.length < 10) fields.message = "Please include a short message (at least 10 characters).";
  if (Object.keys(fields).length) {
    return res.status(422).json({ error: "validation_failed", fields });
  }

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return res.status(429).json({ error: "rate_limited" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("contact: RESEND_API_KEY or CONTACT_TO_EMAIL is not configured");
    return res.status(503).json({ error: "not_configured" });
  }

  const from = process.env.CONTACT_FROM_EMAIL || "Valtraq Website <onboarding@resend.dev>";
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Organization", data.organization || "-"],
    ["Inquiry type", data.inquiryType || "-"],
  ];
  const html =
    `<h2>New website inquiry</h2><table>` +
    rows.map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("") +
    `</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\n${data.message}`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Website inquiry${data.inquiryType ? ` (${data.inquiryType})` : ""}: ${data.name}`,
        html,
        text,
      }),
    });

    if (!response.ok) {
      console.error("contact: Resend rejected the request", response.status, await response.text());
      return res.status(502).json({ error: "delivery_failed" });
    }
  } catch (err) {
    console.error("contact: Resend request failed", err);
    return res.status(502).json({ error: "delivery_failed" });
  }

  return res.status(200).json({ ok: true });
};
