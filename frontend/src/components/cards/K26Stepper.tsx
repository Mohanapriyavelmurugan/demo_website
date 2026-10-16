import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ecgPath } from "@/components/ecg/ecgPath";

export function K26Stepper({
  title,
  steps,
  pricing,
}: {
  title: string;
  steps: string[];
  pricing: string;
}) {
  const reduce = useReducedMotion();
  return (
    <aside className="sticky top-28 rounded-lg bg-night-2 p-7 text-paper shadow-glow">
      <h2 className="font-display text-2xl">{title}</h2>
      <ol className="relative mt-8 ml-3 border-l border-teal-200/40">
        <svg aria-hidden className="absolute -left-px top-0 h-full w-4 overflow-visible">
          <motion.path
            d={ecgPath({ width: 16, height: 220, beats: [0.35], unit: 3, baseline: 110 })}
            className="fill-none stroke-teal-200"
            strokeWidth={1.4}
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          />
        </svg>
        {steps.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.18 }}
            className="relative pb-7 pl-7 last:pb-0"
          >
            <span
              aria-hidden
              className={cn(
                "absolute -left-[7px] top-1 grid h-3.5 w-3.5 place-items-center rounded-full",
                i === 0 ? "bg-saffron" : "bg-teal-200"
              )}
            />
            <p>{s}</p>
          </motion.li>
        ))}
      </ol>
      <p className="mt-6 border-t border-teal-200/20 pt-5 text-sm text-paper/80">{pricing}</p>
    </aside>
  );
}
