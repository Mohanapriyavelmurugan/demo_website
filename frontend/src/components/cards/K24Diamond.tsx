import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ecgPath } from "@/components/ecg/ecgPath";
import { BeatLink } from "@/components/ecg/BeatButton";

export function K24Diamond({
  title,
  primary,
  secondary,
}: {
  title: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <div className="text-center">
      <h2 className="font-display text-h1 text-paper">{title}</h2>
      <div className="relative mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-6">
        <svg
          aria-hidden
          viewBox="0 0 280 40"
          className="absolute left-1/2 top-1/2 hidden h-10 w-72 -translate-x-1/2 -translate-y-1/2 md:block"
        >
          <motion.path
            d={ecgPath({ width: 280, height: 40, beats: [0.5], unit: 5, baseline: 22 })}
            className="fill-none stroke-teal-200/70"
            strokeWidth={1.4}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          />
          <circle cx={140} cy={22} r={4} className="fill-saffron" />
        </svg>
        <motion.div
          initial={{ rotate: -6 }}
          whileInView={{ rotate: -2 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <BeatLink to={primary.href} tone="saffron" className="!rounded-[18px]">
            {primary.label}
          </BeatLink>
        </motion.div>
        <motion.div
          initial={{ rotate: 6 }}
          whileInView={{ rotate: 2 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <Link
            to={secondary.href}
            className="inline-flex h-12 items-center rounded-[18px] border border-paper/50 px-7 font-semibold text-paper hover:bg-paper/10"
          >
            {secondary.label}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
