import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { company, contact } from "@/content/company";
import { useSEO } from "@/hooks/useSEO";

const facts = [
  ["Company", company.legalName],
  ["Headquarters", "Kannur, Kerala, India"],
  ["Business model", "Clinical intelligence as a service"],
  ["Platform", `${company.product}, clinical decision support for outpatient care`],
  ["Customers", "Outpatient clinics, hospital OPDs, care networks, and digital health platforms"],
  ["Operating principle", "Physician-centered: every decision stays with the clinician"],
];

export function About() {
  useSEO({
    title: "Company | Valtraq Healthcare",
    description:
      "Valtraq Healthcare is an Indian clinical intelligence company delivering guideline-grounded decision support to outpatient care as a service.",
  });

  return (
    <div>
      <PageHero
        label="Company"
        title={<>{company.legalName}</>}
        subtitle="An Indian clinical intelligence company delivering decision support as a service, so physicians everywhere can apply guideline-based care with consistency, safety, and accountability."
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
            <Eyebrow className="mt-12">What we do</Eyebrow>
            <p className="copy-compact mt-4">
              Valtraq builds and operates clinical intelligence for outpatient care. Rather than
              selling software for providers to run themselves, we deliver decision support, guideline
              maintenance, and clinical analytics as a managed service, starting with diabetes and
              cardiometabolic care.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <Eyebrow className="mt-10">Where we are going</Eyebrow>
            <p className="copy-compact mt-4">
              {company.product} establishes our foundation in diabetology. We are extending structured
              clinical reasoning, guideline synthesis, and physician-reviewed workflow support across
              additional chronic-care specialties, always under clinical supervision.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <Link
                to="/vision"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Vision and principles <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Leadership <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Partner or invest with Valtraq."
        description="We welcome conversations with care providers, partners, and investors."
        ctaLabel="Get in touch"
        ctaHref="/contact"
        email={contact.email}
        phone={contact.phone}
      />
    </div>
  );
}
