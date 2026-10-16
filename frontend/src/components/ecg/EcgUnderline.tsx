import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ecgPath } from "./ecgPath";

export function TracedWord({
  children,
  tone = "light",
  delay = 0.25,
}: {
  children: string;
  tone?: "light" | "dark";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const d = ecgPath({ width: 200, height: 24, beats: [0.58], unit: 4.2, baseline: 17 });
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 212 24"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-[0.32em] left-0 h-[0.42em] w-[calc(100%+0.3em)] overflow-visible"
      >
        <motion.path
          d={d}
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={tone === "light" ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.55)"}
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx={206}
          cy={17}
          r={3.4}
          fill="hsl(var(--champagne))"
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: delay + 0.85, duration: 0.3 }}
          style={{ transformOrigin: "206px 17px" }}
        />
      </svg>
    </span>
  );
}

/** Wraps the first occurrence of `word` in TracedWord without changing the string. */
export function withTracedWord(
  text: string,
  word = "traced",
  tone: "light" | "dark" = "light"
) {
  const i = text.indexOf(word);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <TracedWord tone={tone}>{word}</TracedWord>
      {text.slice(i + word.length)}
    </>
  );
}
