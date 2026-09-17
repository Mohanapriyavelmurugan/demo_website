import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, FileSearch, ShieldCheck, UserRoundCheck } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { DiabetesTrendChart } from "@/components/home/DiabetesTrendChart";
import { ClinicImpactModel } from "@/components/home/ClinicImpactModel";
import { CompanyHeroVisual } from "@/components/home/CompanyHeroVisual";
import { HeroSection } from "@/components/site/HeroSection";
import { ServiceCards } from "@/components/site/ServiceCards";
import { LeadershipGrid } from "@/components/site/LeadershipGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { Eyebrow, Reveal } from "@/components/site/primitives";
import { company, contact, leadership, services } from "@/content/company";
import { useSEO } from "@/hooks/useSEO";

const metrics = [
  { label: "Adults living with diabetes in India (2024)", value: 89.8, suffix: " million", decimals: 1 },
  { label: "Undiagnosed", value: 57, suffix: "%" },
  { label: "On treatment achieving glycemic control", prefix: "<", value: 25, suffix: "%" },
  { label: "Treated by physicians without adequate disease-specific training", value: 39, suffix: "%" },
];

const governance = [
  {
    icon: UserRoundCheck,
    title: "Physician in the loop",
    body: "Every output is accepted, modified, or discarded by the treating physician.",
  },
  {
    icon: FileSearch,
    title: "Traceable guidance",
    body: "Each consideration links back to the guideline it is grounded in.",
  },
  {
    icon: ShieldCheck,
    title: "Safety screening",
    body: "Organ-function and medication considerations are flagged before review.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditable decisions",
    body: "Review outcomes are logged for clinical oversight and quality improvement.",
  },
];

export function Home() {
  useSEO({
    title: "Valtraq Healthcare | Clinical Intelligence as a Service",
    description:
      "Valtraq Healthcare delivers clinical intelligence as a service. Valtraq CDSS provides guideline-grounded decision support for outpatient physicians in India.",
  });

  return (
    <div>
      <HeroSection
        eyebrow={company.legalName}
        title="Intelligence as a service"
        highlight="for clinical decision making."
        description="Valtraq delivers guideline-grounded clinical decision support to outpatient physicians and care networks across India, helping clinicians apply the right guidance consistently while retaining full clinical control."
        primaryCta={{ label: "Explore our services", href: "/services" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
        visual={<CompanyHeroVisual />}
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>The opportunity</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-4xl">
              Chronic disease at a scale specialists alone cannot reach.
            </h2>
            <p className="copy-compact mt-4">
              Most diabetes care in India is delivered in general outpatient settings, under heavy
              patient volume and without consistent access to specialist guidance. Valtraq brings
              that guidance into every consultation.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <Reveal delay={0.05} className="lg:col-span-7">
              <DiabetesTrendChart />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="table-shell h-full">
                <table>
                  <tbody>
                    {metrics.map((metric) => (
                      <tr key={metric.label}>
                        <th className="!w-[58%]">{metric.label}</th>
                        <td className="font-display text-lg text-foreground md:text-xl">
                          <CountUp
                            end={metric.value}
                            decimals={metric.decimals ?? 0}
                            prefix={metric.prefix}
                            suffix={metric.suffix}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Source: International Diabetes Federation, IDF Diabetes Atlas, 11th edition (2024).
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Services</Eyebrow>
                <h2 className="mt-4 max-w-2xl font-display text-3xl text-foreground md:text-4xl">
                  Clinical intelligence, delivered as a service.
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10">
            <ServiceCards services={services} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Platform</Eyebrow>
              <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
                {company.product}
              </h2>
              <p className="copy-compact mt-4">
                Our clinical decision support system surfaces guideline-grounded considerations,
                safety flags, and structured documentation during the consultation, without taking
                a single decision away from the physician.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/product"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  See {company.product} in a consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {governance.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <div className="surface h-full p-5">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="mt-4 text-base font-medium text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" data-testid="clinic-impact">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <ClinicImpactModel />
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Leadership</Eyebrow>
                <h2 className="mt-4 max-w-2xl font-display text-3xl text-foreground md:text-4xl">
                  Clinical, scientific, and technology leadership.
                </h2>
              </div>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Meet the team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10">
            <LeadershipGrid leaders={leadership} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Bring clinical intelligence to your care network."
        description="Talk to us about deploying Valtraq CDSS, partnering with Valtraq Healthcare, or investing in what we are building."
        ctaLabel="Get in touch"
        ctaHref="/contact"
        email={contact.email}
        phone={contact.phone}
      />
    </div>
  );
}
