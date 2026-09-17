import React from "react";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { ServiceCards } from "@/components/site/ServiceCards";
import { CtaBand } from "@/components/site/CtaBand";
import { company, contact, services } from "@/content/company";
import { useSEO } from "@/hooks/useSEO";

const engagement = [
  {
    no: "01",
    title: "Discovery",
    body: "We map your outpatient workflows, patient mix, specialties, and existing systems to scope where decision support adds the most value.",
  },
  {
    no: "02",
    title: "Configuration",
    body: "Guideline sets, review protocols, and governance roles are configured for your clinical teams and care settings.",
  },
  {
    no: "03",
    title: "Deployment",
    body: "Valtraq CDSS is rolled out in phases, with physician onboarding and workflow integration handled by our team.",
  },
  {
    no: "04",
    title: "Ongoing intelligence",
    body: "Guidelines stay current, review outcomes are reported back to clinical leadership, and the service improves with use.",
  },
];

const clients = [
  ["Outpatient clinics", "Consistent, guideline-grounded support for general physicians managing chronic disease."],
  ["Hospital outpatient departments", "Standardized decision support across high-volume OPDs and multiple physicians."],
  ["Care networks and chains", "Uniform clinical quality and visibility across sites, with central governance."],
  ["Digital health platforms", "Clinical intelligence delivered into your existing teleconsultation or EMR workflows."],
];

export function Services() {
  useSEO({
    title: "Services | Valtraq Healthcare",
    description:
      "Clinical decision support as a service, guideline curation, clinical analytics, and integration services from Valtraq Healthcare.",
  });

  return (
    <div>
      <PageHero
        label="Services"
        title={<>Clinical intelligence, delivered as a service.</>}
        subtitle={`${company.legalName} provides decision support, guideline maintenance, clinical analytics, and integration as one managed service, so care providers get the benefit of clinical intelligence without building it themselves.`}
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>What we provide</Eyebrow>
          </Reveal>
          <div className="mt-8">
            <ServiceCards services={services} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Who we serve</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-foreground md:text-4xl">
              Built for the settings where most care happens.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 max-w-4xl table-shell">
              <table>
                <tbody>
                  {clients.map(([label, value]) => (
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
            <Eyebrow>How we engage</Eyebrow>
            <h2 className="mt-4 max-w-2xl font-display text-3xl text-foreground md:text-4xl">
              From first conversation to running service.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {engagement.map((step, index) => (
              <Reveal key={step.no} delay={index * 0.05}>
                <div className="surface h-full p-6">
                  <p className="heading-accent">{step.no}</p>
                  <h3 className="mt-3 text-lg font-medium text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Scope a deployment with our team."
        description="Tell us about your care setting and we will outline how Valtraq CDSS would fit."
        ctaLabel="Contact us"
        ctaHref="/contact"
        email={contact.email}
        phone={contact.phone}
      />
    </div>
  );
}
