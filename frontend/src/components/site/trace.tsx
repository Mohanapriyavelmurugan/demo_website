import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/site/motion";

/** Draws a horizontal/vertical clinical trace (teal = signal). */
export function TraceLine({
  className,
  vertical = false,
  tone = "teal",
  delay = 0,
}: {
  className?: string;
  vertical?: boolean;
  tone?: "teal" | "champagne";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const color = tone === "champagne" ? "bg-[hsl(var(--champagne))]" : "bg-primary";
  return (
    <motion.span
      aria-hidden
      className={cn(
        "block origin-left rounded-full",
        vertical ? "w-px origin-top" : "h-px",
        color,
        className
      )}
      initial={reduce ? false : vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    />
  );
}

/** Annotation node on a trace. Champagne = clinician judgment. */
export function TraceNode({
  n,
  className,
  tone = "teal",
  size = "md",
}: {
  n?: number | string;
  className?: string;
  tone?: "teal" | "champagne";
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "lg" ? "h-12 w-12 text-sm" : size === "sm" ? "h-6 w-6 text-[9px]" : "h-9 w-9 text-xs";
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full font-mono font-semibold tabular-nums",
        dims,
        tone === "champagne"
          ? "bg-[hsl(var(--champagne))] text-[hsl(var(--ink))]"
          : "bg-primary text-primary-foreground",
        className
      )}
    >
      {n != null ? (typeof n === "number" ? String(n).padStart(2, "0") : n) : null}
    </span>
  );
}

/** SVG path that draws once — for living traces through layouts. */
export function TracePath({
  d,
  className,
  tone = "teal",
  delay = 0,
  duration = 1.2,
}: {
  d: string;
  className?: string;
  tone?: "teal" | "champagne";
  delay?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={tone === "champagne" ? "hsl(var(--champagne))" : "hsl(var(--primary))"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      initial={reduce ? false : { pathLength: 0, opacity: 0.4 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: EASE }}
    />
  );
}

/** Champagne underline annotation under a phrase. */
export function TraceMark({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={cn("relative inline", className)}>
      {children}
      <motion.span
        aria-hidden
        className="absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[hsl(var(--champagne))]"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
      />
    </span>
  );
}

/** Margin annotation — champagne judgment note. */
export function TraceNote({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "border-l border-[hsl(var(--champagne)/0.55)] pl-3 text-xs leading-5 text-muted-foreground md:text-[13px] md:leading-6",
        className
      )}
    >
      {children}
    </aside>
  );
}

/** Editorial index row — not a card. */
export function IndexRow({
  index,
  title,
  body,
  href,
  meta,
  onSelect,
  active,
}: {
  index: number;
  title: string;
  body?: string;
  href?: string;
  meta?: string;
  onSelect?: () => void;
  active?: boolean;
}) {
  const inner = (
    <>
      <span className="font-mono text-xs tabular-nums text-[hsl(var(--champagne))] md:text-sm">
        {String(index).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-display text-lg text-foreground transition-colors group-hover:text-primary md:text-xl">
            {title}
          </span>
          {meta && (
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {meta}
            </span>
          )}
        </div>
        {body && (
          <p
            className={cn(
              "mt-1 max-w-2xl text-sm leading-6 text-muted-foreground transition-all duration-300",
              active === false ? "max-h-0 overflow-hidden opacity-0" : "opacity-100",
              active === undefined && "md:opacity-70 md:group-hover:opacity-100"
            )}
          >
            {body}
          </p>
        )}
      </div>
    </>
  );

  const cls = cn(
    "group flex w-full items-start gap-5 border-b border-border/70 py-5 text-left transition-colors last:border-b-0 md:gap-8 md:py-6",
    "hover:bg-[hsl(var(--mist)/0.35)]",
    active && "bg-[hsl(var(--mist)/0.45)]"
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  if (onSelect) {
    return (
      <button type="button" onClick={onSelect} className={cn(cls, "cursor-pointer")}>
        {inner}
      </button>
    );
  }
  return <div className={cls}>{inner}</div>;
}
