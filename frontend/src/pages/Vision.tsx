import React from "react";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

const principles = [
  {
    title: "Guideline-grounded reasoning",
    body:
      "Recommendations are constrained to established clinical frameworks, applied in a transparent priority order, and presented for physician interpretation.",
  },
  {
    title: "Physician oversight by design",
    body:
      "Every system output requires clinical review. Accept, modify, or discard controls ensure medical decisions remain under physician supervision.",
  },
  {
    title: "Outpatient workflow integration",
    body:
      "Systems are designed for high-volume outpatient environments where consistency, documentation quality, and safety screening must coexist with clinical throughput.",
  },
  {
    title: "Guideline traceability and safety accountability",
    body:
      "Decision transparency, safety assessment, and review logging form the operational basis for clinical collaboration and continuous evaluation.",
  },
];

export function Vision() {
  useSEO({
    title: "Vision & Mission - Valtraq",
    description:
      "Valtraq builds physician-centered clinical intelligence to improve consistency and safety of guideline-based outpatient care.",
  });

  return (
    <div>
      <PageHero
        label="Vision"
        title={<>Guideline-based outpatient care, consistently delivered.</>}
        subtitle="Valtraq envisions clinical environments where physicians across India can apply the same standard of guideline-grounded decision support - with clinical accountability retained by the treating clinician."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Mission</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              Strengthen physician decision making at scale.
            </h2>
            <p className="copy-compact mt-4">
              Valtraq develops physician-centered clinical intelligence systems that improve
              consistency of care, support guideline-based reasoning, and integrate into clinical
              workflows while ensuring that all medical decisions remain under physician supervision.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="surface grid gap-4 p-5 md:grid-cols-[72px_1fr] md:items-start">
                  <p className="heading-accent">0{index + 1}</p>
                  <div>
                    <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
