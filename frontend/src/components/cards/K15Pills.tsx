import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type TB = { title: string; body: string };

export function K15Pills({ items }: { items: TB[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const touch = typeof window !== "undefined" && matchMedia("(hover: none)").matches;
  return (
    <ul className="flex flex-wrap justify-center gap-3 md:gap-4">
      {items.map((it, i) => {
        const isOpen = touch || open === i;
        return (
          <motion.li key={it.title} layout transition={{ duration: 0.32, ease: EASE }}>
            <button
              type="button"
              aria-expanded={isOpen}
              onMouseEnter={() => setOpen(i)}
              onMouseLeave={() => setOpen(null)}
              onFocus={() => setOpen(i)}
              onBlur={() => setOpen(null)}
              className={cn(
                "flex items-start gap-3 rounded-[999px] border px-6 py-4 text-left transition-colors duration-base",
                isOpen ? "rounded-[28px] border-teal/40 bg-mint" : "border-hairline bg-card"
              )}
            >
              <i aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" />
              <span>
                <span className="block font-display text-xl">{it.title}</span>
                <motion.span
                  layout
                  className={cn("block max-w-[28ch] text-slate", isOpen ? "mt-1" : "sr-only")}
                >
                  {it.body}
                </motion.span>
              </span>
            </button>
          </motion.li>
        );
      })}
    </ul>
  );
}
