import React from "react";
import { cn } from "@/lib/utils";
import {
  Reveal,
  AnimatedHeadline,
  StaggerChildren,
  StaggerItem,
  HoverLift,
} from "@/components/site/motion";
import { DrawRule } from "@/components/site/ledger";

export { Reveal, AnimatedHeadline, StaggerChildren, StaggerItem, HoverLift };

export const Eyebrow: React.FC<{
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}> = ({ children, className, onDark = false }) => (
  <span className={cn("eyebrow", className)}>
    <DrawRule onDark={onDark} />
    {children}
  </span>
);

export const PageHero: React.FC<{
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  actions?: React.ReactNode;
  align?: "left" | "center";
  ground?: "paper" | "mist" | "sand" | "hero";
}> = ({ label, title, subtitle, actions, align = "left", ground = "hero" }) => {
  const groundClass =
    ground === "mist"
      ? "ground-mist"
      : ground === "sand"
        ? "ground-sand"
        : ground === "paper"
          ? "ground-paper"
          : "ground-hero";

  return (
    <section className={cn("border-b border-border/70 py-16 md:py-24", groundClass)}>
      <div
        className={cn(
          "mx-auto max-w-6xl px-5 sm:px-6 lg:px-8",
          align === "center" && "text-center"
        )}
      >
        {label && (
          <Reveal>
            <Eyebrow className={cn(align === "center" && "justify-center")}>{label}</Eyebrow>
          </Reveal>
        )}
        <h1
          className={cn(
            "max-w-[20ch] font-display text-4xl font-normal leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl",
            label && "mt-5",
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <Reveal delay={0.14}>
            <p
              className={cn(
                "mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8",
                align === "center" && "mx-auto"
              )}
            >
              {subtitle}
            </p>
          </Reveal>
        )}
        {actions && (
          <Reveal delay={0.2} variant="scale">
            <div
              className={cn(
                "mt-8 flex flex-wrap items-center gap-3",
                align === "center" && "justify-center"
              )}
            >
              {actions}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export type SectionGround = "paper" | "mist" | "sand" | "band" | "none";

export const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  ground?: SectionGround;
  flush?: boolean;
}> = ({ children, className, id, ground = "none", flush = false }) => {
  const groundClass =
    ground === "mist"
      ? "ground-mist"
      : ground === "sand"
        ? "ground-sand"
        : ground === "band"
          ? "ground-band"
          : ground === "paper"
            ? "ground-paper"
            : "";

  return (
    <section id={id} className={cn("section-block", groundClass, className)}>
      <div
        className={cn(
          flush ? "w-full" : "mx-auto max-w-6xl px-5 sm:px-6 lg:px-8"
        )}
      >
        {children}
      </div>
    </section>
  );
};

export const LayeredCard: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={cn("surface p-6 md:p-7", className)}>{children}</div>;
