import React from "react";
import { useReducedMotion } from "framer-motion";
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
    title: "Vision & Mission | Valtraq Healthcare",
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
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-12">
            {revealBlock(
              <aside className="lg:sticky lg:top-24">
                <Eyebrow>Mission</Eyebrow>
                <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                  Strengthen physician decision making at scale.
                </h2>
                <p className="copy-compact mt-4">
                  Valtraq develops physician-centered clinical intelligence systems that improve
                  consistency of care, support guideline-based reasoning, and integrate into clinical
                  workflows while ensuring that all medical decisions remain under physician
                  supervision.
                </p>

                <div className="surface mt-7 border-primary/20 bg-secondary/45 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Operating principles
                  </p>
                  <p className="mt-3 font-display text-3xl text-foreground">04</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Four implementation principles define how guideline-grounded reasoning is
                    translated into physician-centered outpatient workflows.
                  </p>
                </div>
              </aside>,
              0
            )}

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute bottom-6 left-[23px] top-6 hidden border-l border-border md:block"
              />
              <ol className="space-y-5">
                {principles.map((item, index) => (
                  <li key={item.title}>
                    {revealBlock(
                      <article className="grid gap-4 md:grid-cols-[48px_1fr] md:items-start">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.08]">
                          <span className="heading-accent text-sm">0{index + 1}</span>
                        </div>
                        <div
                          className={`surface p-5 md:p-6 ${
                            index % 2 === 0 ? "bg-card" : "bg-secondary/45"
                          }`}
                        >
                          <h3 className="font-display text-2xl leading-tight text-foreground md:text-[30px]">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
                        </div>
                      </article>,
                      0.06 + index * 0.05
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
