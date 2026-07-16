import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ClinoveFullDemo } from "@/components/home/ClinoveFullDemo";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

const capabilityRows = [
  ["Clinical workflow", "Vitals acquisition, diagnostic curation, context assembly, consultation documentation"],
  ["Evidence layer", "Guideline synthesis across RSSDI, ADA, EASD, and IDF frameworks"],
  ["Decision support", "Structured reasoning, risk stratification, and safety assessment"],
  ["Governance", "Physician review required before clinical use of any system output"],
];

const modules = [
  {
    no: "01",
    title: "Guideline synthesis",
    body:
      "ClinoveAI organizes relevant guideline pathways into a transparent reasoning trail, supporting consistent application of evidence in outpatient diabetology.",
  },
  {
    no: "02",
    title: "Structured clinical reasoning",
    body:
      "Patient vitals and laboratory context are assembled into structured assessments that support physician review rather than unconstrained generative output.",
  },
  {
    no: "03",
    title: "Risk identification & safety layer",
    body:
      "Organ-function considerations, interaction notes, and risk flags are surfaced for physician verification before therapy decisions are finalized.",
  },
  {
    no: "04",
    title: "Documentation support",
    body:
      "Consultation documentation - including pharmacotherapy notes, nutrition guidance, and activity plans - is prepared for clinician acceptance, modification, or discard.",
  },
];

const workflow = [
  { no: "01", title: "Patient Data Acquisition", body: "Capture outpatient vitals and relevant clinical history within the consultation workflow." },
  { no: "02", title: "Clinical Context Assembly", body: "Combine vitals with laboratory results into a unified patient context for evaluation." },
  { no: "03", title: "Guideline-Based Evidence Evaluation", body: "Apply priority-ranked clinical guidelines to the assembled context." },
  { no: "04", title: "Safety Assessment", body: "Surface medication and organ-function considerations for physician attention." },
  { no: "05", title: "Physician Review", body: "Accept, modify, or discard system recommendations. Clinical authority remains with the treating physician." },
  { no: "06", title: "Final Consultation Documentation", body: "Finalize physician-approved documentation for the clinical record." },
];

export function Product() {
  useSEO({
    title: "ClinoveAI - Valtraq",
    description:
      "ClinoveAI is Valtraq's first clinical intelligence platform for outpatient diabetes care - guideline-grounded decision support under physician supervision.",
  });

  return (
    <div>
      <PageHero
        label="Product"
        title={
          <>
            ClinoveAI
            <br />
            <span className="text-primary text-[0.72em]">
              Clinical intelligence for outpatient diabetes care.
            </span>
          </>
        }
        subtitle="ClinoveAI is Valtraq's first clinical intelligence platform. It supports physicians with guideline synthesis, structured reasoning, risk identification, and documentation assistance - without replacing clinical judgment."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-4xl table-shell">
              <table>
                <tbody>
                  {capabilityRows.map(([label, value]) => (
                    <tr key={label}>
                      <th>{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Platform capabilities</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-foreground md:text-4xl">
              Built for clinical workflow integration.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {modules.map((item, index) => (
              <Reveal key={item.no} delay={index * 0.05}>
                <div className="surface h-full p-6">
                  <p className="heading-accent">{item.no}</p>
                  <h3 className="mt-3 text-lg font-medium text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Clinical workflow</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              From acquisition to physician-approved documentation.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {workflow.map((item, index) => (
              <Reveal key={item.no} delay={index * 0.04}>
                <div className="surface grid gap-3 p-5 md:grid-cols-[72px_220px_1fr] md:items-start">
                  <p className="heading-accent">{item.no}</p>
                  <h3 className="text-sm font-medium text-foreground md:text-base">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Full demonstration</Eyebrow>
            <h2 className="mt-4 mb-8 font-display text-3xl text-foreground md:text-4xl">
              End-to-end consultation support under physician review.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ClinoveFullDemo />
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Clinical responsibility</Eyebrow>
            <p className="copy-compact mt-4">
              Every ClinoveAI output is subject to physician supervision. The treating physician
              accepts, modifies, or discards each recommendation before it is used with a patient. ClinoveAI
              supports physicians; it does not replace them.
            </p>
            <p className="mt-8 text-xs text-muted-foreground">
              This page describes product capabilities for clinical and enterprise evaluation.
              Implementation architecture details are withheld pending completed intellectual property
              protection.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/validation" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                Clinical validation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                Request a pilot evaluation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
