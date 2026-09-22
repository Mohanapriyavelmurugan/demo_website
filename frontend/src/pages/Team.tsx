import React from "react";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { RoleList, TeamList } from "@/components/site/TeamList";
import { CtaBand } from "@/components/site/CtaBand";
import { contact, founderRoles, team } from "@/content/company";
import { useSEO } from "@/hooks/useSEO";

export function Team() {
  useSEO({
    title: "Operations & Technology | Valtraq Healthcare",
    description:
      "How Valtraq Healthcare is run: founding roles across clinical, scientific, and executive leadership, with operations and technology led in-house.",
  });

  return (
    <div>
      <PageHero
        label="Operations & Technology"
        title={<>Operations and technology leadership.</>}
        subtitle="Valtraq is built by a team spanning clinical practice, computational research, engineering, and operations, with clinical accountability held by practicing physicians."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Founding roles</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-4xl">
              Clinical, scientific, and executive direction.
            </h2>
            <p className="copy-compact mt-4">
              Valtraq was founded by a practicing clinician, a computational scientist, and a
              technologist. We describe the founding team by role; individual details are shared
              directly with partners, clients, and investors on request.
            </p>
          </Reveal>
          <div className="mt-8">
            <RoleList roles={founderRoles} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Eyebrow>Operations and technology</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-3xl text-foreground md:text-4xl">
              The executives running delivery day to day.
            </h2>
          </Reveal>
          <div className="mt-8 max-w-4xl">
            <TeamList members={team} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to our team."
        description="For partnership, deployment, or investment conversations, reach out and we will connect you with the right person."
        ctaLabel="Contact us"
        ctaHref="/contact"
        email={contact.email}
        phone={contact.phone}
      />
    </div>
  );
}
