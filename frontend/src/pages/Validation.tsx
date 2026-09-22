import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

const governanceFacts = [
  ["Clinical oversight", "Held by the Chief Medical Officer, a practicing diabetologist (MBBS, MD Internal Medicine)"],
  ["Credentials", "PG Dip. Diabetes & Renal Management / PG Dip. Advanced Diabetes Care"],
  ["Review model", "Every output is accepted, modified, or discarded by the treating physician"],
  ["Traceability", "Considerations link to the guideline source they are grounded in"],
  ["Audit", "Review outcomes are logged for clinical oversight and quality improvement"],
];

const pillars = [
  {
    title: "Physician-in-the-loop review",
    body:
      "Valtraq CDSS never acts autonomously. Each consideration is presented for physician judgment, and nothing reaches a patient without clinical sign-off.",
  },
  {
    title: "Safety screening",
    body:
      "Considerations are screened for organ-function and medication factors before review, with final risk adjudication retained by the clinician.",
  },
  {
    title: "Guideline versioning",
    body:
      "Guideline sets are versioned and updated as recommendations change, so the basis of every consideration is known and current.",
  },
  {
    title: "Continuous quality review",
    body:
      "Accept, modify, and discard outcomes are analysed with clinical leadership to refine guideline prioritization and documentation quality.",
  },
];

export function Validation() {
  useSEO({
    title: "Clinical Governance | Valtraq Healthcare",
    description:
      "How Valtraq CDSS is governed in clinical use: physician-in-the-loop review, safety screening, guideline versioning, and audit.",
  });

  return (
    <div>
      <PageHero
        label="Clinical governance"
        title={<>Physician accountability, built into every output.</>}
        subtitle="Valtraq CDSS is governed by clinical leadership and designed so that decisions stay with physicians. These are the controls that apply wherever it is deployed."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-5xl table-shell">
              <table>
                <tbody>
                  {governanceFacts.map(([label, value]) => (
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
            <Eyebrow className="mt-12">Governance framework</Eyebrow>
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
              Valtraq CDSS is clinical decision support. It does not replace professional medical
              judgment, and this page does not describe regulatory approval.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Discuss clinical governance with our team <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
