import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { PageHero, Reveal } from "@/components/site/primitives";
import { company, contact } from "@/content/company";
import { useSEO } from "@/hooks/useSEO";

const inquiryTypes = [
  "Deploying Valtraq CDSS",
  "Partnership",
  "Investor relations",
  "Media",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
  website: string;
}

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const empty: FormState = {
  name: "",
  email: "",
  organization: "",
  inquiryType: inquiryTypes[0],
  message: "",
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(form.email.trim())) errors.email = "Please enter a valid email address.";
  if (form.message.trim().length < 10)
    errors.message = "Please include a short message (at least 10 characters).";
  return errors;
}

function failureMessage(status: number): string {
  if (status === 429) return "Too many submissions. Please try again in a few minutes.";
  if (contact.email) return `We couldn't send your message. Please email us at ${contact.email}.`;
  return "We couldn't send your message. Please try again shortly.";
}

export function Contact() {
  useSEO({
    title: "Contact | Valtraq Healthcare",
    description:
      "Contact Valtraq Healthcare about deploying Valtraq CDSS, partnerships, or investor relations.",
  });

  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name in errors) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    const clientErrors = validate(form);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length) return;

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm(empty);
        toast.success("Message sent.");
        return;
      }

      const payload = await response.json().catch(() => ({}));
      if (response.status === 422 && payload.fields) {
        setErrors(payload.fields);
        return;
      }
      setFormError(failureMessage(response.status));
    } catch {
      setFormError(failureMessage(0));
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (invalid?: boolean) =>
    `w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/20 ${
      invalid ? "border-destructive" : "border-border"
    }`;

  const hasDirectContact = Boolean(contact.email || contact.phone);

  return (
    <div>
      <PageHero
        label="Contact"
        title={<>Talk to Valtraq.</>}
        subtitle={`Whether you are a care provider, a partner, or an investor, tell us what you are looking for and the right person at ${company.legalName} will respond.`}
      />

      <section className="section-block">
        <div
          className={`mx-auto grid max-w-6xl gap-8 px-6 lg:px-8 ${
            hasDirectContact ? "lg:grid-cols-[1fr_320px]" : ""
          }`}
        >
          <Reveal>
            <div className="surface p-6 md:p-8" data-testid="contact-form-card">
              {submitted ? (
                <div className="py-10" data-testid="contact-success" role="status">
                  <p className="text-sm text-primary">Message sent</p>
                  <h2 className="mt-2 font-display text-3xl text-foreground">Thank you.</h2>
                  <p className="copy-compact mt-3">
                    We have received your message and will reply to the email address you provided.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-testid="contact-form"
                  noValidate
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Field id="name" label="Name" error={errors.name}>
                      <input
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={inputClass(Boolean(errors.name))}
                        data-testid="contact-name"
                      />
                    </Field>
                    <Field id="email" label="Work email" error={errors.email}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={inputClass(Boolean(errors.email))}
                        data-testid="contact-email"
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Field id="organization" label="Organization" optional>
                      <input
                        id="organization"
                        name="organization"
                        autoComplete="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className={inputClass()}
                        data-testid="contact-organization"
                        placeholder="Hospital, clinic, fund, or company"
                      />
                    </Field>
                    <Field id="inquiryType" label="Inquiry type">
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={form.inquiryType}
                        onChange={handleChange}
                        className={inputClass()}
                        data-testid="contact-inquiry-type"
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type}>{type}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field id="message" label="Message" error={errors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`${inputClass(Boolean(errors.message))} resize-none`}
                      data-testid="contact-message"
                      placeholder="Tell us about your organization and what you would like to discuss."
                    />
                  </Field>

                  {/* Honeypot: hidden from people and assistive tech, filled only by bots. */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={handleChange}
                    />
                  </div>

                  <div aria-live="polite">
                    {formError && (
                      <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                        {formError}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="contact-submit"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {hasDirectContact && (
            <Reveal delay={0.08}>
              <aside className="surface space-y-5 p-6">
                <p className="text-sm font-medium text-foreground">Reach us directly</p>
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {contact.email}
                  </a>
                )}
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {contact.phone}
                  </a>
                )}
              </aside>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm text-foreground">
        {label}
        {optional && <span className="ml-1 text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
