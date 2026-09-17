import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, BookOpenCheck, Plug, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/site/primitives";
import type { Service } from "@/content/company";

const icons = {
  stethoscope: Stethoscope,
  book: BookOpenCheck,
  chart: BarChart3,
  plug: Plug,
} as const;

export type ServiceCardsProps = {
  services: Service[];
  linkHref?: string;
  linkLabel?: string;
};

export function ServiceCards({ services, linkHref, linkLabel = "Learn more" }: ServiceCardsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => {
        const Icon = icons[service.icon];
        return (
          <Reveal key={service.title} delay={index * 0.05}>
            <div className="surface flex h-full flex-col p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.07] text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-medium leading-snug text-foreground">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{service.body}</p>
              {linkHref && (
                <Link
                  to={linkHref}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {linkLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
