import React from "react";
import { FileCheck, Shield, CheckCircle2 } from "lucide-react";
import { PageHero, Reveal, Eyebrow, LayeredCard } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

const pillars = [
  {
    icon: FileCheck,
    no: "01",
    title: "Guideline-grounded reasoning",
    description:
      "ClinoveAI's clinical reasoning draws exclusively from four established diabetes management frameworks — RSSDI, ADA, EASD, and IDF — applied in a defined priority order suited to Indian patients. A deliberate constraint, not a limitation: every recommendation can be traced back to a recognized clinical standard.",
  },
  {
    icon: Shield,
    no: "02",
    title: "Independent safety layer",
    description:
      "That reasoning is reinforced by a dedicated safety layer that operates independently of the clinical recommendations themselves — cross-checking prescriptions against a patient's full medication history and organ function, and flagging anything requiring physician attention before a report is ever finalized.",
  },
  {
    icon: CheckCircle2,
    no: "03",
    title: "Continuous physician validation",
    description:
      "Every report that passes through this pipeline is then reviewed by a practicing physician — approved, edited, or rejected — before it is used. That structured review, applied to every single case, is what makes the evidence base different from a model tested once against a static dataset: it is validated continuously, against real clinical judgment, in a live practice.",
  },
];

export function Evidence() {
  useSEO({ title: "Evidence — Alyvn", description: "Built on established guidelines, verified through structured physician review, reinforced by independent safety checks." });
  return (
    <div className="overflow-hidden">
      <PageHero
        label="Evidence"
        title={
          <>
            Built on guidelines. Verified through <span className="italic text-champagne">review</span>.
          </>
        }
        subtitle="Reinforced by independent safety checks — not inferred from an unconstrained model."
      />

      <section className="relative py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <Reveal key={p.no} delay={i * 0.1}>
                <LayeredCard className="p-8 md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="flex items-center gap-4 md:w-48 md:flex-col md:items-start">
                      <span className="font-display text-5xl font-light italic text-champagne/70">
                        {p.no}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-glow/12 text-teal-glow ring-1 ring-teal-glow/20">
                        <p.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl text-ivory md:text-3xl">{p.title}</h3>
                      <p className="mt-3 text-base leading-relaxed text-foreground/60">{p.description}</p>
                    </div>
                  </div>
                </LayeredCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="glass h-full p-8 md:p-10">
              <Eyebrow>Diagnostics</Eyebrow>
              <p className="mt-5 text-lg font-light leading-relaxed text-foreground/70">
                Diagnostic test suggestions follow the same principle: each is generated based on the
                individual patient's data, not a fixed template, so recommendations stay clinically
                justified on a case-by-case basis.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-strong flex h-full flex-col justify-center p-8 md:p-10">
              <p className="font-display text-2xl font-light leading-snug text-ivory">
                As this pilot dataset grows, it will support both the system's continued development
                and future academic publication.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
