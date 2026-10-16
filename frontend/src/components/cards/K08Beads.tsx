import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EcgToTrace } from "@/components/ecg/EcgToTrace";

type TB = { title: string; body: string };

export function K08Beads({ items }: { items: TB[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const pts = items.map((_, i) => (i + 0.5) / items.length);
  return (
    <div ref={ref} className="relative md:pt-[140px]">
      <EcgToTrace points={pts} targetRef={ref} />
      <ol className="grid gap-10 md:grid-cols-3">
        {items.map((m, i) => (
          <motion.li
            key={m.title}
            className={cn(
              "relative pl-8 md:pl-0 md:text-center",
              ["md:mt-0", "md:mt-10", "md:mt-3"][i]
            )}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.15 * i }}
          >
            <span
              aria-hidden
              className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-teal bg-teal md:hidden"
            />
            <h3 className="font-display text-h3">{m.title}</h3>
            <p className="mx-auto mt-2 max-w-[30ch] text-slate">{m.body}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
