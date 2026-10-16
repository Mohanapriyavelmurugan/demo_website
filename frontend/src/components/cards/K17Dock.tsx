import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BeatLink } from "@/components/ecg/BeatButton";

export function K17Dock({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <div className="relative grid items-end gap-10 lg:grid-cols-[8fr_4fr]">
      <h2 className="font-display text-h1 text-paper">{title}</h2>
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-t-lg border border-b-0 border-teal-200/25 p-7 backdrop-blur-md shadow-glow [background:rgb(255_255_255/.07)] lg:-mb-28"
      >
        <p className="text-paper/90">{body}</p>
        <div className="mt-6 flex flex-col gap-3">
          <BeatLink to={primary.href} tone="saffron">
            {primary.label}
          </BeatLink>
          <Link
            to={secondary.href}
            className="inline-flex h-12 items-center justify-center rounded-full border border-paper/40 px-6 font-semibold text-paper hover:bg-paper/10"
          >
            {secondary.label}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
