import { motion } from "framer-motion";

export function K23Envelope({
  empty,
  roles,
}: {
  empty: string;
  roles: { title: string; type: string; location: string }[];
}) {
  if (roles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-2xl overflow-visible rounded-lg border-2 border-dashed border-teal/40 bg-mint px-8 py-16 text-center shadow-card"
      >
        <span
          aria-hidden
          className="absolute -top-5 left-1/2 h-10 w-40 -translate-x-1/2 bg-card [clip-path:polygon(0_100%,50%_0,100%_100%)] shadow-sm"
        />
        <p className="font-display text-2xl text-ink md:text-3xl">{empty}</p>
      </motion.div>
    );
  }
  return (
    <ul className="divide-y divide-hairline border-y border-hairline">
      {roles.map((r) => (
        <li key={r.title} className="grid items-center gap-4 py-5 md:grid-cols-[1fr_auto_auto]">
          <span className="font-display text-xl">{r.title}</span>
          <span className="font-mono text-label text-slate">{r.type}</span>
          <span className="text-slate">{r.location}</span>
        </li>
      ))}
    </ul>
  );
}
