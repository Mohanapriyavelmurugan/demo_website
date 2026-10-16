import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  BrainCircuit,
  FileText,
  FlaskConical,
  Globe2,
  Salad,
  Search,
  Stethoscope,
  Target,
  Users,
} from "lucide-react";
import {
  Eyebrow,
  Reveal,
  Section,
} from "@/components/site/primitives";
import { DrawRule, LedgerIndex, ServeTimeline } from "@/components/site/ledger";
import { MarkExplainer } from "@/components/site/MarkExplainer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { about, company } from "@/content/site";
import { useSEO } from "@/hooks/useSEO";
import { EASE } from "@/components/site/motion";

const ORIGIN_ICONS = [Stethoscope, Users];
const BUILD_ICONS = [BrainCircuit, Salad, FileText];
const VALUE_ICONS = [FlaskConical, Search, Target, Users, Globe2];

const VAL_TRAQ_QUOTE =
  "Val is the value in your history. Traq is how we follow it over time.";

const PROMISE_UNDERLINE = "never one that replaces them";

function AboutPromise({ text }: { text: string }) {
  const idx = text.indexOf(PROMISE_UNDERLINE);
  if (idx === -1) {
    return (
      <p className="mt-6 max-w-3xl font-display text-3xl leading-snug text-primary-foreground md:text-4xl md:leading-tight">
        {text}
      </p>
    );
  }
  const before = text.slice(0, idx);
  const after = text.slice(idx + PROMISE_UNDERLINE.length);
  return (
    <p className="mt-6 max-w-3xl font-display text-3xl leading-snug text-primary-foreground md:text-4xl md:leading-tight">
      {before}
      <span className="relative inline-block">
        {PROMISE_UNDERLINE}
        <DrawRule
          onDark
          className="absolute -bottom-1 left-0 h-0.5 w-full min-w-full origin-left"
        />
      </span>
      {after}
    </p>
  );
}

