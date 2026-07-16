import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

const validationFacts = [
  ["Clinical collaboration lead", "Dr. Ashwin Mukundan, MBBS, MD (Internal Medicine)"],
  ["Credentials", "PG Dip. Diabetes & Renal Management / PG Dip. Advanced Diabetes Care"],
  ["Evaluation site", "Dr. Ashwin's Advanced Diabetes Centre, Kannur, Kerala"],
  ["Methodology", "Physician review of every report (accept / modify / discard), logged"],
  ["Current status", "Currently under pilot evaluation"],
];

const pillars = [
  {
    title: "Prospective clinical collaboration",
    body:
      "ClinoveAI outputs are evaluated in active outpatient practice against physician judgment, forming a real-world evidence base for iterative improvement.",
  },
  {
    title: "Safety assessment",
    body:
      "Recommendations are screened for organ-function and medication considerations before physician review, with residual risk adjudication retained by the clinician.",
  },
  {
    title: "Performance benchmarking",
    body:
      "Review outcomes - accepted, modified, or discarded - are captured to benchmark decision support utility and identify areas for clinical refinement.",
  },
  {
    title: "Physician feedback loop",
    body:
      "Structured clinician feedback informs guideline prioritization, documentation quality, and workflow fit across successive evaluation cycles.",
  },
];

export function Validation() {
  useSEO({
    title: "Clinical Validation - Valtraq",
    description:
      "ClinoveAI is currently under pilot evaluation with clinical collaborators. Every report is reviewed under physician supervision.",
  });

  return (
    <div>
      <PageHero
        label="Clinical validation"
        title={<>Real-world evaluation under physician supervision.</>}
        subtitle="ClinoveAI is currently under pilot evaluation in collaboration with Dr. Ashwin Mukundan at Dr. Ashwin's Advanced Diabetes Centre, Kannur, Kerala. Validation emphasizes clinical utility, safety review, and physician feedback."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-5xl table-shell">
              <table>
                <tbody>
                  {validationFacts.map(([label, value]) => (
                    <tr key={label}>
                      <th>{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Eyebrow className="mt-12">Evaluation framework</Eyebrow>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {pillars.map((item, index) => (
              <Reveal key={item.title} delay={0.05 + index * 0.04}>
                <div className="surface h-full p-6">
                  <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="copy-compact mt-10">
              Pilot evaluation does not constitute regulatory approval. ClinoveAI remains a
              physician-supervised decision support system throughout clinical collaboration.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Discuss clinical collaboration <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
