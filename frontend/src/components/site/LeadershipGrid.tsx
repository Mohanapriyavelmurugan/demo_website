import React from "react";
import { Reveal } from "@/components/site/primitives";
import type { Leader } from "@/content/company";

export type LeadershipGridProps = {
  leaders: Leader[];
};

export function LeadershipGrid({ leaders }: LeadershipGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {leaders.map((leader, index) => (
        <Reveal key={leader.name} delay={index * 0.05}>
          <article className="group surface flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_hsl(var(--foreground)/0.35)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              {leader.image ? (
                <>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading={index > 2 ? "lazy" : undefined}
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                    style={{ objectPosition: leader.imagePosition ?? "center top" }}
                  />
                  {/* Unifies portraits shot against different backdrops. */}
                  <div className="pointer-events-none absolute inset-0 bg-primary/[0.06] mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl text-foreground/50">{leader.initials}</span>
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl text-foreground">{leader.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{leader.title}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{leader.bio}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
