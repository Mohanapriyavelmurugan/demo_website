import React, { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
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

type TrendDatum = {
  year: number;
  value: number;
  observed: number | null;
  projected: number | null;
};

interface TrendTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: TrendDatum;
  }>;
}

function TrendTooltip({ active, payload }: TrendTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  const datum = payload[0]?.payload;
  if (!datum) return null;

  const phase = datum.year <= 2024 ? "Observed (IDF Atlas)" : "Projected (IDF Atlas)";

  return (
    <div className="rounded-xl border border-border bg-card px-3 py-2.5 shadow-[0_10px_30px_-20px_hsl(var(--foreground)/0.5)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {datum.year}
      </p>
      <p className="mt-1 text-sm font-medium text-foreground">{datum.value.toFixed(1)}M adults</p>
      <p className="mt-0.5 text-[11px] text-muted-foreground">{phase}</p>
    </div>
  );
}

export function DiabetesTrendChart() {
  const reduceMotion = useReducedMotion();
  const chartShellRef = useRef<HTMLDivElement>(null);
  const [chartWidth, setChartWidth] = useState(0);

  const chartData = useMemo<TrendDatum[]>(
    () =>
      POINTS.map((point) => ({
        year: point.year,
        value: point.value,
        observed: point.year <= 2024 ? point.value : null,
        projected: point.year >= 2024 ? point.value : null,
      })),
    []
  );

  const observedPoints = POINTS.filter((point) => point.year <= 2024);
  const latestObserved = observedPoints[observedPoints.length - 1] ?? POINTS[0];
  const latestProjected = POINTS[POINTS.length - 1];

  useEffect(() => {
    const node = chartShellRef.current;
    if (!node) return;

    setChartWidth(node.clientWidth);

    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setChartWidth(entry.contentRect.width);
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const compact = chartWidth > 0 && chartWidth < 520;
  const xTicks = compact ? [2011, 2021, 2030, 2045] : POINTS.map((point) => point.year);

  return (
    <div ref={chartShellRef} className="surface overflow-hidden p-5 md:p-6" data-testid="diabetes-trend-chart">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-sm md:text-base">India diabetes burden</p>
          <p className="mt-2 font-display text-3xl text-foreground md:text-4xl">
            {reduceMotion ? `${latestObserved.value.toFixed(1)}M` : (
              <CountUp end={latestObserved.value} decimals={1} suffix="M" duration={2.2} />
            )}
            <span className="ml-2 text-base font-sans font-normal text-muted-foreground md:text-lg">
              adults in 2024
            </span>
          </p>
        </div>
        <p className="max-w-xs text-sm leading-6 text-muted-foreground">
          Observed to 2024, with IDF projection reaching{" "}
          <span className="font-medium text-primary">{latestProjected.value.toFixed(1)}M</span> by 2045.
        </p>
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground" aria-label="Trend legend">
        <li className="inline-flex items-center gap-2">
          <span className="h-0.5 w-8 rounded-full bg-primary" aria-hidden="true" />
          Observed
        </li>
        <li className="inline-flex items-center gap-2">
          <span className="relative h-0.5 w-8" aria-hidden="true">
            <span className="absolute inset-0 border-t border-dashed border-primary/70" />
          </span>
          Projected
        </li>
      </ul>

      <div className="mt-3 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={compact ? { top: 12, right: 8, left: 0, bottom: 8 } : { top: 16, right: 16, left: 4, bottom: 8 }}>
            <CartesianGrid
              vertical={false}
              stroke="hsl(var(--border) / 0.7)"
              strokeDasharray="3 6"
            />
            <XAxis
              dataKey="year"
              ticks={xTicks}
              tickLine={false}
              axisLine={{ stroke: "hsl(var(--border))" }}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: compact ? 11 : 12 }}
              dy={6}
            />
            <YAxis
              type="number"
              domain={[55, 140]}
              ticks={[60, 80, 100, 120, 140]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: compact ? 11 : 12 }}
              width={compact ? 36 : 44}
              tickFormatter={(value) => `${value}M`}
            />
            <Tooltip
              content={<TrendTooltip />}
              cursor={{ stroke: "hsl(var(--border))", strokeDasharray: "3 3" }}
            />
            <ReferenceLine
              x={2024}
              stroke="hsl(var(--border))"
              strokeDasharray="4 4"
              ifOverflow="extendDomain"
              label={
                compact
                  ? undefined
                  : {
                      value: "Projection begins",
                      position: "insideTopRight",
                      fill: "hsl(var(--muted-foreground))",
                      fontSize: 11,
                    }
              }
            />
            <Line
              type="monotone"
              dataKey="observed"
              connectNulls
              stroke="hsl(var(--primary))"
              strokeWidth={2.5}
              dot={{
                r: 3.2,
                fill: "hsl(var(--card))",
                stroke: "hsl(var(--primary))",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 4.5,
                fill: "hsl(var(--card))",
                stroke: "hsl(var(--primary))",
                strokeWidth: 2,
              }}
              isAnimationActive={!reduceMotion}
              animationDuration={1200}
            />
            <Line
              type="monotone"
              dataKey="projected"
              connectNulls
              stroke="hsl(var(--primary) / 0.7)"
              strokeWidth={2.25}
              strokeDasharray="6 6"
              dot={{
                r: 2.8,
                fill: "hsl(var(--card))",
                stroke: "hsl(var(--primary) / 0.75)",
                strokeWidth: 1.8,
              }}
              activeDot={{
                r: 4,
                fill: "hsl(var(--card))",
                stroke: "hsl(var(--primary))",
                strokeWidth: 2,
              }}
              isAnimationActive={!reduceMotion}
              animationBegin={reduceMotion ? 0 : 180}
              animationDuration={1100}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-2 text-xs text-muted-foreground">
        Source: International Diabetes Federation, IDF Diabetes Atlas (selected editions; 2030-2045 projected).
      </p>
    </div>
  );
}
