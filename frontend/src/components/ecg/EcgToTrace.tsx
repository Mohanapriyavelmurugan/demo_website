import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ecgPath } from "./ecgPath";

function Bead({
  cx,
  progress,
  start,
  end,
}: {
  cx: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const fill = useTransform(progress, [start, end], ["hsl(var(--card))", "hsl(var(--teal))"]);
  return (
    <motion.circle cx={cx} cy={70} r={7} className="stroke-teal" strokeWidth={2} style={{ fill }} />
  );
}

export function EcgToTrace({
  points,
  targetRef,
}: {
  points: number[];
  targetRef: React.RefObject<HTMLElement | null>;
}) {
  const reduce = useReducedMotion();
  const W = 1200;
  const H = 120;
  const beat = ecgPath({ width: W, height: H, beats: points, unit: 14, baseline: 70, amp: 1 });
  const flat = ecgPath({ width: W, height: H, beats: points, unit: 14, baseline: 70, amp: 0 });
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 75%", "center 40%"],
  });
  const d = useTransform(scrollYProgress, [0, 0.55, 1], [beat, beat, flat]);
  const draw = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${W} ${H}`}
      className="absolute inset-x-0 top-0 hidden h-[120px] w-full md:block"
    >
      <motion.path
        d={reduce ? flat : d}
        fill="none"
        stroke="hsl(var(--teal))"
        strokeWidth={2}
        style={{ pathLength: reduce ? 1 : draw }}
        strokeLinejoin="round"
      />
      {points.map((p, i) => (
        <Bead
          key={i}
          cx={p * W}
          progress={scrollYProgress}
          start={0.55 + i * 0.12}
          end={0.62 + i * 0.12}
        />
      ))}
      <circle cx={W - 6} cy={70} r={5} className="fill-saffron" />
    </svg>
  );
}
