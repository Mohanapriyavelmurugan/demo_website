import { motion } from "framer-motion";

export function K28Proof({ line }: { line: string }) {
  return (
    <div className="flex items-center justify-center gap-4 py-5 text-center">
      <motion.i
        aria-hidden
        className="h-2 w-2 rounded-full bg-saffron"
        whileInView={{ scale: [1, 1.5, 1] }}
        viewport={{ once: true }}
      />
      <p className="text-sm font-semibold tracking-wide text-paper md:text-base">{line}</p>
      <motion.i
        aria-hidden
        className="h-2 w-2 rounded-full bg-saffron"
        whileInView={{ scale: [1, 1.5, 1] }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      />
    </div>
  );
}
