import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type TB = { title: string; body: string };

const deck = ["bg-card", "bg-mint", "bg-saffron-tint", "bg-night-2 text-paper"];
const tilt = [-1, 0.6, -0.4, 0.8];

export function K02Deck({ items }: { items: TB[] }) {
  const reduce = useReducedMotion();
  return (
    <ol className="relative mx-auto max-w-3xl">
      {items.map((it, i) => (
        <DeckCard key={it.title} it={it} i={i} n={items.length} reduce={!!reduce} />
      ))}
    </ol>
  );
}

function DeckCard({
  it,
  i,
  n,
  reduce,
}: {
  it: TB;
  i: number;
  n: number;
  reduce: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, i === n - 1 ? 1 : 0.94]);
  return (
    <li
      ref={ref}
      className={cn(!reduce && "sticky", "mb-6 h-[19rem] md:h-[17rem]")}
      style={!reduce ? { top: `calc(6rem + ${i * 1.4}rem)` } : undefined}
    >
      <motion.div
        style={{ scale: reduce ? 1 : scale, rotate: reduce ? 0 : tilt[i] }}
        className={cn(
          "relative flex h-full flex-col justify-end overflow-hidden rounded-xl border border-hairline p-8 shadow-lift md:p-10",
          deck[i]
        )}
      >
        <span
          aria-hidden
          className="absolute right-8 top-6 font-display text-7xl leading-none text-transparent [-webkit-text-stroke:1px_currentColor] opacity-40"
        >
          {String(i + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-h2">{it.title}</h3>
        <p className={cn("mt-3 max-w-[44ch] text-lead", i === 3 ? "text-paper/90" : "text-slate")}>
          {it.body}
        </p>
      </motion.div>
    </li>
  );
}
