import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DotField } from "@/components/dotfield/DotField";
import { DotHush } from "@/components/dotfield/DotHush";
import { ecgPath } from "@/components/ecg/ecgPath";
import { StatusChip, type SiteStatus } from "./StatusChip";

const EASE = [0.22, 1, 0.36, 1] as const;

const span = [
  "md:col-span-7 md:row-span-2 rounded-xl bg-night-2 text-paper",
  "md:col-span-5 rounded-lg bg-card",
  "md:col-span-5 rounded-md bg-card",
  "md:col-span-12 rounded-lg bg-saffron-tint md:flex-row md:items-center md:justify-between",
];

type TB = { title: string; body: string };

export function K01Bento({
  items,
}: {
  items: (TB & { href: string; status?: SiteStatus })[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-12 md:auto-rows-[minmax(12rem,auto)]">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, ease: EASE }}
          className={cn(
            "group relative isolate flex flex-col justify-between overflow-hidden border border-hairline p-7 shadow-card transition-transform duration-base hover:-translate-y-1 md:p-9",
            span[i]
          )}
        >
          {i === 0 && (
            <DotField variant="night2" density="fine" motion="static" rest={[0.78, 0.7]} />
          )}
          {i === 0 && (
            <svg aria-hidden viewBox="0 0 600 60" className="absolute inset-x-8 bottom-24 h-12">
              <path
                d={ecgPath({ width: 590, height: 60, beats: [0.62], unit: 7, baseline: 40 })}
                className="fill-none stroke-teal-200"
                strokeWidth={1.6}
              />
              <circle cx={592} cy={40} r={4} className="fill-saffron" />
            </svg>
          )}
          <div className="relative z-10">
            {it.status && <StatusChip status={it.status} />}
            <h3
              className={cn(
                "mt-4 font-display",
                i === 0 ? "text-[2.75rem] leading-none" : "text-h3"
              )}
            >
              {it.title}
            </h3>
            <DotHush>
              <p
                className={cn(
                  "mt-3 max-w-[38ch]",
                  i === 0 ? "text-lead text-paper/90" : "text-slate"
                )}
              >
                {it.body}
              </p>
            </DotHush>
          </div>
          <Link
            to={it.href}
            className={cn(
              "relative z-10 mt-6 font-semibold underline-offset-4 hover:underline",
              i === 0 ? "text-teal-200" : "text-teal"
            )}
          >
            Learn more <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
