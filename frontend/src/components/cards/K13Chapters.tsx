import React, { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export function K13Chapters({
  spine,
  paras,
}: {
  spine: React.ReactNode;
  paras: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 60%"] });
  return (
    <div ref={ref} className="grid gap-10 lg:grid-cols-[5fr_7fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        {spine}
        <div aria-hidden className="relative mt-8 hidden h-48 w-0.5 bg-hairline lg:block">
          <motion.div
            className="absolute inset-0 origin-top bg-teal"
            style={{ scaleY: reduce ? 1 : scrollYProgress }}
          />
        </div>
      </div>
      <div className="space-y-8">
        {paras.map((p, i) => (
          <Chapter key={i} i={i} text={p} />
        ))}
      </div>
    </div>
  );
}

function Chapter({ i, text }: { i: number; text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { amount: 0.6 });
  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-xl bg-saffron-tint p-9 pt-20 shadow-card transition-opacity duration-base md:p-12 md:pt-24",
        on ? "opacity-100" : "opacity-50 motion-reduce:opacity-100"
      )}
    >
      <span
        aria-hidden
        className="absolute -left-2 -top-6 font-display text-[7rem] leading-none text-transparent [-webkit-text-stroke:1px_hsl(var(--saffron-700))] opacity-50"
      >
        {["I", "II", "III"][i]}
      </span>
      <p className="text-lead text-ink">{text}</p>
    </div>
  );
}
