import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  Eye,
  FileText,
  ListChecks,
  MapPin,
  ShieldCheck,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Eyebrow,
  Reveal,
  Section,
  StaggerChildren,
  StaggerItem,
} from "@/components/site/primitives";
import { LedgerIndex } from "@/components/site/ledger";
import { HeroConsole } from "@/components/home/HeroConsole";
import { DotField } from "@/components/dotfield/DotField";
import { withTracedWord } from "@/components/ecg/EcgUnderline";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { company, home, primaryCta } from "@/content/site";
import { useSEO } from "@/hooks/useSEO";
import { EASE } from "@/components/site/motion";

const buildIcons = [BrainCircuit, FileText, Building2, BarChart3];
const buildBlobs = [
  "bg-[hsl(var(--mist)/0.85)]",
  "bg-[hsl(var(--teal-glow)/0.7)]",
  "bg-[hsl(var(--champagne)/0.22)]",
  "bg-[hsl(var(--mist)/0.65)]",
];
const whyIcons = [Eye, Stethoscope, MapPin, ShieldCheck];
const safetyIcons = [UserCheck, ListChecks, ShieldCheck];

export function Home() {
  useSEO({
    title: "Valtraq | Every value, traced into better care",
    description: company.heroSubhead,
  });
  const reduce = useReducedMotion();

  return (
    <div>
      {/* 1. Hero */}
      <section className="ground-hero relative overflow-hidden border-b border-border/70">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 hidden w-[55%] opacity-60 lg:block"
          style={{
            maskImage: "linear-gradient(90deg, black 40%, transparent 95%)",
            WebkitMaskImage: "linear-gradient(90deg, black 40%, transparent 95%)",
          }}
        >
          <DotField variant="paper" density="fine" motion="static" rest={[0.35, 0.45]} />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-warm">
                <span aria-hidden className="inline-block h-0.5 w-6 rounded-full bg-[hsl(var(--champagne))]" />
                {company.name}
              </p>
            </Reveal>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-normal leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
              {withTracedWord(company.heroHeadline, "traced")}
            </h1>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {company.heroSubhead}
              </p>
            </Reveal>
            <Reveal delay={0.18} variant="scale">
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={primaryCta.href}
                  className={cn(buttonVariants({ size: "lg" }), "cursor-pointer rounded-full")}
                >
                  {primaryCta.label}
                </Link>
                <Link
                  to="/about"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "cursor-pointer rounded-full border-primary/25"
                  )}
                >
                  Read our story
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="glass-card mt-8 inline-flex max-w-full items-center gap-3 rounded-full px-4 py-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card text-primary shadow-[0_8px_18px_-12px_rgba(15,23,42,0.35)]">
                  <Stethoscope className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                </span>
                <p className="text-sm font-medium text-foreground">{home.proofLine}</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} variant="scale">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[hsl(var(--mist)/0.85)] blur-2xl"
              />
              <HeroConsole />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Story teaser — split header */}
      <Section ground="paper">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_auto_minmax(0,0.9fr)] lg:items-end lg:gap-10">
          <Reveal>
            <Eyebrow>The Valtraq story</Eyebrow>
            <h2 className="band-heading mt-4">{home.storyTeaser.title}</h2>
          </Reveal>
          <span
            aria-hidden
            className="hidden h-full min-h-[5rem] w-px bg-[hsl(var(--champagne)/0.55)] lg:block"
          />
          <Reveal delay={0.08}>
            <p className="text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              {home.storyTeaser.body}
            </p>
            <Link to={home.storyTeaser.href} className="link-ledger mt-5">
              {home.storyTeaser.linkLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <motion.span
          aria-hidden
          className="mt-10 block h-px w-full origin-left rounded-full bg-[hsl(var(--champagne)/0.55)]"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        />
      </Section>

      {/* 4. What we build */}
      <Section ground="mist">
        <Reveal>
          <Eyebrow>What we build</Eyebrow>
          <h2 className="band-heading mt-4">Four offerings. One purpose.</h2>
        </Reveal>
        <StaggerChildren
          className="mt-12 grid gap-4 md:grid-cols-12"
          stagger={0.07}
        >
          {home.whatWeBuild.map((item, i) => {
            const Icon = buildIcons[i] || BrainCircuit;
            const wide = i === 0;
            return (
              <StaggerItem
                key={item.title}
                className={wide ? "md:col-span-7" : "md:col-span-5"}
              >
                <Link
                  to={item.href}
                  className="glass-card-float group relative flex h-full min-h-[15rem] cursor-pointer flex-col overflow-hidden rounded-[1.35rem] p-6 md:p-8"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute h-36 w-36 rounded-[45%_55%_60%_40%]",
                      wide ? "-right-6 -top-8" : "-bottom-8 -left-6",
                      buildBlobs[i]
                    )}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-primary shadow-[0_10px_22px_-14px_rgba(15,23,42,0.4)]">
                      <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                    </span>
                    {"status" in item && item.status ? (
                      <span className="status-pill shrink-0">{item.status}</span>
                    ) : null}
                  </div>
                  <h3 className="relative mt-6 font-display text-2xl text-foreground md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                    {item.body}
                  </p>
                  <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more{" "}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* 5. Why Valtraq — trust ledger */}
      <Section ground="sand">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Why Valtraq</Eyebrow>
              <h2 className="band-heading mt-4">Built to earn a doctor&apos;s trust.</h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-muted-foreground">
                {home.proofLine}
              </p>
            </Reveal>
          </div>
          <ol className="relative">
            <span
              aria-hidden
              className="absolute bottom-4 left-[1.4rem] top-4 w-px bg-border/80"
            />
            {home.whyValtraq.map((item, i) => {
              const Icon = whyIcons[i] || Eye;
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease: EASE }}
                  className="relative grid gap-4 border-b border-border/70 py-6 last:border-b-0 sm:grid-cols-[auto_auto_1fr] sm:items-start sm:gap-5"
                >
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-card text-primary shadow-[0_10px_22px_-14px_rgba(15,23,42,0.4)]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <LedgerIndex n={i + 1} className="pt-1 text-2xl text-[hsl(var(--champagne))]" />
                  <div>
                    <h3 className="font-display text-xl text-foreground md:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                      {item.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* 6. Safety band */}
      <Section ground="band" className="relative !border-0 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.18]">
          <DotField variant="night" density="fine" motion="static" rest={[0.5, 0.4]} />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <Eyebrow onDark className="!text-[hsl(var(--champagne))]">
              Safety, built in
            </Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-primary-foreground md:text-4xl">
              Responsibility in every consultation.
            </h2>
          </Reveal>
          <StaggerChildren className="mt-12 grid gap-4 md:grid-cols-3" stagger={0.08}>
            {home.responsibility.map((item, i) => {
              const Icon = safetyIcons[i] || ShieldCheck;
              return (
                <StaggerItem key={item.title} variant="up">
                  <div className="rounded-[1.35rem] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-sm md:p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-primary-foreground">
                        <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                      </span>
                      <LedgerIndex
                        n={i + 1}
                        className="text-xl text-[hsl(var(--champagne))]"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-xl text-primary-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-primary-foreground/80">{item.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </Section>

      {/* 7. Testimonials — hidden */}
      {home.showTestimonials && home.testimonials.length > 0 && (
        <Section ground="paper">
          <Reveal>
            <Eyebrow>Voices from clinics</Eyebrow>
            <h2 className="band-heading mt-4">What partners say</h2>
          </Reveal>
        </Section>
      )}

      {/* 8. Closing */}
      <Section ground="paper">
        <Reveal variant="scale">
          <div className="overflow-hidden rounded-[1.35rem] border border-border/60">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="glass-card-float rounded-none border-0 p-8 md:p-12">
                <h2 className="band-heading">{home.closing.title}</h2>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={home.closing.primary.href}
                    className={cn(buttonVariants({ size: "lg" }), "cursor-pointer rounded-full")}
                  >
                    {home.closing.primary.label}
                  </Link>
                  <Link
                    to={home.closing.secondary.href}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "cursor-pointer rounded-full"
                    )}
                  >
                    {home.closing.secondary.label}
                  </Link>
                </div>
                <p className="mt-8 text-sm text-muted-foreground">
                  {home.closing.investorLine}{" "}
                  <Link
                    to={home.closing.investorHref}
                    className="font-semibold text-primary underline-offset-2 hover:underline"
                  >
                    Talk to us →
                  </Link>
                </p>
              </div>
              <div className="relative flex items-end overflow-hidden bg-[hsl(var(--band))] p-8 text-primary-foreground md:p-12">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[hsl(var(--champagne)/0.18)]"
                />
                <p className="relative font-display text-2xl leading-snug md:text-3xl">
                  Every value, traced into better care.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
