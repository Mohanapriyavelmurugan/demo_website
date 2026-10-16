import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ecgPath } from "./ecgPath";

export function RouteBeat() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const first = useRef(true);
  const [k, setK] = useState(0);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setK((n) => n + 1);
  }, [pathname]);

  if (reduce || k === 0) return null;

  return (
    <svg
      key={k}
      aria-hidden
      viewBox="0 0 1440 14"
      preserveAspectRatio="none"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-3.5 w-full"
    >
      <motion.path
        d={ecgPath({ width: 1440, height: 14, beats: [0.5], unit: 2.4, baseline: 10 })}
        fill="none"
        stroke="hsl(var(--teal))"
        strokeWidth={1.5}
        initial={{ pathLength: 0, opacity: 1 }}
        animate={{ pathLength: 1, opacity: [1, 1, 0] }}
        transition={{ duration: 0.8, times: [0, 0.75, 1], ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}
