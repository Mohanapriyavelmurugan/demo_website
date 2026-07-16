import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

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
    transition={{ duration: 0.45, delay, ease: EASE }}
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
    <span className="h-px w-6 bg-border" />
    {children}
  </span>
);

export const PageHero: React.FC<{
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}> = ({ label, title, subtitle, align = "left" }) => (
  <section className="border-b border-border py-16 md:py-20">
    <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", align === "center" && "text-center")}>
      <Reveal>
        <Eyebrow className={cn(align === "center" && "justify-center")}>{label}</Eyebrow>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-normal leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h1>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "mt-5 max-w-2xl text-sm leading-6 text-muted-foreground md:text-[15px]",
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

export const LayeredCard: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn("surface", className)}>{children}</div>
);
