import { motion, useReducedMotion } from "framer-motion";
import { ecgPath } from "@/components/ecg/ecgPath";

export function K20Quote({
  quote,
  name,
  role,
  clinic,
}: {
  quote: string;
  name: string;
  role: string;
  clinic?: string;
}) {
  const reduce = useReducedMotion();
  const parts = quote.match(/[^.!?]+[.!?]+\s*/g) ?? [quote];
  return (
    <figure className="relative mx-auto max-w-5xl">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-28 font-display text-[240px] leading-none text-saffron/35"
      >
        “
      </span>
      <blockquote className="relative font-display text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.22]">
        {parts.map((p, i) => (
          <motion.span
            key={i}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            {p}
          </motion.span>
        ))}
      </blockquote>
      <figcaption className="mt-10 flex items-center gap-4">
        <svg aria-hidden viewBox="0 0 220 30" className="h-7 w-[220px]">
          <motion.path
            d={ecgPath({ width: 206, height: 30, beats: [0.55], unit: 4, baseline: 20 })}
            className="fill-none stroke-teal"
            strokeWidth={1.6}
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.9 }}
          />
          <circle cx={212} cy={20} r={5} className="fill-saffron" />
        </svg>
        <span>
          <span className="block font-semibold">{name}</span>
          <span className="block text-sm text-slate">{role}</span>
          {clinic && <span className="block text-sm text-slate">{clinic}</span>}
        </span>
      </figcaption>
    </figure>
  );
}
