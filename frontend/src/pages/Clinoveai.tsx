import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  ClipboardList,
  ListChecks,
  Plug,
  Salad,
  ShieldCheck,
  Sprout,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Eyebrow, Reveal, Section } from "@/components/site/primitives";
import { LedgerIndex, LedgerPull } from "@/components/site/ledger";
import { ecgPath } from "@/components/ecg/ecgPath";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { clinoveai, company, home } from "@/content/site";
import { useSEO } from "@/hooks/useSEO";
import { EASE } from "@/components/site/motion";

const EXPLAINABLE_UNDERLINE = "which readings and guidelines it rests on";

const momentIcons = [ClipboardList, Stethoscope, Salad] as const;
const worksWithIcons = [Plug, Sprout] as const;
const safetyIcons = [UserCheck, ListChecks, ShieldCheck] as const;

function FilmStage() {
  const reduce = useReducedMotion();
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-[hsl(var(--band))] shadow-[0_28px_60px_-36px_rgba(15,23,42,0.5)]">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(174_40%_35%),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--champagne)/0.25),transparent_45%)]"
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative flex aspect-video flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="status-pill !border-white/20 !bg-white/10 !text-primary-foreground">
          Coming soon
        </span>
        <p className="max-w-md font-display text-2xl text-primary-foreground md:text-3xl">
          {clinoveai.film.caption}
        </p>
        <p className="max-w-sm text-sm leading-6 text-primary-foreground/75">
          {clinoveai.film.note}
        </p>
      </div>
    </div>
  );
}

function ChampagneUnderline({ children }: { children: string }) {
  const reduce = useReducedMotion();
  return (
    <span className="relative inline">
      {children}
      <motion.span
        aria-hidden
        className="absolute -bottom-0.5 left-0 right-0 h-0.5 origin-left rounded-full bg-[hsl(var(--champagne))]"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: EASE }}
      />
    </span>
  );
}

