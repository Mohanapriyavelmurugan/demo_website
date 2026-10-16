import React from "react";
import { motion } from "framer-motion";
import { DotField } from "@/components/dotfield/DotField";
import { withTracedWord } from "@/components/ecg/EcgUnderline";

const EASE = [0.22, 1, 0.36, 1] as const;

export function K05Split({ left, line }: { left: React.ReactNode; line: string }) {
  return (
    <div className="relative grid overflow-visible rounded-xl border border-hairline bg-card shadow-lift lg:grid-cols-[7fr_5fr]">
      <div className="p-8 md:p-12">{left}</div>
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: EASE, duration: 0.6 }}
        className="relative isolate flex items-end overflow-hidden rounded-xl bg-night p-8 text-paper md:p-12 lg:-my-6 lg:-mr-6"
      >
        <DotField variant="night" density="fine" motion="static" rest={[0.25, 0.85]} />
        <p className="relative z-10 font-display text-3xl leading-snug">
          {withTracedWord(line, "traced", "dark")}
        </p>
      </motion.div>
    </div>
  );
}
