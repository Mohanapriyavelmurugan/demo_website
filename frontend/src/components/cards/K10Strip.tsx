import { motion, useReducedMotion } from "framer-motion";
import { ecgPath } from "@/components/ecg/ecgPath";

type TB = { title: string; body: string };

export function K10Strip({ items }: { items: TB[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative overflow-hidden rounded-md border border-teal-200/20 bg-night-2 shadow-glow">
      <div className="grid md:grid-cols-[1fr_1.2fr_1fr]">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={reduce ? false : { opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * i }}
            className="border-teal-200/20 p-8 pb-16 md:border-l first:md:border-l-0"
          >
            <span aria-hidden className="font-mono text-label text-teal-200">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-2xl text-paper">{it.title}</h3>
            <p className="mt-2 text-paper/90">{it.body}</p>
          </motion.div>
        ))}
      </div>
      <svg
        aria-hidden
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-3 h-8 w-full"
      >
        <motion.path
          d={ecgPath({ width: 1188, height: 40, beats: [0.5], unit: 5, baseline: 26 })}
          className="fill-none stroke-teal-200/70"
          strokeWidth={1.5}
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />
        <circle cx={1192} cy={26} r={4} className="fill-saffron" />
      </svg>
    </div>
  );
}
