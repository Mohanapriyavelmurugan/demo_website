import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

const facts = [
  ["Legal entity", "Valtraq Health Care Pvt. Ltd."],
  ["Focus", "Clinical intelligence systems for outpatient care"],
  ["First platform", "ClinoveAI - outpatient diabetes care"],
  ["Operating model", "Physician-centered decision support"],
];

export function About() {
  useSEO({
    title: "Company - Valtraq",
    description:
      "Valtraq Health Care Pvt. Ltd. is an Indian clinical intelligence company building physician-centered decision support systems for guideline-based outpatient care.",
  });

  return (
    <div>
      <PageHero
        label="Company"
        title={<>Valtraq</>}
        subtitle="An Indian clinical intelligence company building physician-centered decision support systems that improve consistency, safety, and guideline-based outpatient care."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl table-shell">
              <table>
                <tbody>
                  {facts.map(([label, value]) => (
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
            <Eyebrow className="mt-12">Mission</Eyebrow>
            <p className="copy-compact mt-4">
              Strengthen outpatient clinical decision making through guideline-grounded intelligence
              systems that preserve physician authority and improve care consistency at scale.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <Eyebrow className="mt-10">Long-term platform strategy</Eyebrow>
            <p className="copy-compact mt-4">
              ClinoveAI establishes Valtraq&apos;s clinical intelligence foundation in diabetology.
              The longer-term strategy extends structured reasoning, evidence synthesis, and
              physician-reviewed workflow support across additional chronic-care specialties - always
              under clinical supervision.
            </p>
            <Link
              to="/vision"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Vision and operating principles <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
