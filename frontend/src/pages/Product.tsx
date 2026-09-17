import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CdssDemo } from "@/components/home/CdssDemo";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { company, contact } from "@/content/company";
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
      "Valtraq CDSS organizes relevant information and supports documentation, helping physicians use consultation time more effectively.",
  },
  {
    no: "03",
    title: "Physician-controlled output",
    body:
      "Every output is reviewable. The treating physician remains responsible for accepting, changing, or rejecting what the system presents.",
  },
];

const enterpriseReadiness = [
  ["Delivery model", "Provided as a managed service, including configuration, onboarding, and ongoing guideline updates."],
  ["Integration", "Phased integration with outpatient, EMR, and digital-health workflows."],
  ["Governance", "Human review, traceability, and audit logging are built into every deployment."],
  ["Clinical focus", "Outpatient diabetes and cardiometabolic care, with expansion across chronic-care specialties."],
];

export function Product() {
  useSEO({
    title: "Valtraq CDSS | Valtraq Healthcare",
    description:
      "Valtraq CDSS is a clinical decision support system for outpatient care: guideline-grounded, physician-reviewed, and delivered as a service.",
  });

  return (
    <div>
      <PageHero
        label="Platform"
        title={
          <>
            {company.product}
            <br />
            <span className="text-[0.72em] text-primary">
              Guideline-grounded decision support for outpatient care.
            </span>
          </>
        }
        subtitle="Valtraq CDSS helps physicians apply clinical guidance consistently, identify relevant risks, and complete consultations more efficiently, while retaining full clinical control."
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
            <Eyebrow>In practice</Eyebrow>
            <h2 className="mb-8 mt-4 font-display text-3xl text-foreground md:text-4xl">
              Clear, relevant support at the point of care.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <CdssDemo />
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Enterprise readiness</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-foreground md:text-4xl">
              Built to be deployed, governed, and supported.
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
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-3xl text-xs leading-5 text-muted-foreground">
              Product views are illustrative and do not constitute medical advice. Every Valtraq CDSS
              output is subject to physician review; the treating physician accepts, modifies, or
              discards each consideration before it is used with a patient.
            </p>
            <Link
              to="/validation"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              How we govern clinical use <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="See Valtraq CDSS with your clinical team."
        description="Request a walkthrough tailored to your care setting and workflows."
        ctaLabel="Request a walkthrough"
        ctaHref="/contact"
        email={contact.email}
        phone={contact.phone}
      />
    </div>
  );
}
