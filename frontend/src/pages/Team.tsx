import React from "react";
import { PageHero } from "@/components/site/primitives";
import { LeadershipGrid } from "@/components/site/LeadershipGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { contact, leadership } from "@/content/company";
import { useSEO } from "@/hooks/useSEO";

export function Team() {
  useSEO({
    title: "Leadership | Valtraq Healthcare",
    description:
      "The founders and executive team of Valtraq Healthcare: clinical, scientific, technology, and operations leadership.",
  });

  return (
    <div>
      <PageHero
        label="Leadership"
        title={<>The team building Valtraq.</>}
        subtitle="Valtraq is led by a practicing clinician, a scientist, and technologists, bringing together clinical practice, research, engineering, and operations to deliver clinical intelligence at scale."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <LeadershipGrid leaders={leadership} />
        </div>
      </section>

      <CtaBand
        title="Talk to our leadership team."
        description="For partnership, deployment, or investment conversations, reach out and we will connect you with the right person."
        ctaLabel="Contact us"
        ctaHref="/contact"
        email={contact.email}
        phone={contact.phone}
      />
    </div>
  );
}
