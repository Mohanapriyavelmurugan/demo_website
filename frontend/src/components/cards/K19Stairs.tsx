import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type TB = { title: string; body: string };

export function K19Stairs({ items }: { items: TB[] }) {
  const reduce = useReducedMotion();
  const pos = [
    "md:ml-0 md:w-[40%]",
    "md:ml-[26%] md:w-[44%] md:-mt-6",
    "md:ml-[52%] md:w-[48%] md:-mt-6",
  ];
  return (
    <div className="relative">
      <svg
        aria-hidden
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        className="absolute inset-0 hidden h-full w-full md:block"
      >
        <motion.path
          d="M200 560 V470 H460 V300 H760 V120"
          className="fill-none stroke-teal-200/70"
          strokeWidth={1.5}
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: EASE }}
        />
      </svg>
      <ol className="relative flex flex-col-reverse gap-6 md:gap-0">
        {items.map((it, i) => (
          <motion.li
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : 0.45 * i }}
            className={cn(
              "relative rounded-lg border border-teal-200/25 bg-night p-7 text-paper shadow-glow",
              pos[i]
            )}
          >
            <span aria-hidden className="font-mono text-label text-teal-200">
              → {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 font-display text-2xl">{it.title}</h3>
            <p className="mt-2 text-paper/90">{it.body}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
