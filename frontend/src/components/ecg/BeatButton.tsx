import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ecgPath } from "./ecgPath";

const beat = {
  scale: [1, 1.035, 1, 1.02, 1],
  transition: { duration: 0.42, times: [0, 0.2, 0.45, 0.65, 1] },
};

const MotionLink = motion.create(Link);

type Tone = "teal" | "saffron";

const toneCls: Record<Tone, string> = {
  teal: "bg-teal text-paper hover:bg-teal-700 focus-visible:ring-teal",
  saffron: "bg-saffron text-ink hover:bg-saffron-edge focus-visible:ring-saffron",
};

function BeatInner({
  children,
  tone = "teal",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <>
      {children}
      <svg
        aria-hidden
        viewBox="0 0 120 10"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-5 bottom-1.5 h-2 opacity-0 transition-opacity duration-quick group-hover:opacity-100"
      >
        <path
          d={ecgPath({ width: 120, height: 10, beats: [0.5], unit: 1.6, baseline: 7 })}
          fill="none"
          stroke={
            tone === "saffron" ? "hsl(var(--ink) / .45)" : "hsl(var(--paper) / .55)"
          }
          strokeWidth={1}
          className="[stroke-dasharray:200] [stroke-dashoffset:200] group-hover:[stroke-dashoffset:0] motion-safe:transition-[stroke-dashoffset] motion-safe:duration-500"
        />
      </svg>
    </>
  );
}

const base =
  "group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-7 font-semibold shadow-card transition-colors focus-visible:ring-2 focus-visible:ring-offset-2";

export function BeatButton({
  className,
  children,
  tone = "teal",
  href,
  onClick,
  type,
}: {
  className?: string;
  children: React.ReactNode;
  tone?: Tone;
  href?: string;
  onClick?: React.MouseEventHandler;
  type?: "button" | "submit" | "reset";
}) {
  const reduce = useReducedMotion();
  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={reduce ? undefined : beat}
        whileFocus={reduce ? undefined : beat}
        className={cn(base, toneCls[tone], className)}
      >
        <BeatInner tone={tone}>{children}</BeatInner>
      </motion.a>
    );
  }
  return (
    <motion.button
      type={type || "button"}
      onClick={onClick}
      whileHover={reduce ? undefined : beat}
      whileFocus={reduce ? undefined : beat}
      className={cn(base, toneCls[tone], className)}
    >
      <BeatInner tone={tone}>{children}</BeatInner>
    </motion.button>
  );
}

export function BeatLink({
  to,
  className,
  children,
  tone = "teal",
  ...rest
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
  tone?: Tone;
  "data-testid"?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <MotionLink
      to={to}
      whileHover={reduce ? undefined : beat}
      whileFocus={reduce ? undefined : beat}
      className={cn(base, toneCls[tone], className)}
      {...rest}
    >
      <BeatInner tone={tone}>{children}</BeatInner>
    </MotionLink>
  );
}
