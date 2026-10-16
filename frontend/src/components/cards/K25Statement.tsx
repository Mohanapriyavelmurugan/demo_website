import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function K25Statement({
  text,
  phrase,
  dark = false,
}: {
  text: string;
  phrase?: string;
  dark?: boolean;
}) {
  const reduce = useReducedMotion();
  if (!phrase || !text.includes(phrase)) {
    return <p className="max-w-[22ch] font-display text-display">{text}</p>;
  }
  const at = text.indexOf(phrase);
  return (
    <p className="max-w-[42ch] font-display text-[clamp(1.8rem,3.6vw,3.1rem)] leading-[1.2]">
      {text.slice(0, at)}
      <span className="relative inline [box-decoration-break:clone]">
        <motion.span
          aria-hidden
          className={cn(
            "absolute -z-10 origin-left rounded-sm",
            dark
              ? "inset-x-0 bottom-0 h-[3px] bg-saffron"
              : "inset-x-[-0.1em] bottom-[0.05em] top-[0.4em] bg-saffron-tint"
          )}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: EASE }}
        />
        {phrase}
      </span>
      {text.slice(at + phrase.length)}
    </p>
  );
}
