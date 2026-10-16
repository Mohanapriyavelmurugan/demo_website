import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type TB = { title: string; body: string };

export function K18Charter({ items }: { items: TB[] }) {
  return (
    <div className="relative mx-auto max-w-4xl rounded-md border border-hairline bg-card px-6 py-10 shadow-lift md:px-16">
      <div aria-hidden className="absolute inset-x-6 top-4 h-1.5 border-y border-teal md:inset-x-16" />
      <motion.span
        aria-hidden
        className="absolute bottom-10 left-12 top-10 hidden w-px origin-top bg-saffron-edge md:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: EASE }}
      />
      <ol className="divide-y divide-dotted divide-hairline">
        {items.map((it, i) => (
          <motion.li
            key={it.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="grid gap-2 py-7 md:grid-cols-[4rem_1fr] md:pl-6"
          >
            <span aria-hidden className="font-mono text-label text-saffron-700">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-2xl [font-variant:small-caps]">{it.title}</h3>
              <p className="mt-1 text-slate">{it.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>
      <motion.i
        aria-hidden
        className="absolute -bottom-3 right-12 h-6 w-6 rounded-full bg-saffron shadow-card"
        initial={{ scale: 0 }}
        whileInView={{ scale: [0, 1.2, 1] }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      />
    </div>
  );
}
