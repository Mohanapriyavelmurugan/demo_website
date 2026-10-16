import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ecgPath } from "./ecgPath";

export function EcgDivider({
  at = 0.18,
  tone = "light",
}: {
  at?: number;
  tone?: "light" | "dark";
}) {
  const reduce = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const d = ecgPath({ width: 1200, height: 40, beats: [at], unit: 6, baseline: 26 });
  const stroke = tone === "light" ? "hsl(var(--teal) / .55)" : "hsl(var(--teal-200) / .6)";
  return (
    <div aria-hidden className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
      <svg
        ref={ref}
        viewBox="0 0 1200 40"
        className={cn("h-10 w-full overflow-visible", inView && !reduce && "is-in")}
      >
        <motion.path
          d={d}
          fill="none"
          stroke={stroke}
          strokeWidth={1.5}
          initial={reduce ? false : { pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {!reduce && (
          <path
            d={d}
            pathLength={1}
            className="ecg-pulse"
            fill="none"
            stroke="hsl(var(--saffron))"
            strokeWidth={2.2}
            strokeLinecap="round"
          />
        )}
      </svg>
    </div>
  );
}
