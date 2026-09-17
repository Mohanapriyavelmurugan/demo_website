import React from "react";
import { useReducedMotion } from "framer-motion";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

const blocks = [
  {
    title: "Clinical guidelines",
    body:
      "Reasoning is constrained to established diabetes frameworks - RSSDI, ADA, EASD, and IDF - applied in a fixed priority order to support consistent outpatient decision support.",
  },
  {
    title: "Guideline priority",
    body:
      "Guideline recommendations are prioritized over unconstrained inference. Where frameworks differ, priority ranking and physician review govern how conflicting guidance is presented.",
  },
  {
    title: "Guideline harmonization",
    body:
      "Valtraq CDSS synthesizes overlapping recommendations into a transparent evaluation trail so clinicians can inspect the basis of each suggestion.",
  },
  {
    title: "Clinical reasoning framework",
    body:
      "Patient context, diagnostic findings, and safety considerations are assembled into structured considerations for physician review—not autonomous prescriptions.",
  },
  {
    title: "Medical literature grounding",
    body:
      "Public-health and specialty references inform product context and evaluation design. Literature citation on this site does not imply regulatory clearance.",
  },
  {
    title: "Physician review",
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
  const reduceMotion = useReducedMotion();

  const revealBlock = (children: React.ReactNode, delay = 0, className?: string) => {
    if (reduceMotion) {
      return <div className={className}>{children}</div>;
    }

    return (
      <Reveal delay={delay} className={className}>
        {children}
      </Reveal>
    );
  };

  useSEO({
    title: "Guideline Basis | Valtraq Healthcare",
    description:
      "The guideline framework behind Valtraq CDSS: RSSDI, ADA, EASD, and IDF applied under physician review.",
  });

  return (
    <div>
      <PageHero
        label="Guideline basis"
        title={<>Guideline-grounded. Physician-reviewed.</>}
        subtitle="Valtraq CDSS organizes clinical guidelines and patient context into transparent decision support for physician review. This page describes the guideline framework it is built on."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {revealBlock(
            <div>
              <Eyebrow>Framework</Eyebrow>
              <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-4xl">
                How guideline evidence is translated into reviewable clinical reasoning.
              </h2>
            </div>,
            0
          )}

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {blocks.map((block, index) => (
              <div key={block.title}>
                {revealBlock(
                  <article className={`surface h-full p-6 ${index % 2 === 0 ? "bg-card" : "bg-secondary/40"}`}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 font-display text-2xl leading-tight text-foreground md:text-[29px]">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{block.body}</p>
                  </article>,
                  0.05 + index * 0.04
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {revealBlock(
            <div className="max-w-5xl">
              <Eyebrow>Reference sources</Eyebrow>
              <div className="surface mt-6 overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-secondary/45 px-6 py-4">
                  <h2 className="font-display text-2xl text-foreground md:text-[30px]">
                    Clinical guideline bodies
                  </h2>
                  <span className="pill-badge border-primary/25 bg-primary/[0.06] text-primary">
                    RSSDI, ADA, EASD, IDF
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <tbody>
                      {sources.map((source, index) => (
                        <tr key={source} className="border-b border-border last:border-b-0">
                          <th className="w-24 px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground md:w-28">
                            Source {index + 1}
                          </th>
                          <td className="px-6 py-4 text-sm leading-6 text-foreground">{source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="border-t border-border px-6 py-4 text-xs text-muted-foreground">
                  Citation of guidelines and public-health references does not imply endorsement by
                  those organizations or regulatory approval of Valtraq CDSS.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