function ExplainableCopy() {
  const text = clinoveai.explainable;
  const i = text.indexOf(EXPLAINABLE_UNDERLINE);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <ChampagneUnderline>{EXPLAINABLE_UNDERLINE}</ChampagneUnderline>
      {text.slice(i + EXPLAINABLE_UNDERLINE.length)}
    </>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div
      className={cn(
        "border-b border-border/80 py-4 transition-colors duration-300 last:border-b-0",
        open && "-mx-4 rounded-xl bg-[hsl(var(--mist)/0.7)] px-4"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="flex min-w-0 flex-1 items-start gap-4">
          <LedgerIndex n={index + 1} className="mt-0.5 shrink-0 text-base md:text-lg" />
          <span className="font-display text-lg text-foreground md:text-xl">{q}</span>
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-warm transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="pb-2 pl-10 pt-3 text-base leading-7 text-muted-foreground md:pl-12">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ConsultationTimeline() {
  const reduce = useReducedMotion();
  const linePath = ecgPath({
    width: 1000,
    height: 32,
    beats: [0.5],
    unit: 3.2,
    baseline: 16,
    amp: 0.85,
  });

  return (
    <div className="relative mt-14 md:mt-16">
      <svg
        aria-hidden
        className="pointer-events-none absolute left-[8%] right-[8%] top-6 hidden h-8 w-[84%] md:block"
        viewBox="0 0 1000 32"
        preserveAspectRatio="none"
      >
        <motion.path
          d={linePath}
          fill="none"
          stroke="hsl(var(--ink) / 0.22)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE }}
        />
      </svg>

      <div className="grid gap-10 md:grid-cols-3 md:gap-6">
        {clinoveai.moments.map((moment, i) => {
          const Icon = momentIcons[i];
          return (
            <Reveal key={moment.title} delay={0.06 * i} variant="up">
              <div className="flex flex-col items-center md:items-stretch">
                <motion.span
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-[0_10px_22px_-16px_rgba(15,23,42,0.4)]"
                  whileHover={reduce ? undefined : { scale: 1.06 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </motion.span>
                <article className="glass-card-float relative mt-8 flex min-h-[14rem] w-full flex-col overflow-hidden rounded-[1.35rem] p-6 md:mt-10 md:min-h-[15.5rem] md:p-8">
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute h-32 w-32 rounded-[45%_55%_60%_40%] blur-[1px]",
                      i === 0 && "-right-6 -top-8 bg-[hsl(var(--mist)/0.85)]",
                      i === 1 && "-left-4 -top-6 bg-[hsl(var(--teal-glow)/0.45)]",
                      i === 2 && "-right-4 bottom-0 bg-[hsl(var(--champagne)/0.2)]"
                    )}
                  />
                  <LedgerIndex
                    n={i + 1}
                    className={cn(
                      "relative text-3xl md:text-4xl",
                      i % 2 === 0 ? "text-primary" : "text-[hsl(var(--champagne))]"
                    )}
                  />
                  <h3 className="relative mt-4 font-display text-xl text-foreground md:text-2xl">
                    {moment.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                    {moment.body}
                  </p>
                </article>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

export function Clinoveai() {
  useSEO({
    title: "Clinoveai | Valtraq",
    description: clinoveai.hero.subhead,
  });

  return (
    <div>
      <Section ground="paper" className="ground-hero !pt-16 md:!pt-20">
        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-4 -top-4 h-36 w-36 rounded-[45%_55%_60%_40%] bg-[hsl(var(--mist)/0.85)] blur-[1px] md:-right-8 md:-top-8"
          />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_auto_minmax(0,0.9fr)] lg:items-end lg:gap-10">
            <Reveal>
              <Eyebrow>Clinoveai</Eyebrow>
              <h1 className="band-heading mt-4">{clinoveai.hero.headline}</h1>
            </Reveal>
            <span
              aria-hidden
              className="hidden h-full min-h-[5rem] w-px bg-[hsl(var(--champagne)/0.55)] lg:block"
            />
            <Reveal delay={0.08}>
              <p className="max-w-md text-base leading-7 text-muted-foreground lg:pb-1">
                {clinoveai.hero.subhead}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact?type=demo"
                  className={cn(buttonVariants({ size: "lg" }), "cursor-pointer rounded-full")}
                >
                  Request a demo
                </Link>
                <a
                  href={company.clinoveaiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "cursor-pointer rounded-full"
                  )}
                >
                  Open Clinoveai ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section ground="paper">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_auto_minmax(0,0.9fr)] lg:items-end lg:gap-10">
          <Reveal>
            <Eyebrow>Product film</Eyebrow>
            <h2 className="band-heading mt-4">{clinoveai.film.caption}</h2>
          </Reveal>
          <span
            aria-hidden
            className="hidden h-full min-h-[4rem] w-px bg-[hsl(var(--champagne)/0.55)] lg:block"
          />
          <span className="hidden lg:block" aria-hidden />
        </div>
        <Reveal delay={0.1} variant="scale" className="mt-8 md:mt-10">
          <div className="glass-card-float relative overflow-hidden rounded-[1.35rem] p-3">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-10 h-40 w-44 rounded-[40%_60%_55%_45%] bg-[hsl(var(--teal-glow)/0.55)]"
            />
            <div className="relative">
              <FilmStage />
            </div>
          </div>
        </Reveal>
      </Section>

      <Section ground="mist">
        <Reveal>
          <Eyebrow>In the consultation</Eyebrow>
          <h2 className="band-heading mt-4">Three moments, not features.</h2>
        </Reveal>
        <ConsultationTimeline />
      </Section>

      <Section ground="sand">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.1fr)] lg:items-start lg:gap-10">
          <Reveal>
            <Eyebrow>Explainable AI</Eyebrow>
            <h2 className="band-heading mt-4">Explainable, in plain words.</h2>
          </Reveal>
          <span
            aria-hidden
            className="hidden w-px self-stretch bg-[hsl(var(--champagne)/0.55)] lg:block"
          />
          <Reveal delay={0.08}>
            <LedgerPull className="max-w-none pl-6 md:pl-7 [&>p]:text-2xl [&>p]:leading-snug [&>p]:md:text-3xl">
              <ExplainableCopy />
            </LedgerPull>
          </Reveal>
        </div>
      </Section>

      <Section ground="paper">
        <Reveal>
          <Eyebrow>Fits your clinic</Eyebrow>
          <h2 className="band-heading mt-4">Works with your clinic.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-[7fr_1px_5fr] md:items-stretch md:gap-0">
          {clinoveai.worksWith.map((card, i) => {
            const Icon = worksWithIcons[i];
            const cardEl = (
              <Reveal key={card.title} delay={0.08 * i} variant={i === 0 ? "left" : "right"}>
                <article className="glass-card-float relative flex h-full min-h-[14rem] flex-col overflow-hidden rounded-[1.35rem] p-6 md:min-h-[15.5rem] md:p-8">
                  <span
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute h-36 w-36 rounded-[45%_55%_60%_40%] blur-[1px]",
                      i === 0
                        ? "-right-6 -top-8 bg-[hsl(var(--mist)/0.85)]"
                        : "-right-4 bottom-0 bg-[hsl(var(--champagne)/0.22)]"
                    )}
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-[0_10px_22px_-16px_rgba(15,23,42,0.4)]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="relative mt-6 font-display text-3xl text-foreground">
                    {card.title}
                  </h3>
                  <p className="relative mt-4 flex-1 text-base leading-7 text-muted-foreground md:text-lg">
                    {card.body}
                  </p>
                </article>
              </Reveal>
            );
            if (i === 0) {
              return (
                <React.Fragment key={card.title}>
                  {cardEl}
                  <span
                    aria-hidden
                    className="hidden self-stretch bg-[hsl(var(--champagne)/0.55)] md:block"
                  />
                </React.Fragment>
              );
            }
            return cardEl;
          })}
        </div>
      </Section>

      <Section ground="band" className="!border-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <Reveal>
              <Eyebrow className="!text-[hsl(var(--champagne))]">Safety, built in</Eyebrow>
              <h2 className="mt-4 max-w-md font-display text-3xl text-primary-foreground md:text-4xl">
                Responsibility in every consultation.
              </h2>
            </Reveal>
            <div className="divide-y divide-[hsl(var(--champagne)/0.35)]">
              {home.responsibility.map((item, i) => {
                const Icon = safetyIcons[i];
                return (
                  <Reveal key={item.title} delay={0.06 * i}>
                    <div className="flex gap-5 py-7 first:pt-0 last:pb-0 md:gap-6">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-foreground/35 bg-transparent text-primary-foreground">
                        <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-display text-xl text-primary-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-primary-foreground/80">{item.body}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section ground="mist">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12">
          <Reveal className="lg:sticky lg:top-28">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="band-heading mt-4">Clear answers.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass-card-float rounded-[1.35rem] px-5 py-2 md:px-7 md:py-3">
              {clinoveai.faq.map((item, i) => (
                <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section ground="band" className="!border-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-primary-foreground md:text-4xl">
              {clinoveai.closing.title}
            </h2>
            <Link
              to={clinoveai.closing.cta.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 inline-flex cursor-pointer rounded-full bg-background text-foreground hover:bg-background/90"
              )}
            >
              {clinoveai.closing.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
