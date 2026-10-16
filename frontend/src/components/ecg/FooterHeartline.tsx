import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ecgPath } from "./ecgPath";

export function FooterHeartline() {
  const reduce = useReducedMotion();
  const d = ecgPath({ width: 1200, height: 36, beats: [0.16], unit: 5, baseline: 24 });
  return (
    <svg aria-hidden viewBox="0 0 1212 36" className="block h-9 w-full">
      <motion.path
        d={d}
        fill="none"
        stroke="hsl(var(--teal) / .6)"
        strokeWidth={1.5}
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <circle cx={1206} cy={24} r={4} className="fill-saffron" />
    </svg>
  );
}
