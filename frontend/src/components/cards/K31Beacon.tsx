import { motion } from "framer-motion";
import { BeatLink } from "@/components/ecg/BeatButton";

const EASE = [0.22, 1, 0.36, 1] as const;

export function K31Beacon({
  title,
  button,
}: {
  title: string;
  button: { label: string; href: string };
}) {
  return (
    <div className="relative grid place-items-center py-6 text-center">
      <h2 className="font-display text-h1 text-paper">{title}</h2>
      <div className="relative mt-12 grid place-items-center">
        {[1, 2].map((r) => (
          <motion.span
            key={r}
            aria-hidden
            className="absolute rounded-full border border-teal-200/20"
            style={{ width: 180 + r * 90, height: 180 + r * 90 }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * r, duration: 0.8, ease: EASE }}
          />
        ))}
        <BeatLink to={button.href} tone="saffron" className="relative z-10">
          {button.label}
        </BeatLink>
      </div>
    </div>
  );
}
