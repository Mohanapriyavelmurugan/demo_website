import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}> = ({ children, className, delay = 0, y = 40 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-90px" }}
    transition={{ duration: 1, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <span className={cn("eyebrow", className)}>
    <span className="h-px w-6 bg-champagne/60" />
    {children}
  </span>
);

/* Editorial page hero: marginalia label + oversized Fraunces title with an italic accent word */
export const PageHero: React.FC<{
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}> = ({ label, title, subtitle, align = "left" }) => (
  <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-24">
    <div className="aurora-orb -left-20 -top-24 h-[36vw] w-[36vw] bg-teal-glow/12 animate-aurora-drift" />
    <div className="aurora-orb right-0 top-10 h-[28vw] w-[28vw] bg-champagne/[0.06] animate-aurora-drift" />
    <div className={cn("relative mx-auto max-w-7xl px-6 lg:px-8", align === "center" && "text-center")}>
      <Reveal>
        <Eyebrow className={cn(align === "center" && "justify-center")}>{label}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-light leading-[0.98] tracking-tight text-ivory md:text-6xl lg:text-7xl">
          {title}
        </h1>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/60",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  </section>
);

/* Layered glass card — solid navy base with a glass layer offset for depth */
export const LayeredCard: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className="relative">
    <div className="absolute -right-2.5 -top-2.5 hidden h-full w-full rounded-2xl border border-white/[0.05] bg-white/[0.015] md:block" />
    <div className={cn("glass-strong relative", className)}>{children}</div>
  </div>
);
