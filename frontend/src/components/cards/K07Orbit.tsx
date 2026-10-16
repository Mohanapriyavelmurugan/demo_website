import { useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { StatusChip } from "./StatusChip";

const POS = [
  [16, 20],
  [84, 20],
  [16, 80],
  [84, 80],
];

export function K07Orbit({
  items,
  icons,
}: {
  items: { label: string; blurb: string; later: boolean; icon: string }[];
  icons: Record<string, LucideIcon>;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const live = useInView(ref, { amount: 0.3 });
  return (
    <>
      <div ref={ref} className="relative hidden aspect-[16/9] lg:block">
        <svg aria-hidden viewBox="0 0 160 90" className="absolute inset-0 h-full w-full">
          <ellipse
            cx="80"
            cy="45"
            rx="60"
            ry="34"
            className="fill-none stroke-hairline"
            strokeDasharray="1 2"
            strokeWidth=".3"
          />
          {POS.map(([x, y], i) => {
            const px = x * 1.6;
            const py = y * 0.9;
            const d = `M80 45 Q ${(80 + px) / 2} ${y < 50 ? 10 : 80} ${px} ${py}`;
            return (
              <g key={i}>
                <motion.path
                  d={d}
                  className={cn(
                    "fill-none",
                    items[i].later ? "stroke-saffron-edge" : "stroke-teal"
                  )}
                  strokeWidth=".4"
                  strokeDasharray={items[i].later ? "1.5 1.5" : undefined}
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                />
                {!reduce && live && !items[i].later && (
                  <circle r="1.1" className="fill-saffron">
                    <animateMotion
                      dur="4s"
                      begin={`${i * 1.3}s`}
                      repeatCount="indefinite"
                      path={d}
                    />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint ring-[10px] ring-mint/50"
        />
        {items.map((it, i) => {
          const Icon = icons[it.icon];
          return (
            <article
              key={it.label}
              style={{ left: `${POS[i][0]}%`, top: `${POS[i][1]}%` }}
              className={cn(
                "absolute w-72 -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-card p-5 shadow-card",
                it.later ? "border-dashed border-saffron-edge opacity-80" : "border-hairline"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-mint text-teal">
                  {Icon && <Icon className="h-5 w-5" />}
                </span>
                {it.later && <StatusChip status="Later" />}
              </div>
              <h3 className="mt-3 font-display text-xl">{it.label}</h3>
              <p className="mt-1 text-sm text-slate">{it.blurb}</p>
            </article>
          );
        })}
      </div>
      <ol className="relative ml-3 border-l-2 border-teal/40 lg:hidden">
        {items.map((it) => (
          <li key={it.label} className="relative pb-8 pl-7">
            <span
              aria-hidden
              className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-teal bg-card"
            />
            <h3 className="font-display text-xl">{it.label}</h3>
            {it.later && <StatusChip status="Later" />}
            <p className="mt-1 text-slate">{it.blurb}</p>
          </li>
        ))}
      </ol>
    </>
  );
}
