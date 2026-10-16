import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DotField } from "@/components/dotfield/DotField";

const EASE = [0.22, 1, 0.36, 1] as const;

type TB = { title: string; body: string };

const cell = [
  "md:col-span-5 md:row-span-2 rounded-xl bg-night-2 text-paper",
  "md:col-span-7 rounded-lg border-l-[6px] border-l-mint bg-card",
  "md:col-span-4 rounded-md bg-saffron-tint",
  "md:col-span-3 rounded-lg border-dashed border-hairline bg-card",
];
const from = [
  { x: -24, y: -24 },
  { x: 24, y: -16 },
  { x: 16, y: 24 },
  { x: -16, y: 24 },
];

export function K21Mosaic({ items }: { items: TB[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[minmax(11rem,auto)]">
      {items.map((it, i) => (
        <motion.article
          key={it.title}
          initial={{ opacity: 0, ...from[i] }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, ease: EASE }}
          className={cn(
            "relative isolate flex flex-col justify-between overflow-hidden border border-hairline p-7 shadow-card",
            cell[i]
          )}
        >
          {i === 0 && (
            <DotField variant="night2" density="fine" motion="static" rest={[0.7, 0.8]} />
          )}
          <span aria-hidden className="relative z-10 font-mono text-label opacity-60">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="relative z-10">
            <h3 className={cn("font-display", i === 0 ? "text-4xl" : "text-h3")}>{it.title}</h3>
            <p className={cn("mt-2 max-w-[34ch]", i === 0 ? "text-paper/90" : "text-slate")}>
              {it.body}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
