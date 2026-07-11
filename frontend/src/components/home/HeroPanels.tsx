import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { CheckCircle2, ShieldCheck, BookMarked } from "lucide-react";

const Panel: React.FC<{
  mx: MotionValue<number>;
  my: MotionValue<number>;
  depth: number;
  className?: string;
  float?: string;
  children: React.ReactNode;
}> = ({ mx, my, depth, className, float = "animate-float-medium", children }) => {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);
  return (
    <motion.div style={{ x, y }} className={`absolute ${className}`}>
      <div className={float}>{children}</div>
    </motion.div>
  );
};

const guidelines = ["RSSDI", "ADA", "EASD", "IDF"];

export const HeroPanels: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 20 });
  const my = useSpring(rawY, { stiffness: 60, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
      className="relative hidden h-[540px] w-full lg:block"
      data-testid="hero-3d-panels"
    >
      {/* Card 1 — Guideline Coverage (checklist badge, no metrics) */}
      <Panel mx={mx} my={my} depth={-30} float="animate-float-slow" className="left-6 top-14 z-20">
        <div className="glass-strong w-72 p-6">
          <div className="flex items-center justify-between">
            <span className="eyebrow">Guideline coverage</span>
            <BookMarked className="h-4 w-4 text-champagne" />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {guidelines.map((g) => (
              <span
                key={g}
                className="inline-flex items-center gap-1.5 rounded-full border border-teal-glow/25 bg-teal-glow/10 px-3 py-1.5 text-xs font-medium text-ivory"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-glow" />
                {g}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-foreground/50">
            Every recommendation traced to a guideline source
          </p>
        </div>
      </Panel>

      {/* Card 2 — Guideline Priority Logic (ranked list + abstract decorative line) */}
      <Panel mx={mx} my={my} depth={55} className="right-2 top-2 z-30">
        <div className="glass-strong w-60 p-5">
          <span className="eyebrow">Guideline priority logic</span>
          <ol className="mt-4 space-y-2.5">
            {guidelines.map((g, i) => (
              <li key={g} className="flex items-center gap-3 text-sm text-ivory">
                <span className="font-display text-base italic text-champagne">{i + 1}.</span>
                {g}
              </li>
            ))}
          </ol>
          {/* purely decorative abstract line — no axes, no numbers, no patient data */}
          <svg viewBox="0 0 200 30" className="mt-4 h-8 w-full opacity-40" aria-hidden="true">
            <path
              d="M0 24 C40 8, 70 26, 100 14 S160 4, 200 12"
              fill="none"
              stroke="#DCCBA1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="2 5"
            />
          </svg>
          <p className="mt-1 text-xs leading-relaxed text-foreground/50">
            Applied in priority order for every patient
          </p>
        </div>
      </Panel>

      {/* Card 4 — Guideline checks (safe, non-case-specific wording) */}
      <Panel mx={mx} my={my} depth={40} className="bottom-4 right-14 z-10">
        <div className="glass w-72 p-5">
          <span className="eyebrow">Safety checks</span>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/75">
            {[
              "Dosing checked against guideline limits",
              "Renal function reviewed before certain drugs",
              "Cross-referenced against ADA targets",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-glow" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Panel>

      {/* Card 3 — Physician approved (unchanged, true + safe) */}
      <Panel mx={mx} my={my} depth={-60} float="animate-float-medium" className="bottom-28 left-0 z-30">
        <div className="glass-strong flex items-center gap-3 px-5 py-3.5">
          <ShieldCheck className="h-6 w-6 text-teal-glow" />
          <div>
            <p className="text-sm font-medium text-ivory">Physician approved</p>
            <p className="text-xs text-foreground/50">Reviewed before every patient</p>
          </div>
        </div>
      </Panel>
    </div>
  );
};
