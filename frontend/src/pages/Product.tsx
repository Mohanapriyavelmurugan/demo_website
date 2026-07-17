import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ClinoveFullDemo } from "@/components/home/ClinoveFullDemo";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

const outcomes = [
  {
    no: "01",
    title: "Guideline-aware support",
    body:
      "Relevant clinical considerations are surfaced in context, helping physicians apply current guidance without interrupting the consultation.",
  },
  {
    no: "02",
    title: "Consultation efficiency",
    body:
      "ClinoveAI organizes relevant information and supports documentation, helping physicians use consultation time more effectively.",
  },
  {
    no: "03",
    title: "Physician-controlled output",
    body:
      "Every output is reviewable. The treating physician remains responsible for accepting, changing, or rejecting what the system presents.",
  },
];

const enterpriseReadiness = [
  ["Integration", "Designed for phased integration with outpatient and digital-health workflows (under evaluation)."],
  ["Governance", "Human review, traceability, and controlled clinical use are central to deployment."],
  ["Evaluation", "Current validation focuses on usability, clinical relevance, safety, and time impact."],
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
              Guideline-grounded decision support for outpatient diabetes care in India.
            </span>
          </>
        }
        subtitle="ClinoveAI helps physicians apply clinical guidance consistently, identify relevant risks, and complete consultations more efficiently—while retaining full clinical control."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Core capabilities</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-foreground md:text-4xl">
              Practical support throughout the consultation.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {outcomes.map((item, index) => (
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
            <Eyebrow>ClinoveAI in practice</Eyebrow>
            <h2 className="mt-4 mb-8 font-display text-3xl text-foreground md:text-4xl">
              Clear, relevant support at the point of care.
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
            <Eyebrow>Enterprise readiness</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-foreground md:text-4xl">
              Designed for pilot evaluation and phased integration.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 max-w-4xl table-shell">
              <table>
                <tbody>
                  {enterpriseReadiness.map(([label, value]) => (
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
            <Eyebrow>Clinical responsibility</Eyebrow>
            <p className="copy-compact mt-4">
              Every ClinoveAI output is subject to physician supervision. The treating physician
              accepts, modifies, or discards each recommendation before it is used with a patient. ClinoveAI
              supports physicians; it does not replace them.
            </p>
            <p className="mt-8 text-xs text-muted-foreground">
              Product demonstrations are illustrative and do not constitute medical advice or a claim
              of completed clinical validation. Implementation architecture and proprietary decision
              pathways are disclosed only during controlled enterprise evaluation.
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
