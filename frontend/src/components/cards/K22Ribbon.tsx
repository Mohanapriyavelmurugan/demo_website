import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TB = { title: string; body: string };

export function K22Ribbon({ items, note }: { items: TB[]; note: string }) {
  const rot = [-2, 1.5, -1, 2];
  return (
    <div>
      <div className="relative">
        <svg
          aria-hidden
          viewBox="0 0 1000 160"
          preserveAspectRatio="none"
          className="absolute inset-x-0 top-1/2 hidden h-24 -translate-y-1/2 md:block"
        >
          <motion.polyline
            points="40,80 280,40 520,110 760,50 960,90"
            className="fill-none stroke-teal/40"
            strokeWidth={2}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
        </svg>
        <ol className="relative grid gap-5 md:grid-cols-[1fr_1.25fr_0.9fr_1.1fr] md:items-start">
          {items.map((it, i) => (
            <motion.li
              key={it.title}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.12 }}
              style={{ rotate: rot[i] }}
              className={cn(
                "rounded-[20px] border border-hairline bg-card p-6 shadow-card",
                ["md:mt-0", "md:mt-16", "md:mt-4", "md:mt-20"][i]
              )}
            >
              <h3 className="font-display text-2xl">{it.title}</h3>
              <p className="mt-2 text-slate">{it.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
      <p className="mx-auto mt-10 max-w-[52ch] text-center text-slate">{note}</p>
    </div>
  );
}
