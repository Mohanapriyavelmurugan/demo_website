import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { CountUp } from "@/components/CountUp";

/** IDF Atlas trend points - India adults with diabetes (millions). */
const POINTS = [
  { year: 2011, value: 61.3 },
  { year: 2019, value: 77.0 },
  { year: 2021, value: 74.2 },
  { year: 2024, value: 89.8 },
  { year: 2030, value: 101.0 },
  { year: 2045, value: 134.2 },
];

const W = 640;
const H = 220;
const PAD = { top: 24, right: 16, bottom: 36, left: 40 };

function buildPath(values: number[]) {
  const min = Math.min(...values) * 0.92;
  const max = Math.max(...values) * 1.04;
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  return values
    .map((v, i) => {
      const x = PAD.left + (i / (values.length - 1)) * innerW;
      const y = PAD.top + (1 - (v - min) / (max - min)) * innerH;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

export function DiabetesTrendChart() {
  const ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [progress, setProgress] = useState(0);
  const [pathLength, setPathLength] = useState(0);

  const path = useMemo(() => buildPath(POINTS.map((p) => p.value)), []);
  const latest = POINTS[POINTS.length - 1];

  useEffect(() => {
    if (!pathRef.current) return;
    setPathLength(pathRef.current.getTotalLength());
  }, [path]);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 2200;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const dashOffset = pathLength * (1 - progress);
  const currentValue = POINTS[0].value + (latest.value - POINTS[0].value) * progress;

  return (
    <div ref={ref} className="surface overflow-hidden p-5 md:p-6" data-testid="diabetes-trend-chart">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-sm md:text-base">India diabetes burden</p>
          <p className="mt-2 font-display text-3xl text-foreground md:text-4xl">
            <CountUp end={89.8} decimals={1} suffix="M" duration={2.2} />
            <span className="ml-2 text-base font-sans font-normal text-muted-foreground md:text-lg">
              adults in 2024
            </span>
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Rising toward{" "}
          <span className="font-medium text-primary">
            {currentValue.toFixed(0)}M
          </span>{" "}
          on the projected path
        </p>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-4 h-auto w-full"
        role="img"
        aria-label="Line chart of adults with diabetes in India from 2011 to 2045 projection"
      >
        <path
          ref={pathRef}
          d={path}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={pathLength || 1}
          strokeDashoffset={pathLength ? dashOffset : 0}
          opacity={0.9}
        />
        {POINTS.map((point, i) => {
          const values = POINTS.map((p) => p.value);
          const min = Math.min(...values) * 0.92;
          const max = Math.max(...values) * 1.04;
          const innerW = W - PAD.left - PAD.right;
          const innerH = H - PAD.top - PAD.bottom;
          const x = PAD.left + (i / (POINTS.length - 1)) * innerW;
          const y = PAD.top + (1 - (point.value - min) / (max - min)) * innerH;
          const visible = progress > i / (POINTS.length - 1) - 0.05;
          return (
            <g key={point.year} opacity={visible ? 1 : 0}>
              <circle cx={x} cy={y} r={3.5} fill="hsl(var(--primary))" />
              <text
                x={x}
                y={H - 12}
                textAnchor="middle"
                className="fill-muted-foreground"
                style={{ fontSize: 11 }}
              >
                {point.year}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="mt-2 text-xs text-muted-foreground">
        Source: International Diabetes Federation, IDF Diabetes Atlas (selected editions; 2030-2045 projected).
      </p>
    </div>
  );
}
