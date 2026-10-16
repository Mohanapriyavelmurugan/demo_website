import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ecgPath } from "@/components/ecg/ecgPath";
import { BeatLink } from "@/components/ecg/BeatButton";

export function K29EnvelopeCta({
  title,
  cta,
}: {
  title: string;
  cta: { label: string; href: string };
}) {
  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-xl border-2 border-dashed border-teal/35 bg-mint px-8 py-14 text-center shadow-card md:px-16">
      <svg aria-hidden viewBox="0 0 400 30" className="mx-auto mb-6 h-6 w-64">
        <motion.path
          d={ecgPath({ width: 400, height: 30, beats: [0.5], unit: 4, baseline: 20 })}
          className="fill-none stroke-teal"
          strokeWidth={1.4}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        />
        <circle cx={394} cy={20} r={3.5} className="fill-saffron" />
      </svg>
      <h2 className="font-display text-h2">{title}</h2>
      <BeatLink to={cta.href} className="mt-8">
        {cta.label} <ArrowRight className="ml-2 h-4 w-4" />
      </BeatLink>
    </div>
  );
}
