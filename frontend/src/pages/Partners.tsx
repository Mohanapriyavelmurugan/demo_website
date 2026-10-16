import React from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Eye,
  Handshake,
  Hospital,
  MapPin,
  Microscope,
  Timer,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Eyebrow,
  PageHero,
  Reveal,
  Section,
  StaggerChildren,
  StaggerItem,
} from "@/components/site/primitives";
import { PrincipleRails } from "@/components/site/ledger";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { partners } from "@/content/site";
import { useSEO } from "@/hooks/useSEO";
import { EASE } from "@/components/site/motion";

const pathIcons = [Hospital, Microscope, Handshake];
const principleIcons = [Compass, Eye, MapPin, Timer];

export function Partners() {
  useSEO({
    title: "Partners | Valtraq",
    description: partners.hero.subhead,
  });
  const partner = partners.clinicalPartner;
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero label="Partners" title={partners.hero.title} subtitle={partners.hero.subhead} />

      <Section ground="sand">
        <Reveal>
          <Eyebrow>Principles</Eyebrow>
          <h2 className="band-heading mt-4">Our partnership principles.</h2>
        </Reveal>
        <div className="mt-14 md:mt-16">
          <PrincipleRails items={partners.principles} icons={principleIcons} />
        </div>
      </Section>

      {/* Stepped path */}
      <Section ground="mist">
        <Reveal>
          <Eyebrow>How we work with you</Eyebrow>
          <h2 className="band-heading mt-4">Three paths to build together.</h2>
        </Reveal>
        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.1}>
          {partners.howWeWork.map((item, i) => {
            const Icon = pathIcons[i] || Handshake;
            return (
              <StaggerItem key={item.title} variant="up">
                <div className="relative h-full rounded-[1.35rem] border border-border/80 bg-card p-6 pt-8">
                  <span className="absolute -top-3 left-6 rounded-full bg-[hsl(var(--champagne))] px-3 py-1 text-xs font-bold text-white">
                    Step {i + 1}
                  </span>
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-xl text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Section>

      {/* Oversized quote stage */}
      <Section ground="sand">
        <Reveal>
          <Eyebrow>Clinical partner</Eyebrow>
          <h2 className="band-heading mt-4">Built beside practising clinicians.</h2>
        </Reveal>
        <Reveal delay={0.1} variant="scale">
          <figure className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-border bg-card p-8 md:p-14">
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-6 font-display text-[9rem] leading-none text-[hsl(var(--champagne)/0.22)] md:text-[12rem]"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              “
            </motion.span>
            <blockquote className="relative max-w-3xl font-display text-2xl leading-snug text-foreground md:text-4xl md:leading-tight">
              {partner.quote}
            </blockquote>
            <figcaption className="relative mt-10 flex items-start gap-4 border-t border-border/80 pt-6">
              {partner.showPhoto ? (
                <div className="h-14 w-14 overflow-hidden rounded-full bg-secondary" />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--mist))] font-display text-lg text-primary">
                  AM
                </div>
              )}
              <div className="text-sm leading-6 text-muted-foreground">
                <span className="block font-semibold text-foreground">{partner.name}</span>
                {partner.role}
                {partner.showClinic ? (
                  <>
                    <br />
                    {partner.clinic}
                  </>
                ) : null}
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      {partners.showPartnerVoices && (
        <Section ground="paper">
          <Reveal>
            <Eyebrow>Voices</Eyebrow>
            <h2 className="band-heading mt-4">Voices from partner clinics</h2>
          </Reveal>
        </Section>
      )}

      <Section ground="band" className="!border-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-primary-foreground md:text-4xl">
              {partners.cta.title}
            </h2>
            <Link
              to={partners.cta.button.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 inline-flex cursor-pointer rounded-full bg-background text-foreground hover:bg-background/90"
              )}
            >
              {partners.cta.button.label}
            </Link>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
