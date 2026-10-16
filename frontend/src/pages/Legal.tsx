import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PageHero, Section } from "@/components/site/primitives";
import { company, contact } from "@/content/site";
import { setCookieConsent, getCookieConsent } from "@/components/CookieBanner";
import { useSEO } from "@/hooks/useSEO";

type SectionBlock = { heading: string; body?: string; list?: string[] };

const privacy: SectionBlock[] = [
  {
    heading: "Privacy Policy",
    body: `${company.shortLegalName} ("we," "us," or "our") explains how we collect, use, and protect information when you visit valtraq.in.`,
  },
  {
    heading: "What the contact form collects",
    list: [
      "Inquiry type, name, work email, optional organisation and role, and your message",
      "Consent that we may use these details to reply to you",
    ],
  },
  {
    heading: "Why we collect it",
    body: "We use form submissions only to reply to your inquiry (demo, quote, partnership, careers, investor, or other). We do not sell this data.",
  },
  {
    heading: "How long we keep it",
    body: "We delete form emails after 12 months unless they became a customer or hire relationship that requires longer retention.",
  },
  {
    heading: "Processors",
    list: [
      "Resend — delivers inquiry emails",
      "Google Analytics (GA4) — only if you Accept analytics cookies",
      "Vercel — hosts this website",
    ],
  },
  {
    heading: "Contact",
    body: `Privacy questions: ${contact.email} until privacy@valtraq.in is live.`,
  },
];

const terms: SectionBlock[] = [
  {
    heading: "Terms of Use",
    body: "By accessing and using this website, you agree to these Terms of Use.",
  },
  {
    heading: "Clinical decision support",
    body: "Clinoveai is clinical decision support for use under physician supervision. It does not replace professional medical judgment. The doctor approves, edits, or rejects every suggestion.",
  },
  {
    heading: "No patient medical advice",
    body: "This website does not provide medical advice to patients. If you need care, consult a qualified clinician.",
  },
  {
    heading: "Intellectual property",
    body: `Site content is the property of ${company.legalName} unless otherwise noted.`,
  },
  {
    heading: "Limitation of liability",
    body: `To the fullest extent permitted by law, ${company.shortLegalName} is not liable for indirect or consequential damages arising from use of this website.`,
  },
];

const cookies: SectionBlock[] = [
  {
    heading: "Cookie settings",
    body: "We use analytics cookies (GA4) only after you Accept. Reject is as easy as Accept. You can change your choice below.",
  },
  {
    heading: "What we use",
    list: [
      "Essential cookies needed to run the site",
      "Optional analytics cookies (GA4) after Accept",
      "Vercel Web Analytics is first-party hosting analytics",
    ],
  },
];

function Blocks({ items }: { items: SectionBlock[] }) {
  return (
    <div className="space-y-10">
      {items.map((item) => (
        <div key={item.heading}>
          <h2 className="font-display text-2xl text-foreground">{item.heading}</h2>
          {item.body && (
            <p className="mt-4 text-base leading-7 text-muted-foreground">{item.body}</p>
          )}
          {item.list && (
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-base leading-7 text-muted-foreground">
              {item.list.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function Legal() {
  const location = useLocation();
  const [tab, setTab] = useState<"privacy" | "terms" | "cookies">("privacy");
  const [consent, setConsent] = useState<string | null>(null);

  useSEO({
    title: "Legal | Valtraq",
    description: "Privacy policy, terms of use, and cookie settings for Valtraq.",
  });

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "terms") setTab("terms");
    else if (hash === "cookies") setTab("cookies");
    else setTab("privacy");
    setConsent(getCookieConsent());
  }, [location.hash]);

  const tabs = [
    { id: "privacy" as const, label: "Privacy" },
    { id: "terms" as const, label: "Terms" },
    { id: "cookies" as const, label: "Cookies" },
  ];

  return (
    <div>
      <PageHero
        label="Legal"
        title="Policies that keep trust clear."
        subtitle="How we handle website data, cookies, and use of this site."
      />

      <Section>
        <div className="glass-card-float overflow-hidden rounded-[1.35rem]">
          <div className="sticky top-[4.5rem] z-10 border-b border-border/80 bg-[hsl(var(--card)/0.92)] px-4 py-4 backdrop-blur-md sm:px-6">
            <div
              className="inline-flex flex-wrap gap-1 rounded-full border border-border/80 bg-[hsl(var(--sand)/0.5)] p-1"
              role="tablist"
              aria-label="Legal sections"
            >
              {tabs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={tab === item.id}
                  onClick={() => {
                    setTab(item.id);
                    window.history.replaceState(null, "", `#${item.id}`);
                  }}
                  className={cn(
                    "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    tab === item.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground hover:bg-card"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="max-w-[68ch]">
              {tab === "privacy" && <Blocks items={privacy} />}
              {tab === "terms" && <Blocks items={terms} />}
              {tab === "cookies" && (
                <div className="space-y-10">
                  <Blocks items={cookies} />
                  <div className="rounded-2xl border border-border bg-[hsl(var(--sand)/0.35)] p-6">
                    <p className="text-sm text-muted-foreground">
                      Current choice:{" "}
                      <span className="font-semibold text-foreground">
                        {consent === "accepted"
                          ? "Accepted"
                          : consent === "rejected"
                            ? "Rejected"
                            : "Not set"}
                      </span>
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        className="cursor-pointer rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                        onClick={() => {
                          setCookieConsent("accepted");
                          setConsent("accepted");
                        }}
                      >
                        Accept analytics
                      </button>
                      <button
                        type="button"
                        className="cursor-pointer rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground"
                        onClick={() => {
                          setCookieConsent("rejected");
                          setConsent("rejected");
                        }}
                      >
                        Reject analytics
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
