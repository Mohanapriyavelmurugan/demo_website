import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

type Section = { heading: string; body?: string; list?: string[] };

const privacy: Section[] = [
  {
    heading: "Privacy Policy",
    body:
      'Valtraq Healthcare ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website.',
  },
  {
    heading: "Information we collect",
    list: [
      "Contact form data (name, email, organization, message)",
      "Analytics cookies to understand website usage",
      "Technical information (browser type, IP address, device information)",
    ],
  },
  {
    heading: "How we use your information",
    body:
      "We use collected information solely for responding to your inquiries, improving our website, and understanding institutional engagement needs. We do not sell, rent, or share your personal information with third parties except as required by law.",
  },
  {
    heading: "Data handling principles",
    list: [
      "Purpose limitation: data used only for stated purposes",
      "Consent: we collect data with your explicit consent",
      "Data localization: intent to store data within India",
      "Security: implementation of appropriate safeguards",
    ],
  },
  {
    heading: "Your rights",
    body:
      "You have the right to access, correct, or delete your personal data. For privacy-related requests, please contact us through the contact form.",
  },
];

const terms: Section[] = [
  {
    heading: "Terms of Use",
    body: "By accessing and using this website, you agree to be bound by these Terms of Use.",
  },
  {
    heading: "Clinical decision support",
    body:
      "Valtraq CDSS is a clinical decision-support system intended for use under direct physician supervision. It is not a substitute for professional medical judgment. All recommendations must be reviewed, accepted, modified, or discarded by a qualified physician before reaching a patient.",
  },
  {
    heading: "No direct patient claims",
    body:
      "This website makes no diagnostic or treatment claims to end patients. If you are a patient seeking medical advice, please consult a qualified healthcare provider.",
  },
  {
    heading: "Intellectual property",
    body:
      "All content on this website, including text, graphics, logos, and software, is the property of Valtraq Healthcare and protected by applicable intellectual property laws.",
  },
  {
    heading: "Limitation of liability",
    body:
      "To the fullest extent permitted by law, Valtraq Healthcare shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of this website or reliance on its content.",
  },
  {
    heading: "Changes to terms",
    body:
      "We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated effective date.",
  },
];

export function Legal() {
  const location = useLocation();
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");

  useSEO({
    title: "Legal | Valtraq Healthcare",
    description: "Privacy Policy and Terms of Use for Valtraq Healthcare and Valtraq CDSS.",
  });

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "privacy" || hash === "terms") setTab(hash);
  }, [location]);

  const sections = tab === "privacy" ? privacy : terms;

  return (
    <div>
      <PageHero
        label="Legal"
        title={<>Privacy Policy and Terms of Use</>}
        subtitle="Corporate legal information for Valtraq Healthcare"
      />

      <section className="section-block">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[240px_1fr] lg:px-8">
          <aside>
            <div className="surface p-3 lg:sticky lg:top-24">
              {(["privacy", "terms"] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => setTab(item)}
                  data-testid={`legal-tab-${item}`}
                  className={cn(
                    "w-full rounded-xl px-3 py-3 text-left text-sm transition-colors",
                    tab === item
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item === "privacy" ? "Privacy Policy" : "Terms of Use"}
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={section.heading} className={cn(index > 0 && "section-block !py-8")}>
                <h2
                  className={cn(
                    "font-display text-foreground",
                    index === 0 ? "text-3xl" : "text-2xl"
                  )}
                >
                  {section.heading}
                </h2>
                {section.body && <p className="copy-compact mt-4">{section.body}</p>}
                {section.list && (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                    {section.list.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
