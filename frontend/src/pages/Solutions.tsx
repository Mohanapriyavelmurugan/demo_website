import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Building2, FlaskConical, Network, Stethoscope } from "lucide-react";
import {
  Eyebrow,
  Reveal,
  Section,
} from "@/components/site/primitives";
import { ServeTimeline, StatusLedger } from "@/components/site/ledger";
import { solutions } from "@/content/site";
import { useSEO } from "@/hooks/useSEO";

const audienceIcons = [Stethoscope, Building2, FlaskConical, Network];

export function Solutions() {
  const location = useLocation();
  useSEO({
    title: "Solutions | Valtraq",
    description: solutions.intro,
  });

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  return (
    <div>
      <Section ground="paper" className="ground-hero !pt-16 md:!pt-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_auto_minmax(0,0.9fr)] lg:items-end lg:gap-10">
          <Reveal>
            <Eyebrow>Our solutions</Eyebrow>
            <h1 className="band-heading mt-4">Everything Valtraq offers.</h1>
          </Reveal>
          <span
            aria-hidden
            className="hidden h-full min-h-[5rem] w-px bg-[hsl(var(--champagne)/0.55)] lg:block"
          />
          <Reveal delay={0.08}>
            <p className="max-w-md text-base leading-7 text-muted-foreground lg:pb-1">
              {solutions.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-14">
          <StatusLedger blocks={solutions.blocks} />
        </div>
      </Section>

      <Section ground="sand">
        <Reveal>
          <Eyebrow>Who we serve</Eyebrow>
          <h2 className="band-heading mt-4">Built for the people who deliver care.</h2>
        </Reveal>
        <div className="mt-10 max-w-3xl">
          <ServeTimeline items={solutions.whoWeServe} icons={audienceIcons} />
        </div>
      </Section>
    </div>
  );
}
