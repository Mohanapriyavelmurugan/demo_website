import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { DiabetesTrendChart } from "@/components/home/DiabetesTrendChart";
import { ClinicImpactModel } from "@/components/home/ClinicImpactModel";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { CompanyHeroVisual } from "@/components/home/CompanyHeroVisual";
import RevealText from "@/components/ui/reveal-text";
import { Eyebrow, Reveal } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";

const metrics = [
  { label: "Adults living with diabetes in India (2024)", value: 89.8, suffix: " million", decimals: 1 },
  { label: "Undiagnosed", value: 57, suffix: "%" },
  { label: "On treatment achieving glycemic control", prefix: "<", value: 25, suffix: "%" },
  { label: "Treated by physicians without adequate disease-specific training", value: 39, suffix: "%" },
];

const structuralGaps = [
  {
    no: "01",
    title: "Variation in clinical decision making",
    body:
      "Outpatient diabetes care often varies by clinician experience and local practice patterns, even when patients present with comparable clinical profiles. Standardization of guideline application remains incomplete across settings.",
  },
  {
    no: "02",
    title: "Specialist capacity constraints",
    body:
      "Demand for diabetology expertise exceeds specialist availability. A substantial share of diabetes management occurs in general outpatient settings with limited disease-specific training bandwidth.",
  },
  {
    no: "03",
    title: "Guideline adherence under workload pressure",
    body:
      "Clinical guidelines evolve continuously. High patient volume and fragmented documentation reduce consistent application of guideline recommendations under physician oversight.",
  },
  {
    no: "04",
    title: "Chronic disease delivery at scale",
    body:
      "India's diabetes burden requires scalable physician support systems that improve consistency and safety without displacing clinical accountability.",
  },
];

export function Home() {
  useSEO({
    title: "Valtraq - Clinical Intelligence",
    description:
      "Valtraq is an Indian clinical intelligence company building physician-centered decision support systems for guideline-based outpatient care.",
  });

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <AnimatedGradientBackground />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:gap-10 lg:px-8 md:py-24">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Valtraq Health Care Pvt. Ltd.</Eyebrow>
            </Reveal>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-normal leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <RevealText delay={80} direction="up" className="block">
                Valtraq
              </RevealText>
              <RevealText delay={220} direction="up" className="mt-2 block text-primary md:mt-3">
                Physician-centered clinical intelligence.
              </RevealText>
            </h1>
            <Reveal delay={0.28}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground md:text-[15px]">
                Valtraq develops clinical intelligence systems that strengthen guideline-based decision
                making in outpatient care across India. We build physician-centered platforms that
                improve consistency, safety, and clinical accountability at scale.
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/95"
                >
                  About Valtraq <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
                >
                  Contact our team
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:col-span-5">
            <CompanyHeroVisual />
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Public health context</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-4xl">
              Disease burden that requires scalable physician support.
            </h2>
            <p className="copy-compact mt-4">
              Diabetes represents a sustained healthcare delivery challenge in India. Population-scale
              prevalence, incomplete diagnosis, and uneven treatment outcomes increase the need for
              clinical systems that improve consistency under physician oversight.
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
            <Eyebrow>Clinical delivery challenge</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-4xl">
              Structural gaps in outpatient chronic care.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {structuralGaps.map((gap, index) => (
              <Reveal key={gap.no} delay={index * 0.05}>
                <div className="surface h-full p-6">
                  <p className="heading-accent">{gap.no}</p>
                  <h3 className="mt-3 text-lg font-medium text-foreground">{gap.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{gap.body}</p>
                </div>
              </Reveal>
            ))}
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
            <Eyebrow>Platform</Eyebrow>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              ClinoveAI - clinical intelligence for outpatient diabetes care.
            </h2>
            <p className="copy-compact mt-4">
              Valtraq&apos;s first platform helps outpatient physicians work with greater consistency
              and less repetitive effort. It is designed for clinical workflow integration, transparent
              support, and physician control.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/product"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                See how ClinoveAI works in a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Discuss clinical collaboration
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
