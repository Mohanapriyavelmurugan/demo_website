import { motion, useReducedMotion } from "framer-motion";
import { ecgPath } from "@/components/ecg/ecgPath";

const EASE = [0.22, 1, 0.36, 1] as const;

export function K30Promise({ text, phrase }: { text: string; phrase: string }) {
  const reduce = useReducedMotion();
  const at = text.indexOf(phrase);
  if (at < 0) {
    return <p className="max-w-[24ch] font-display text-display text-paper">{text}</p>;
  }
  return (
    <p className="max-w-[24ch] font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.15] text-paper max-[420px]:underline max-[420px]:decoration-saffron max-[420px]:decoration-[3px] max-[420px]:underline-offset-8">
      {text.slice(0, at)}
      <span className="relative inline-block max-[420px]:inline">
        {phrase}
        <svg
          aria-hidden
          viewBox="0 0 300 16"
          preserveAspectRatio="none"
          className="absolute -bottom-2 left-0 h-3 w-full overflow-visible max-[420px]:hidden"
        >
          <motion.path
            d={ecgPath({ width: 290, height: 16, beats: [0.92], unit: 2.2, baseline: 10 })}
            className="fill-none stroke-saffron"
            strokeWidth={3}
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: EASE }}
          />
          <circle cx={296} cy={10} r={4} className="fill-saffron" />
        </svg>
      </span>
      {text.slice(at + phrase.length)}
    </p>
  );
}
