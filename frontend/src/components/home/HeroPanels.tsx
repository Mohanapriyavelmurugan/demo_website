import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { Activity, CheckCircle2, ShieldCheck, TrendingDown } from "lucide-react";

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
      className="relative hidden h-[520px] w-full lg:block"
      data-testid="hero-3d-panels"
    >
      {/* Central hero glass panel — glycemic control */}
      <Panel mx={mx} my={my} depth={-30} float="animate-float-slow" className="left-8 top-16 z-20">
        <div className="glass-strong w-72 p-6">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-teal-glow">Glycemic control</span>
            <Activity className="h-4 w-4 text-teal-glow" />
          </div>
          <div className="mt-4 flex items-end gap-2">
            <span className="font-display text-5xl text-white">72</span>
            <span className="mb-1 text-sm text-white/50">% at target</span>
          </div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-teal-glow to-sky-400"
            />
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-white/50">
            <TrendingDown className="h-3.5 w-3.5 text-teal-glow" /> +18% vs baseline cohort
          </p>
        </div>
      </Panel>

      {/* HbA1c ECG-style sparkline panel */}
      <Panel mx={mx} my={my} depth={55} className="right-4 top-4 z-30">
        <div className="glass-strong w-60 p-5">
          <span className="text-xs uppercase tracking-[0.2em] text-white/60">HbA1c trend</span>
          <div className="mt-3 flex items-end justify-between">
            <span className="font-display text-3xl text-white">6.8%</span>
            <span className="rounded-full bg-teal-glow/15 px-2 py-0.5 text-xs text-teal-glow">↓ 1.4</span>
          </div>
          <svg viewBox="0 0 200 60" className="mt-3 h-14 w-full">
            <motion.path
              d="M0 45 L25 40 L45 48 L65 20 L85 42 L110 30 L135 34 L160 15 L185 22 L200 10"
              fill="none"
              stroke="#2DD4BF"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6 }}
            />
          </svg>
        </div>
      </Panel>

      {/* Guideline check panel */}
      <Panel mx={mx} my={my} depth={40} className="bottom-6 right-16 z-10">
        <div className="glass w-64 p-5">
          <span className="text-xs uppercase tracking-[0.2em] text-teal-glow">Guideline logic</span>
          <ul className="mt-3 space-y-2.5 text-sm text-white/75">
            {["RSSDI dosing verified", "eGFR interaction cleared", "ADA target aligned"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-glow" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Panel>

      {/* Physician approved badge */}
      <Panel mx={mx} my={my} depth={-60} float="animate-float-medium" className="bottom-24 left-0 z-30">
        <div className="glass-strong flex items-center gap-3 px-5 py-3">
          <ShieldCheck className="h-6 w-6 text-teal-glow" />
          <div>
            <p className="text-sm font-medium text-white">Physician approved</p>
            <p className="text-xs text-white/50">Reviewed before every patient</p>
          </div>
        </div>
      </Panel>
    </div>
  );
};
