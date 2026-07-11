import React from "react";
import { Link } from "react-router-dom";
import { Shield, Pill, FileText, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero, Reveal, Eyebrow, LayeredCard } from "@/components/site/primitives";
import { liquidGlassClass } from "@/components/ui/liquid-glass-button";
import { useSEO } from "@/hooks/useSEO";

const features = [
  {
    icon: FileText,
    span: "lg:col-span-7",
    title: "Clinical reasoning, grounded in guideline hierarchy",
    description:
      "ClinoveAI generates a structured consultation report — diagnosis, risk assessment, medication plan, and follow-up — built from RSSDI, ADA, EASD, and IDF guidelines, applied in that priority order for every patient.",
  },
  {
    icon: Shield,
    span: "lg:col-span-5",
    title: "Medication safety intelligence",
    description:
      "Every prescription — new or existing — is screened through a dedicated safety layer before it reaches the physician: cross-checking interactions across a patient's full medication list, evaluating suitability against organ function and comorbidities, and flagging anything that needs attention. This layer runs independently of the clinical reasoning — a second, deliberate check, not a single point of failure.",
  },
  {
    icon: Pill,
    span: "lg:col-span-5",
    title: "Personalized diagnostic guidance",
    description:
      "Rather than defaulting to a generic test panel, ClinoveAI recommends lab investigations based on each patient's specific vitals, history, and risk indicators — helping physicians avoid both over-testing and missed diagnoses.",
  },
  {
    icon: Calendar,
    span: "lg:col-span-7",
    title: "Built-in follow-up planning",
    description:
      "Every consultation includes a follow-up plan tailored to the patient's actual lab values and risk profile — not generic advice, but guidance grounded in their specific clinical picture.",
  },
];

export function Product() {
  useSEO({ title: "ClinoveAI — Alyvn", description: "A structured clinical reasoning layer for every diabetology consultation — guideline-grounded, safety-checked, and physician-approved." });
  return (
    <div className="overflow-hidden">
      <PageHero
        label="The product · ClinoveAI"
        title={
          <>
            A structured <span className="italic text-champagne">reasoning layer</span> for every consultation.
          </>
        }
        subtitle="ClinoveAI brings specialist-grade guideline discipline to outpatient diabetology — surfaced at the point of care, always under the physician's control."
      />

      <section className="relative py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow>The problem</Eyebrow>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-8">
              <p className="font-display text-2xl font-light leading-snug text-ivory md:text-3xl">
                Managing diabetes well means holding a lot at once — glycemic trend, renal function,
                interactions across every medication, and the right guideline for each patient's risk
                profile. ClinoveAI is built so nothing gets missed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-12 font-display text-4xl font-normal tracking-tight text-ivory md:text-5xl">
              How it works
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1} className={f.span}>
                <div className="glass group h-full p-8 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-glow/12 text-teal-glow ring-1 ring-teal-glow/20">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl text-ivory">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-8 md:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <LayeredCard className="p-10 text-center md:p-14">
              <ShieldCheck className="mx-auto mb-6 h-10 w-10 text-champagne" />
              <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-ivory">
                Every ClinoveAI report is a draft for physician review, never a final decision. The
                treating physician reviews, edits, or rejects each report before it reaches a patient
                — a decision-support system designed to operate under direct physician oversight at
                every step.
              </p>
            </LayeredCard>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <Reveal>
            <p className="mx-auto mb-8 max-w-2xl text-sm italic text-foreground/40">
              This page describes what ClinoveAI does and why it can be trusted — not the technical
              implementation, which remains confidential pending completed IP protection.
            </p>
            <Link
              to="/validation"
              data-testid="product-validation-cta"
              className={liquidGlassClass("primary", "group text-base")}
            >
              See it validated in a real clinic
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
