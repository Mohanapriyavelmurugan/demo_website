import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import {
  Eyebrow,
  PageHero,
  Reveal,
  Section,
  StaggerChildren,
  StaggerItem,
} from "@/components/site/primitives";
import { LedgerIndex, LifeAtGrid } from "@/components/site/ledger";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { careers, company } from "@/content/site";
import { useSEO } from "@/hooks/useSEO";

const lifeTags = ["People first", "Real-world impact", "Ideas to impact", "Trust by design"];

export function Careers() {
  useSEO({
    title: "Careers | Valtraq",
    description: careers.hero.subhead,
  });

  return (
    <div>
      <PageHero label="Careers" title={careers.hero.title} subtitle={careers.hero.subhead} />

      <Section ground="paper">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_auto_minmax(0,0.85fr)] lg:items-end lg:gap-10">
          <Reveal>
            <Eyebrow>How we work</Eyebrow>
            <h2 className="band-heading mt-4">Life at Valtraq.</h2>
            <p className="copy-measure mt-4">{careers.hero.subhead}</p>
          </Reveal>
          <span
            aria-hidden
            className="hidden h-full min-h-[5.5rem] w-px bg-[hsl(var(--champagne)/0.55)] lg:block"
          />
          <Reveal delay={0.08}>
            <p className="max-w-sm text-base leading-7 text-muted-foreground lg:pb-1">
              {company.heroSubhead}
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <LifeAtGrid items={careers.howWeWork} tags={lifeTags} />
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col gap-4 border-t border-border/80 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              A place to do meaningful work
            </p>
            <div className="flex flex-1 items-center gap-4 sm:justify-end">
              <span
                aria-hidden
                className="hidden h-10 w-px bg-[hsl(var(--champagne)/0.55)] sm:block"
              />
              <p className="font-display text-lg text-foreground md:text-xl">
                {careers.cta.title}
              </p>
              <Link
                to={careers.cta.primary.href}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                aria-label={careers.cta.primary.label}
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section ground="mist">
        <Reveal>
          <Eyebrow>What we look for</Eyebrow>
          <h2 className="band-heading mt-4">Traits that matter here.</h2>
        </Reveal>
        <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5" stagger={0.07}>
          {careers.lookFor.map((item, i) => (
            <StaggerItem key={item.title} variant="scale">
              <article className="glass-card-float relative flex min-h-[11rem] flex-col overflow-hidden rounded-[1.35rem] p-6 md:p-7">
                <LedgerIndex
                  n={i + 1}
                  className="text-2xl text-[hsl(var(--champagne))] md:text-3xl"
                />
                <h3 className="mt-4 font-display text-2xl text-foreground">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                  {item.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <Reveal delay={0.1}>
          <p className="mt-8 flex items-start gap-2.5 text-sm leading-6 text-muted-foreground">
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--champagne))]"
            />
            {careers.lookForNote}
          </p>
        </Reveal>
      </Section>

      <Section ground="sand" id="roles">
        <Reveal>
          <Eyebrow>Open roles</Eyebrow>
          <h2 className="band-heading mt-4">Where you can join.</h2>
          {careers.roles.length === 0 ? (
            <div className="glass-card-float relative mt-8 overflow-hidden rounded-[1.35rem] p-6 md:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-[hsl(var(--mist)/0.65)] text-primary">
                <Briefcase className="h-5 w-5" strokeWidth={1.5} aria-hidden />
              </span>
              <p className="mt-5 max-w-xl font-display text-xl leading-snug text-foreground">
                {careers.emptyRoles}
              </p>
              <Link
                to={careers.cta.secondary.href}
                className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-full border border-primary/35 bg-[hsl(var(--mist)/0.65)] px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-[hsl(var(--teal-glow))]"
              >
                {careers.cta.secondary.label}
              </Link>
            </div>
          ) : (
            <ul className="mt-8 flex flex-col gap-3">
              {careers.roles.map((role, i) => (
                <li
                  key={role.title}
                  className="glass-card-float relative overflow-hidden rounded-[1.35rem]"
                >
                  <div className="relative grid gap-3 px-5 py-4 sm:grid-cols-[auto_1px_1fr_auto] sm:items-center sm:gap-5 sm:px-6 sm:py-5">
                    <LedgerIndex
                      n={i + 1}
                      className={cn(
                        "text-3xl md:text-4xl",
                        i % 2 === 0 ? "text-primary" : "text-[hsl(var(--champagne))]"
                      )}
                    />
                    <span aria-hidden className="hidden h-10 w-px bg-border/90 sm:block" />
                    <span className="font-medium text-foreground">{role.title}</span>
                    <span className="text-sm text-muted-foreground sm:text-right">
                      {role.type} · {role.location}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </Section>

      <Section ground="band" className="!border-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-primary-foreground md:text-4xl">
              {careers.cta.title}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={careers.cta.primary.href}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "cursor-pointer rounded-full bg-background text-foreground hover:bg-background/90"
                )}
              >
                {careers.cta.primary.label}
              </a>
              <Link
                to={careers.cta.secondary.href}
                className="inline-flex cursor-pointer items-center rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                {careers.cta.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
