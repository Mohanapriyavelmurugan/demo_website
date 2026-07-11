import React from "react";
import { PageHero, Reveal } from "@/components/site/primitives";

const team = [
  { initials: "TVK", name: "Telukuntla Vinay Koushik", role: "Co-Founder & Lead Developer", credentials: [] as string[] },
  {
    initials: "AM",
    name: "Dr. Ashwin Mukundan",
    role: "Co-Founder & Clinical Lead",
    credentials: [
      "MBBS, MD (Internal Medicine, University First Rank)",
      "PG Dip. (Diabetes and Renal Management)",
      "PG Dip. (Advanced Diabetes Care)",
    ],
  },
  { initials: "RY", name: "Ramabathina Yashaswini", role: "Co-Founder & Research Lead", credentials: [] },
  { initials: "MV", name: "Mohanapriya Velmurugan", role: "Co-Founder & IP Lead", credentials: [] },
  {
    initials: "DU",
    name: "Dr. Udendhran",
    role: "Co-Founder & Technical Advisor",
    credentials: ["Assistant Professor, SRM University", "Computational Intelligence"],
  },
];

export function Team() {
  return (
    <div className="overflow-hidden">
      <PageHero
        label="Founders & team"
        title={
          <>
            Clinicians, engineers &amp; <span className="italic text-champagne">researchers</span>.
          </>
        }
        subtitle="Built by people committed to closing India's diabetes care gap."
      />

      <section className="relative py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="glass group flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-glow/25 to-champagne/15 font-display text-2xl text-ivory ring-1 ring-white/10">
                    {m.initials}
                  </div>
                  <h3 className="font-display text-2xl text-ivory">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-champagne">{m.role}</p>
                  {m.credentials.length > 0 && (
                    <div className="mt-auto space-y-1 pt-6">
                      <div className="hairline pt-4">
                        {m.credentials.map((c) => (
                          <p key={c} className="text-xs text-white/45">
                            {c}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-16 text-center text-lg italic text-white/40">
              Built with clinicians, for clinicians.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