export function About() {
  useSEO({
    title: "About | Valtraq",
    description: about.story[0],
  });
  const reduce = useReducedMotion();

  const originTimeline = about.origin.map((blurb, i) => ({
    label: String(i + 1).padStart(2, "0"),
    blurb,
  }));

  return (
    <div>
      <Section ground="paper" className="ground-hero !pt-16 md:!pt-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_auto_minmax(0,0.9fr)] lg:items-end lg:gap-10">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h1 className="band-heading mt-4">{about.storyTitle}</h1>
          </Reveal>
          <span
            aria-hidden
            className="hidden h-full min-h-[5rem] w-px bg-[hsl(var(--champagne)/0.55)] lg:block"
          />
          <Reveal delay={0.08}>
            <p className="max-w-md text-base leading-7 text-muted-foreground md:text-lg md:leading-8 lg:pb-1">
              {about.story[0]}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section ground="paper">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="max-w-2xl space-y-6">
              {about.story.slice(1).map((para) => (
                <p
                  key={para.slice(0, 48)}
                  className="text-lg leading-8 text-muted-foreground md:text-xl md:leading-9"
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12} variant="right" className="lg:col-span-5">
            <blockquote className="glass-card-float relative overflow-hidden rounded-[1.35rem] p-7 md:mt-12 md:p-9">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-[45%_55%_60%_40%] bg-[hsl(var(--mist)/0.85)] blur-[1px]"
              />
              <span className="relative font-display text-6xl leading-none text-[hsl(var(--champagne))] md:text-7xl">
                “
              </span>
              <p className="relative mt-2 font-display text-2xl leading-snug text-foreground md:text-3xl">
                {VAL_TRAQ_QUOTE}
              </p>
              <DrawRule className="relative mt-6 w-10" />
            </blockquote>
          </Reveal>
        </div>
      </Section>

      <Section ground="mist">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-16">
          <Reveal variant="left">
            <div className="md:sticky md:top-24">
              <Eyebrow>Origin</Eyebrow>
              <h2 className="band-heading mt-4">{about.originTitle}</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08} variant="right">
            <ServeTimeline items={originTimeline} icons={ORIGIN_ICONS} />
          </Reveal>
        </div>
      </Section>

      <Section ground="sand">
        <Reveal>
          <Eyebrow>What we build</Eyebrow>
          <h2 className="band-heading mt-4">{about.buildTitle}</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {about.build.map((body, i) => {
            const Icon = BUILD_ICONS[i];
            return (
              <motion.article
                key={body.slice(0, 40)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: EASE }}
                whileHover={reduce ? undefined : { y: -4 }}
                className={cn(
                  "glass-card-float group relative flex flex-col overflow-hidden rounded-[1.35rem] px-5 pb-6 pt-5 md:px-6 md:pb-7 md:pt-6",
                  i === 2 && "md:col-span-2"
                )}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-[45%_55%_60%_40%] bg-[hsl(var(--teal-glow)/0.45)] blur-[0.5px]"
                />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-[0_10px_22px_-16px_rgba(15,23,42,0.4)]">
                    {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                  </span>
                  <LedgerIndex n={i + 1} className="text-4xl md:text-5xl" />
                </div>
                <p className="relative mt-6 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                  {body}
                </p>
              </motion.article>
            );
          })}
        </div>
        <div className="mt-10 max-w-2xl">
          <DrawRule className="mb-5 w-10" />
          <p className="text-base leading-7 text-muted-foreground">{about.buildFoot}</p>
        </div>
      </Section>

      <Section ground="band" className="!border-0">
        <Reveal>
          <Eyebrow onDark className="!text-[hsl(var(--champagne))]">
            Promise
          </Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-3xl text-primary-foreground md:text-4xl">
            {about.promiseTitle}
          </h2>
          <AboutPromise text={about.promise} />
        </Reveal>
      </Section>

      <Section ground="mist">
        <Reveal>
          <Eyebrow>Our values</Eyebrow>
          <h2 className="band-heading mt-4">How we work.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {about.values.map((value, i) => {
            const Icon = VALUE_ICONS[i];
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: EASE }}
                whileHover={reduce ? undefined : { y: -4 }}
                className="glass-card-float group relative flex flex-col overflow-hidden rounded-[1.35rem] px-5 pb-6 pt-5 md:px-6 md:pb-7 md:pt-6"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-[45%_55%_60%_40%] bg-[hsl(var(--mist)/0.75)] blur-[0.5px]"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-[0_10px_22px_-16px_rgba(15,23,42,0.4)]">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                </span>
                <h3 className="relative mt-6 font-display text-xl leading-snug text-foreground md:text-2xl">
                  {value.title}
                </h3>
                <p className="relative mt-3 text-base leading-7 text-muted-foreground">
                  {value.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Section>

      {about.showMarkSection && (
        <Section ground="sand">
          <Reveal>
            <Eyebrow>{about.mark.title}</Eyebrow>
            <h2 className="band-heading mt-4">{company.name}</h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8">
            <MarkExplainer captions={about.mark.captions} note={about.mark.note} />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 max-w-3xl">
              <DrawRule className="mb-4 w-10" />
              <p className="font-display text-xl text-foreground md:text-2xl">
                {about.closingLine}
              </p>
            </div>
          </Reveal>
        </Section>
      )}

      <Section ground="band" className="!border-0">
        <Reveal>
          <h2 className="font-display text-3xl text-primary-foreground md:text-4xl">
            {about.investorBand.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-primary-foreground/80">
            {about.investorBand.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={about.investorBand.primary.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "cursor-pointer rounded-full bg-background text-foreground hover:bg-background/90"
              )}
            >
              {about.investorBand.primary.label}
            </Link>
            <Link
              to={about.investorBand.secondary.href}
              className="inline-flex cursor-pointer items-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {about.investorBand.secondary.label}
            </Link>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
