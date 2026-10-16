import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { DotHush } from "@/components/dotfield/DotHush";

export function K12Margin({ paras, quote }: { paras: string[]; quote: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [16, -16]);
  return (
    <div ref={ref} className="relative grid gap-10 lg:grid-cols-[7fr_5fr]">
      <DotHush className="space-y-6">
        {paras.map((p) => (
          <p key={p.slice(0, 40)} className="text-lead text-slate">
            {p}
          </p>
        ))}
      </DotHush>
      <motion.blockquote
        style={{ y: reduce ? 0 : y }}
        initial={reduce ? false : { rotate: -3, opacity: 0 }}
        whileInView={{ rotate: -1.2, opacity: 1 }}
        viewport={{ once: true }}
        className="relative self-start rounded-lg bg-night-2 p-8 pl-12 text-paper shadow-lift lg:-ml-12 lg:mt-16"
      >
        <svg
          aria-hidden
          viewBox="0 0 20 200"
          preserveAspectRatio="none"
          className="absolute bottom-8 left-4 top-8 h-[calc(100%-4rem)] w-4"
        >
          <path
            d="M10 0 V88 L10 92 L4 96 L16 100 L8 106 L10 110 V200"
            className="fill-none stroke-teal-200"
            strokeWidth={1.4}
          />
        </svg>
        <span aria-hidden className="font-display text-6xl leading-none text-saffron">
          “
        </span>
        <p className="mt-1 font-display text-2xl leading-snug md:text-3xl">{quote}</p>
      </motion.blockquote>
    </div>
  );
}
