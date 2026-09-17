import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/primitives";

export type CtaBandProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  email?: string;
  phone?: string;
};

export function CtaBand({ title, description, ctaLabel, ctaHref, email, phone }: CtaBandProps) {
  return (
    <section className="section-block">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl bg-primary px-6 py-10 text-primary-foreground md:px-12 md:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
                <p className="mt-4 text-sm leading-6 text-primary-foreground/80 md:text-base">
                  {description}
                </p>
                {(email || phone) && (
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/90">
                    {email && (
                      <a href={`mailto:${email}`} className="hover:underline">
                        {email}
                      </a>
                    )}
                    {phone && (
                      <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:underline">
                        {phone}
                      </a>
                    )}
                  </div>
                )}
              </div>
              <Link
                to={ctaHref}
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-background/90 lg:self-auto"
              >
                {ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
