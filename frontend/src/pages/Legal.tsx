import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero, Eyebrow } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

type Section = { heading: string; body?: string; list?: string[] };

const privacy: Section[] = [
  { heading: "Privacy Policy", body: "Alyvn (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website." },
  { heading: "Information we collect", list: ["Contact form data (name, email, organization, message)", "Analytics cookies to understand website usage", "Technical information (browser type, IP address, device information)"] },
  { heading: "How we use your information", body: "We use collected information solely for responding to your inquiries, improving our website, and understanding user needs. We do not sell, rent, or share your personal information with third parties except as required by law." },
  { heading: "Data handling principles", list: ["Purpose limitation: data used only for stated purposes", "Consent: we collect data with your explicit consent", "Data localization: intent to store data within India", "Security: implementation of appropriate safeguards"] },
  { heading: "Your rights", body: "You have the right to access, correct, or delete your personal data. For privacy-related requests, please contact us through the contact form." },
];

const terms: Section[] = [
  { heading: "Terms of Use", body: "By accessing and using this website, you agree to be bound by these Terms of Use." },
  { heading: "Clinical decision support", body: "ClinoveAI is a clinical decision-support tool intended for use under direct physician supervision. It is not a substitute for professional medical judgment. All recommendations must be reviewed, edited, or approved by a qualified physician before reaching a patient." },
  { heading: "No direct patient claims", body: "This website makes no diagnostic or treatment claims to end patients. If you are a patient seeking medical advice, please consult with a qualified healthcare provider." },
  { heading: "Intellectual property", body: "All content on this website, including text, graphics, logos, and software, is the property of Alyvn and protected by applicable intellectual property laws." },
  { heading: "Limitation of liability", body: "To the fullest extent permitted by law, Alyvn shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of this website or reliance on its content." },
  { heading: "Changes to terms", body: "We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated effective date." },
];

export function Legal() {
  const location = useLocation();
  const [tab, setTab] = useState<"privacy" | "terms">("privacy");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "privacy" || hash === "terms") setTab(hash);
  }, [location]);

  const sections = tab === "privacy" ? privacy : terms;

  return (
    <div className="overflow-hidden">
      <PageHero label="Legal" title={<>The <span className="italic text-champagne">fine print</span>.</>} />

      <section className="relative py-8 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Index</Eyebrow>
              <nav className="mt-6 flex flex-col gap-1">
                {(["privacy", "terms"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    data-testid={`legal-tab-${t}`}
                    className={cn(
                      "rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors",
                      tab === t ? "bg-teal-glow/10 text-teal-glow" : "text-white/50 hover:bg-white/[0.04] hover:text-white"
                    )}
                  >
                    {t === "privacy" ? "Privacy Policy" : "Terms of Use"}
                  </button>
                ))}
              </nav>
              <p className="mt-6 px-4 text-xs italic text-white/35">
                This is a template requiring final legal review.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="space-y-10"
              >
                {sections.map((s, i) => (
                  <div key={s.heading} className={cn(i > 0 && "hairline pt-10")}>
                    <h2 className={cn("font-display text-ivory", i === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl")}>
                      {s.heading}
                    </h2>
                    {s.body && <p className="mt-4 text-base font-light leading-relaxed text-white/60">{s.body}</p>}
                    {s.list && (
                      <ul className="mt-4 space-y-2">
                        {s.list.map((li) => (
                          <li key={li} className="flex items-start gap-3 text-base font-light text-white/60">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
