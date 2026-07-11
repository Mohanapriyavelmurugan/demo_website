import React from "react";
import { Target, Compass, Heart } from "lucide-react";
import { PageHero, Reveal, Eyebrow, LayeredCard } from "@/components/site/primitives";

const values = [
  {
    icon: Target,
    title: "Guideline-first, without exception",
    description:
      "Every recommendation ClinoveAI produces is grounded in established clinical guidelines — RSSDI, ADA, EASD, and IDF — applied in a defined priority order. No inference beyond recognized standards.",
  },
  {
    icon: Compass,
    title: "Physician-in-the-loop, non-negotiable",
    description:
      "ClinoveAI is a decision-support tool, not a decision-maker. Every report is reviewed, edited, or approved by the treating physician before it reaches a patient. The physician remains the final authority.",
  },
  {
    icon: Heart,
    title: "Built for where the need is greatest",
    description:
      "We start with diabetology in India — where the burden is massive, the care gap is measurable, and the opportunity to make a difference is immediate. We build for real clinics, not hypothetical ones.",
  },
];

const statements = [
  {
    no: "01",
    label: "Vision",
    body: "A connected clinical ecosystem where every physician in India — whether in a metro specialty clinic or a district government hospital — has access to the same standard of guideline-grounded diagnostic support as a leading endocrinologist. We see this as the starting point for a broader shift: AI-assisted care infrastructure woven into India's public and private healthcare systems, built on Indian clinical data, Indian guidelines, and Indian ownership — not adapted from elsewhere.",
  },
  {
    no: "02",
    label: "Mission",
    body: "Alyvn builds clinical decision support that strengthens physician judgment rather than substituting for it. We begin with ClinoveAI in diabetology, where the need is largest and most measurable, and where a well-defined body of clinical guidelines lets us build responsibly from day one. Every system we develop keeps the physician as the final decision-maker — reviewing, editing, and approving every recommendation before it reaches a patient.",
  },
];

export function Vision() {
  return (
    <div className="overflow-hidden">
      <PageHero
        label="Vision & Mission"
        title={
          <>
            The same standard of care, <span className="italic text-champagne">everywhere</span>.
          </>
        }
      />

      <section className="relative py-8 md:py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-6 lg:px-8">
          {statements.map((s, i) => (
            <div key={s.no} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-7xl font-light italic text-white/12">{s.no}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-champagne/40 to-transparent" />
                </div>
                <h2 className="mt-4 font-display text-4xl font-normal tracking-tight text-ivory md:text-5xl">
                  {s.label}
                </h2>
              </Reveal>
              <Reveal delay={0.15} className="lg:col-span-8">
                <LayeredCard className="p-8 md:p-10">
                  <p className="text-lg font-light leading-relaxed text-white/70">{s.body}</p>
                </LayeredCard>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>What we hold to</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-normal tracking-tight text-ivory md:text-5xl">
              Values
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <div className="glass group h-full p-8 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-champagne/12 text-champagne ring-1 ring-champagne/20">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl text-ivory">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
