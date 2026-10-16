import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function K14NumberFill({ lines, foot }: { lines: string[]; foot: string }) {
  return (
    <div>
      <ol className="space-y-6">
        {lines.map((l, i) => (
          <NumberCard key={l} i={i} text={l} />
        ))}
      </ol>
      <p className="mt-10 max-w-[62ch] border-t border-dashed border-hairline pt-5 text-slate">
        <span aria-hidden className="mr-2 font-mono text-teal">
          ↳
        </span>
        {foot}
      </p>
    </div>
  );
}

function NumberCard({ i, text }: { i: number; text: string }) {
  const ref = useRef<HTMLLIElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.6 });
  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -12, y: 12 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      style={{ marginLeft: `${i * 8}%` }}
      className="flex items-center gap-6 rounded-lg border border-hairline bg-card p-6 shadow-card md:w-[78%] md:gap-10 md:p-8"
    >
      <span
        aria-hidden
        className={cn(
          "font-display text-[5.5rem] leading-none transition-colors duration-500",
          seen
            ? "text-teal"
            : "text-transparent [-webkit-text-stroke:1.2px_hsl(var(--teal))]"
        )}
      >
        {String(i + 1).padStart(2, "0")}
      </span>
      <p className="text-lead text-ink">{text}</p>
    </motion.li>
  );
}
