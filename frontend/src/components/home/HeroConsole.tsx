import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Activity, BookOpenCheck, Check, PenLine, ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

/*
 * Illustrative animation of Valtraq CDSS moving through one consultation:
 * patient context, guideline-grounded considerations, physician review.
 * Content is fictional and labelled as illustrative.
 */

const STAGE_MS = 4200;

const patient = [
  ["Age", "54"],
  ["Type 2 diabetes", "8 years"],
  ["HbA1c", "8.4%"],
  ["eGFR", "62"],
];

const considerations = [
  { text: "Intensify glucose-lowering therapy", source: "RSSDI" },
  { text: "Assess cardiovascular risk profile", source: "ADA" },
  { text: "Review dose for renal function", source: "EASD" },
];

const stages = [
  { id: 0, label: "Patient context", icon: Activity },
  { id: 1, label: "Guideline considerations", icon: BookOpenCheck },
  { id: 2, label: "Physician review", icon: ShieldCheck },
];

const trend = [62, 58, 64, 55, 48, 52, 41, 38];

function Sparkline() {
  const width = 132;
  const height = 34;
  const points = trend
    .map((value, index) => {
      const x = (index / (trend.length - 1)) * width;
      const y = height - (value / 70) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <motion.polyline
        points={points}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
    </svg>
  );
}

export function HeroConsole() {
  const reduceMotion = useReducedMotion();
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setStage((s) => (s + 1) % stages.length), STAGE_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const ActiveIcon = stages[stage].icon;

  return (
    <div className="surface relative overflow-hidden shadow-[0_24px_60px_-40px_hsl(var(--foreground)/0.45)]">
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            {!reduceMotion && (
              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-primary"
                animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
            Valtraq CDSS
          </p>
        </div>
        <span className="text-[11px] text-muted-foreground">Illustrative consultation</span>
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-2 border-b border-border bg-secondary/40 px-5 py-3">
        {patient.map(([label, value]) => (
          <div key={label} className="flex items-baseline gap-1.5">
            <span className="text-[11px] text-muted-foreground">{label}</span>
            <span className="text-xs font-medium text-foreground">{value}</span>
          </div>
        ))}
      </div>

      <div className="relative min-h-[236px] px-5 py-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2 text-primary">
              <ActiveIcon className="h-4 w-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em]">
                {stages[stage].label}
              </p>
            </div>

            {stage === 0 && (
              <div className="mt-4 space-y-3">
                <div className="flex items-end justify-between gap-4 rounded-xl border border-border bg-background p-4">
                  <div>
                    <p className="text-[11px] text-muted-foreground">HbA1c trend</p>
                    <p className="mt-1 font-display text-2xl text-foreground">8.4%</p>
                    <p className="text-[11px] text-muted-foreground">above individualised target</p>
                  </div>
                  <Sparkline />
                </div>
                {["Medication history reconciled", "Renal function reviewed"].map((row, index) => (
                  <motion.div
                    key={row}
                    initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.25, duration: 0.35 }}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {row}
                  </motion.div>
                ))}
              </div>
            )}

            {stage === 1 && (
              <div className="mt-4 space-y-2.5">
                {considerations.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.28, duration: 0.35 }}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3"
                  >
                    <span className="text-sm leading-6 text-foreground">{item.text}</span>
                    <span className="shrink-0 rounded-full border border-primary/25 bg-primary/[0.05] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                      {item.source}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {stage === 2 && (
              <div className="mt-4">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="text-sm leading-6 text-foreground">
                    Intensify glucose-lowering therapy
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { label: "Accept", icon: Check, active: true },
                      { label: "Modify", icon: PenLine, active: false },
                      { label: "Discard", icon: X, active: false },
                    ].map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <motion.span
                          key={action.label}
                          initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.15 + index * 0.12, duration: 0.3 }}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs",
                            action.active
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border text-muted-foreground"
                          )}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {action.label}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75, duration: 0.4 }}
                  className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-primary" />
                  Accepted by the treating physician. Nothing reaches a patient without review.
                </motion.p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex gap-1.5 px-5 pb-5">
        {stages.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-label={item.label}
            onClick={() => setStage(item.id)}
            className="group h-1 flex-1 overflow-hidden rounded-full bg-border"
          >
            <span
              className={cn(
                "block h-full rounded-full bg-primary transition-all duration-500",
                stage === item.id ? "w-full" : "w-0 group-hover:w-1/4"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
