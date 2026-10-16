import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotHush } from "@/components/dotfield/DotHush";
import { StatusChip, type SiteStatus } from "./StatusChip";

export function K06Ticket({
  block,
  i,
}: {
  block: {
    id: string;
    title: string;
    body: string;
    status: SiteStatus;
    linkLabel: string;
    href: string;
  };
  i: number;
}) {
  const right = i % 2 === 1;
  return (
    <motion.article
      id={block.id}
      initial={{ opacity: 0, x: right ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        "group relative grid scroll-mt-28 overflow-hidden rounded-lg border border-hairline bg-card shadow-card md:w-[88%] md:grid-cols-[1fr_15rem]",
        right && "md:ml-auto"
      )}
    >
      <div className="p-7 md:p-9">
        <span aria-hidden className="font-mono text-label text-saffron-700">
          {String(i + 1).padStart(2, "0")}
        </span>
        <h2 className="mt-3 font-display text-h2">{block.title}</h2>
        <DotHush>
          <p className="mt-3 max-w-[56ch] text-slate">{block.body}</p>
        </DotHush>
      </div>
      <div className="relative flex flex-col justify-between gap-6 border-t-2 border-dotted border-hairline bg-paper/70 p-7 transition-transform duration-base group-hover:translate-x-1 group-hover:border-teal/50 md:border-l-2 md:border-t-0">
        <span
          aria-hidden
          className="absolute -left-3 -top-3 hidden h-6 w-6 rounded-full bg-mint md:block"
        />
        <span
          aria-hidden
          className="absolute -bottom-3 -left-3 hidden h-6 w-6 rounded-full bg-mint md:block"
        />
        <StatusChip status={block.status} />
        <Link to={block.href} className="inline-flex items-center gap-2 font-semibold text-teal">
          {block.linkLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
