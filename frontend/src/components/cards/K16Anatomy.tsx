import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const CALL = [
  { box: "lg:left-0 lg:top-6", d: "M300 150 L220 150 L180 70 L40 70" },
  { box: "lg:right-0 lg:top-1/3", d: "M340 170 L460 170 L500 210 L620 210" },
  { box: "lg:left-6 lg:bottom-4", d: "M310 200 L240 260 L60 300" },
];

export function K16Anatomy({
  mark,
  captions,
  note,
}: {
  mark: React.ReactNode;
  captions: string[];
  note: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="relative rounded-xl border border-hairline bg-card p-8 shadow-card lg:min-h-[30rem] lg:p-12">
      <svg
        aria-hidden
        viewBox="0 0 660 360"
        className="absolute inset-0 hidden h-full w-full lg:block"
      >
        {CALL.map((c, i) => (
          <motion.path
            key={i}
            d={c.d}
            className="fill-none stroke-teal"
            strokeWidth={1.2}
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 * i, duration: 0.7 }}
          />
        ))}
      </svg>
      <div className="relative mx-auto grid h-48 w-48 place-items-center rounded-full bg-mint ring-[14px] ring-mint/40">
        {mark}
      </div>
      <ol className="mt-8 space-y-5 lg:mt-0">
        {captions.map((c, i) => (
          <motion.li
            key={i}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 * i + 0.6 }}
            className={cn("max-w-[34ch] text-slate lg:absolute", CALL[i].box)}
          >
            {c}
          </motion.li>
        ))}
      </ol>
      <p className="mt-8 font-mono text-label uppercase text-slate lg:absolute lg:bottom-6 lg:right-8">
        {note}
      </p>
    </div>
  );
}
