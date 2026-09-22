import React from "react";
import { Reveal } from "@/components/site/primitives";
import type { Role, TeamMember } from "@/content/company";

/*
 * Renders leadership without photographs. Founders appear as roles only;
 * named executives appear with an initial monogram. This is a deliberate
 * privacy decision — do not add image support back without being asked.
 */

export function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-3">
      {roles.map((role, index) => (
        <Reveal key={role.title} delay={index * 0.05}>
          <li className="surface h-full list-none p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              0{index + 1}
            </p>
            <h3 className="mt-3 font-display text-xl leading-tight text-foreground">{role.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{role.detail}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function TeamList({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {members.map((member, index) => (
        <Reveal key={member.name} delay={index * 0.05}>
          <article className="surface flex h-full items-start gap-4 p-6">
            <span
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.06] font-display text-lg text-primary"
            >
              {member.initials}
            </span>
            <div>
              <h3 className="font-display text-xl leading-tight text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{member.title}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.bio}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
