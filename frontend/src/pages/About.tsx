import React from "react";
import { PageHero, Reveal, Eyebrow, LayeredCard } from "@/components/site/primitives";
import { CountUp } from "@/components/CountUp";

const metrics = [
  { end: 90, suffix: "M", label: "People living with diabetes in India today" },
  { end: 134, suffix: "M", label: "Projected cases by 2045" },
  { end: 39, suffix: "%", label: "Treated by physicians without adequate diabetes training" },
];

export function About() {
  return (
    <div className="overflow-hidden">
      <PageHero
        label="About the company"
        title={
          <>
            Closing the distance between <span className="italic text-champagne">care needed</span>{" "}
            and care received.
          </>
        }
        subtitle="Alyvn exists to close India's largest healthcare gap — the distance between how many people need guideline-based diabetes care, and how many currently receive it."
      />

      <section className="relative py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-4">
            <Eyebrow>The gap</Eyebrow>
            <p className="mt-6 font-display text-2xl font-light leading-snug text-ivory md:text-3xl">
              India's challenge has never been a shortage of cases. It is a shortage of consistent,
              specialist-quality care reaching those cases.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-8">
            <LayeredCard className="space-y-6 p-8 md:p-10">
              <p className="text-lg font-light leading-relaxed text-white/70">
                With close to 90 million people living with diabetes — a number projected to exceed
                134 million by 2045 — nearly four in ten patients are treated by physicians without
                adequate training in the disease. Specialist positions in community health centres
                remain vacant at scale. The consequence is measured in preventable kidney damage,
                cardiovascular events, and complications that earlier, guideline-consistent
                intervention could have avoided.
              </p>
              <p className="text-lg font-light leading-relaxed text-white/70">
                Alyvn was founded to close that gap — building clinical decision support that brings
                specialist-level guideline discipline into any outpatient practice, while keeping the
                treating physician as the sole clinical authority on every case.
              </p>
              <p className="text-base italic text-champagne/90">
                Our first product, ClinoveAI, is in active clinical pilot today, in real use with a
                practicing diabetologist.
              </p>
            </LayeredCard>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="hairline grid grid-cols-1 gap-8 pt-14 md:grid-cols-3">
            {metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.12}>
                <div className="font-display text-6xl text-gradient-teal">
                  <CountUp end={m.end} suffix={m.suffix} />
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/55">{m.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
