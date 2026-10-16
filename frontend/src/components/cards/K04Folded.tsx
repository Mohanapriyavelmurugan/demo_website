import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function K04Folded({
  body,
  linkLabel,
  href,
}: {
  body: string;
  linkLabel: string;
  href: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative bg-card p-8 pl-12 shadow-card md:p-12 md:pl-16 [clip-path:polygon(0_0,calc(100%-36px)_0,100%_36px,100%_100%,0_100%)] rounded-l-lg rounded-br-lg"
    >
      <span
        aria-hidden
        className="absolute right-0 top-0 h-9 w-9 bg-sand [clip-path:polygon(0_0,100%_100%,0_100%)] shadow-[-2px_2px_6px_rgb(0_0_0/.08)]"
      />
      <motion.span
        aria-hidden
        className="absolute left-6 top-10 w-px origin-top bg-teal/50 md:left-8"
        style={{ height: "calc(100% - 5rem)" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
      />
      <p className="text-lead text-ink first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-[3.4rem] first-letter:leading-[0.9] first-letter:text-teal">
        {body}
      </p>
      <Link to={href} className="mt-6 inline-flex items-center gap-2 font-semibold text-teal">
        {linkLabel} <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
