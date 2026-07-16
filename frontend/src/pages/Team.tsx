import React from "react";
import { UsersRound } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { PageHero, Reveal } from "@/components/site/primitives";
import { useSEO } from "@/hooks/useSEO";
import { cn } from "@/lib/utils";

export type TeamMember = {
  name: string;
  role: string;
  image?: string;
  imagePosition?: string;
  initials: string;
  bio: string[];
};

const teamMembers: TeamMember[] = [
  {
    initials: "TVK",
    name: "Telukuntla Vinay Koushik",
    role: "Co-Founder, Engineering Leadership",
    image: "/team/vinay-koushik.png",
    imagePosition: "center 12%",
    bio: [
      "Leads platform engineering for Valtraq's clinical intelligence systems, including ClinoveAI workflow and decision-support architecture.",
    ],
  },
  {
    initials: "AM",
    name: "Dr. Ashwin Mukundan",
    role: "Co-Founder, Clinical Leadership",
    bio: [
      "Practicing diabetologist directing clinical collaboration and physician review standards for ClinoveAI evaluation.",
    ],
  },
  {
    initials: "RY",
    name: "Ramabathina Yashaswini",
    role: "Co-Founder, Research Leadership",
    image: "/team/yashaswini.png",
    imagePosition: "center 10%",
    bio: [
      "Leads research strategy and evidence development connecting clinical evaluation to academic publication pathways.",
    ],
  },
  {
    initials: "MV",
    name: "Mohanapriya Velmurugan",
    role: "Co-Founder, Intellectual Property",
    bio: [
      "Directs patent strategy and product ideation protecting Valtraq's clinical reasoning and workflow approaches.",
    ],
  },
  {
    initials: "DU",
    name: "Dr. Udendhran",
    role: "Co-Founder, Technical Advisory",
    bio: [
      "Assistant Professor, Computational Intelligence, SRM University. Advises computational methods and technical direction.",
    ],
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group/card flex w-72 shrink-0 flex-col">
      <div className="surface flex h-[29rem] flex-col overflow-hidden">
        <div className="relative min-h-0 flex-1 overflow-hidden border-b border-border bg-muted">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover/card:scale-[1.02] group-hover/card:grayscale-0"
              style={{ objectPosition: member.imagePosition ?? "center top" }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f3_100%)]">
              <span className="font-display text-5xl text-foreground/55">{member.initials}</span>
            </div>
          )}
        </div>
        <div className="flex h-44 flex-col px-4 py-4">
          <h3 className="font-display text-xl leading-tight text-foreground">{member.name}</h3>
          <p className="mt-1 heading-accent">{member.role}</p>
          <div className="mt-3 space-y-1 border-t border-border pt-3">
            {member.bio.map((line) => (
              <p key={line} className="text-sm leading-6 text-muted-foreground">{line}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Team() {
  useSEO({
    title: "Team - Valtraq",
    description:
      "Engineering, clinical, research, and technology leadership building Valtraq's physician-centered clinical intelligence platforms.",
  });

  return (
    <div>
      <PageHero
        label="Team"
        title={<>Multidisciplinary clinical technology leadership.</>}
        subtitle="Valtraq brings together engineering, clinical practice, research, intellectual property, and computational advisory expertise to build physician-centered decision support."
      />

      <section className="section-block overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary"
                )}
              >
                <UsersRound className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Leadership</p>
                <p className="text-sm text-muted-foreground">
                  Clinical advisors, engineering, research, and technology leadership.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent md:w-24" />
            <Marquee className="[--duration:48s]" pauseOnHover>
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </div>
  );
}
