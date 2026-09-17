import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Reveal } from "@/components/site/primitives";

export type HeroCta = { label: string; href: string };

export type HeroSectionProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
  visual?: React.ReactNode;
  proofLabel?: string;
  proofItems?: string[];
};

const EASE = [0.22, 1, 0.36, 1] as const;

/* Headline animates word by word so the two lines land in sequence. */
function AnimatedWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={reduceMotion ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: delay + index * 0.07 }}
          >
            {word}
            {index < words.length - 1 && " "}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function HeroBackdrop() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Clinical grid, faded out toward the edges. */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />
      <motion.div
        className="absolute -left-24 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-primary/[0.07] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-[-20%] h-[26rem] w-[26rem] rounded-full bg-champagne/[0.07] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -30, 0], y: [0, -24, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function HeroSection({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  visual,
  proofLabel,
  proofItems,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <HeroBackdrop />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:px-8">
        <div className={visual ? "min-w-0 lg:col-span-7" : "min-w-0 lg:col-span-12"}>
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <AnimatedWords text={title} delay={0.1} />
            {highlight && (
              <AnimatedWords text={highlight} className="mt-2 block text-primary" delay={0.3} />
            )}
          </h1>
          <Reveal delay={0.5}>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{description}</p>
          </Reveal>
          <Reveal delay={0.58}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to={primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </Reveal>
          {proofItems && proofItems.length > 0 && (
            <Reveal delay={0.66}>
              <div className="mt-10 border-t border-border pt-5">
                {proofLabel && (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {proofLabel}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {proofItems.map((item) => (
                    <span key={item} className="text-sm font-medium text-foreground/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
        {visual && (
          <Reveal delay={0.3} className="min-w-0 lg:col-span-5">
            {visual}
          </Reveal>
        )}
      </div>
    </section>
  );
}
