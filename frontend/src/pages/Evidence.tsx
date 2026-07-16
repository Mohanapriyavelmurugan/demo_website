import React from "react";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

const blocks = [
  {
    title: "Clinical guidelines",
    body:
      "Reasoning is constrained to established diabetes frameworks - RSSDI, ADA, EASD, and IDF - applied in a fixed priority order to support consistent outpatient decision support.",
  },
  {
    title: "Evidence hierarchy",
    body:
      "Guideline recommendations are prioritized over unconstrained inference. Where frameworks differ, priority ranking and physician review govern how conflicting guidance is presented.",
  },
  {
    title: "Guideline harmonization",
    body:
      "ClinoveAI synthesizes overlapping recommendations into a transparent evaluation trail so clinicians can inspect the basis of each suggestion.",
  },
  {
    title: "Clinical reasoning framework",
    body:
      "Patient context, diagnostic findings, and safety considerations are assembled into structured recommendations that support documentation quality and care consistency.",
  },
  {
    title: "Medical literature grounding",
    body:
      "Public-health and specialty references inform product context and evaluation design. Literature citation on this site does not imply regulatory clearance.",
  },
  {
    title: "Physician verification",
    body:
      "System outputs require clinician review. Acceptance, modification, and discard decisions remain under physician supervision before any patient-facing use.",
  },
];

const sources = [
  "International Diabetes Federation, IDF Diabetes Atlas, 11th edition (2024)",
  "RSSDI Clinical Practice Recommendations",
  "American Diabetes Association (ADA) Standards of Care",
  "European Association for the Study of Diabetes (EASD) guidelines",
  "International Diabetes Federation (IDF) clinical guidelines",
];

export function Evidence() {
  useSEO({
    title: "Evidence - Valtraq",
    description:
      "Guideline-grounded evidence structure for ClinoveAI: clinical guidelines, evidence hierarchy, and physician-verified decision support.",
  });

  return (
    <div>
      <PageHero
        label="Evidence"
        title={<>Guideline-grounded. Physician-verified.</>}
        subtitle="ClinoveAI organizes clinical guidelines and patient context into transparent decision support for physician review. Guideline synthesis informs clinical judgment; it does not substitute for it."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blocks.map((block, index) => (
              <Reveal key={block.title} delay={index * 0.04}>
                <div className="surface h-full p-6">
                  <h2 className="text-lg font-medium text-foreground">{block.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Reference sources</Eyebrow>
            <div className="surface mt-6 max-w-4xl p-6 md:p-8">
              <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
                {sources.map((source) => (
                  <li key={source}>- {source}</li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Citation of guidelines and public-health references does not imply endorsement by those
                organizations or regulatory approval of ClinoveAI.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
