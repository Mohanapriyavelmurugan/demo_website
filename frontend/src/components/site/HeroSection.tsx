import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Reveal } from "@/components/site/primitives";

export type HeroCta = { label: string; href: string };

export type HeroSectionProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  visual?: React.ReactNode;
};

export function HeroSection({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  visual,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:px-8">
        <div className={visual ? "lg:col-span-7" : "lg:col-span-12"}>
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {title}
              {highlight && <span className="mt-2 block text-primary">{highlight}</span>}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{description}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={primaryCta.href}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {primaryCta.label} <ArrowRight className="h-4 w-4" />
              </Link>
              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </Reveal>
        </div>
        {visual && (
          <Reveal delay={0.2} className="lg:col-span-5">
            {visual}
          </Reveal>
        )}
      </div>
    </section>
  );
}
