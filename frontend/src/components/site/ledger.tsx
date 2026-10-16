import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/site/motion";

/** Gold rule that draws left → right on view. */
export function DrawRule({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className={cn(
        "inline-block h-0.5 w-6 shrink-0 rounded-full origin-left",
        onDark ? "bg-[hsl(var(--champagne))]" : "bg-[hsl(var(--champagne))]",
        className
      )}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE }}
    />
  );
}

/** Large chart-note index: 01, 02… */
export function LedgerIndex({
  n,
  className,
  active = false,
}: {
  n: number;
  className?: string;
  active?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "font-display tabular-nums leading-none transition-colors duration-300",
        active ? "text-[hsl(var(--champagne))]" : "text-[hsl(var(--champagne))]",
        className
      )}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

/** Numbered ledger rows (Why Valtraq / About build). */
export function LedgerList({
  items,
  foot,
}: {
  items: { title?: string; body: string }[] | string[];
  foot?: string;
}) {
  const rows = items.map((item) =>
    typeof item === "string" ? { title: undefined, body: item } : item
  );
  return (
    <div>
      <ol className="divide-y divide-border/80 border-y border-border/80">
        {rows.map((item, i) => (
          <motion.li
            key={item.title || item.body.slice(0, 40)}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
            className="grid gap-4 py-8 md:grid-cols-[5.5rem_1fr] md:items-start md:gap-8"
          >
            <LedgerIndex n={i + 1} className="text-4xl md:text-5xl" />
            <div>
              {item.title && (
                <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
              )}
              <p
                className={cn(
                  "max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8",
                  item.title ? "mt-2" : "text-foreground"
                )}
              >
                {item.body}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
      {foot && (
        <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground">{foot}</p>
      )}
    </div>
  );
}

const PRINCIPLE_ACCENTS = [
  { num: "text-primary", rule: "bg-primary", blob: "bg-[hsl(var(--teal-glow)/0.55)]" },
  { num: "text-[hsl(var(--band))]", rule: "bg-[hsl(var(--band))]", blob: "bg-[hsl(var(--mist)/0.7)]" },
  { num: "text-[hsl(var(--champagne))]", rule: "bg-[hsl(var(--champagne))]", blob: "bg-[hsl(var(--champagne)/0.18)]" },
  { num: "text-[hsl(var(--chart-3))]", rule: "bg-[hsl(var(--chart-3))]", blob: "bg-[hsl(201_40%_90%/0.65)]" },
] as const;

/** Horizontal partnership principles with wavy connector. */
export function PrincipleRails({
  items,
  icons,
}: {
  items: { title: string; body: string }[];
  icons: LucideIcon[];
}) {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      <svg
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-[2.1rem] hidden h-10 w-full md:block"
        viewBox="0 0 1000 40"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M40 20 C 140 4, 210 36, 290 18 S 460 6, 540 22 S 710 38, 790 16 S 900 4, 960 20"
          fill="none"
          stroke="hsl(var(--ink) / 0.28)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
        />
        {[180, 380, 620, 820].map((x) => (
          <circle key={x} cx={x} cy={x % 200 < 100 ? 14 : 26} r="2.5" fill="hsl(var(--ink) / 0.35)" />
        ))}
      </svg>

      <div className="grid gap-5 md:grid-cols-4 md:gap-5">
        {items.map((item, i) => {
          const Icon = icons[i];
          const accent = PRINCIPLE_ACCENTS[i % PRINCIPLE_ACCENTS.length];
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: EASE }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="glass-card-float group relative flex flex-col overflow-hidden rounded-[1.35rem] px-5 pb-6 pt-5 md:px-6 md:pb-7 md:pt-6"
            >
              <motion.span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-[45%_55%_60%_40%] blur-[0.5px]",
                  accent.blob
                )}
                animate={reduce ? undefined : { y: [0, 6, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card text-foreground shadow-[0_10px_22px_-16px_rgba(15,23,42,0.4)]"
                whileHover={reduce ? undefined : { scale: 1.06 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
              </motion.span>
              <div className="relative mt-7 flex flex-col gap-3">
                <LedgerIndex n={i + 1} className={cn("text-4xl md:text-5xl", accent.num)} />
                <h3 className="font-display text-xl leading-snug text-foreground md:text-2xl">
                  {item.title}
                </h3>
                <motion.span
                  aria-hidden
                  className={cn("h-px w-10 origin-left rounded-full", accent.rule)}
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.55, ease: EASE }}
                />
                <p className="text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                  {item.body}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

/** Who-we-serve vertical timeline ledger. */
export function ServeTimeline({
  items,
  icons,
}: {
  items: { label: string; blurb: string; later?: boolean }[];
  icons: LucideIcon[];
}) {
  return (
    <ol className="relative ml-1">
      <span
        aria-hidden
        className="absolute bottom-6 left-[0.4rem] top-6 w-px bg-border/90"
      />
      {items.map((item, i) => {
        const Icon = icons[i];
        const active = i === 0;
        const dot =
          i <= 1
            ? "bg-primary"
            : i === 2
              ? "bg-[hsl(var(--champagne))]"
              : "border-2 border-[hsl(var(--champagne))] bg-transparent";
        return (
          <motion.li
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.06, duration: 0.45, ease: EASE }}
            className="relative pl-10"
          >
            <span
              aria-hidden
              className={cn(
                "absolute left-0 top-1/2 z-10 h-2.5 w-2.5 -translate-y-1/2 rounded-full",
                dot
              )}
            />
            <div
              className={cn(
                "group flex items-center gap-4 rounded-2xl border-b border-border/60 py-5 transition-colors duration-300 last:border-b-0 md:gap-5 md:py-6",
                active && "glass-card border-b-0 px-4 md:px-5",
                !active && "px-1"
              )}
            >
              <span
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : item.later
                      ? "border-[hsl(var(--champagne)/0.45)] bg-card text-[hsl(var(--champagne))]"
                      : "border-border bg-card text-primary"
                )}
              >
                {Icon && <Icon className="h-5 w-5" strokeWidth={1.6} />}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-foreground md:text-lg">{item.label}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                  {item.blurb}
                </p>
              </div>
              {item.later && (
                <span className="shrink-0 rounded-full border border-[hsl(var(--champagne)/0.55)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--champagne))]">
                  Later
                </span>
              )}
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}

const LIFE_BLOBS = [
  "bg-[hsl(var(--teal-glow)/0.7)] bottom-0 left-0",
  "bg-[hsl(var(--band)/0.22)] top-0 right-0",
  "bg-[hsl(var(--champagne)/0.22)] bottom-0 left-0",
  "bg-[hsl(var(--mist))] bottom-0 right-0",
] as const;

/** Careers “Life at Valtraq” 2×2 ledger cards. */
export function LifeAtGrid({
  items,
  tags,
}: {
  items: { title: string; body: string }[];
  tags: string[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:gap-5">
      {items.map((item, i) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
          className="glass-card-float group relative flex min-h-[14rem] flex-col overflow-hidden rounded-[1.35rem] p-6 md:min-h-[15.5rem] md:p-8"
        >
          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute h-36 w-36 rounded-[45%_55%_60%_40%] blur-[1px]",
              LIFE_BLOBS[i % LIFE_BLOBS.length]
            )}
          />
          {i === 1 && (
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 top-6 h-28 w-28 rounded-[48%_52%_45%_55%] border border-[hsl(var(--champagne)/0.45)]"
            />
          )}
          <div className="relative flex items-center gap-3">
            <LedgerIndex n={i + 1} className="text-2xl text-[hsl(var(--champagne))] md:text-3xl" />
            <span aria-hidden className="h-px flex-1 max-w-[4.5rem] bg-[hsl(var(--champagne)/0.55)]" />
          </div>
          <h3 className="relative mt-5 font-display text-xl text-foreground md:text-2xl">
            {item.title}
            {item.title.endsWith(".") ? "" : "."}
          </h3>
          <p className="relative mt-3 flex-1 text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
            {item.body}
          </p>
          <div className="relative mt-6 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              {tags[i] || ""}
            </span>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

/** Solutions status cards — indexed ledger rows with CTAs. */
export function StatusLedger({
  blocks,
}: {
  blocks: {
    id: string;
    title: string;
    body: string;
    status: string;
    linkLabel: string;
    href: string;
  }[];
}) {
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      {blocks.map((block, i) => {
        const accentNum = i % 2 === 0 ? "text-primary" : "text-[hsl(var(--champagne))]";
        return (
          <motion.article
            key={block.id}
            id={block.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: EASE }}
            className="glass-card-float group relative scroll-mt-24 overflow-hidden rounded-[1.35rem]"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-[55%_45%_60%_40%] bg-[hsl(var(--mist)/0.8)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-44 rounded-[40%_60%_55%_45%] bg-[hsl(var(--teal-glow)/0.55)]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-primary to-[hsl(var(--champagne)/0.35)]"
            />

            <div className="relative grid gap-5 px-5 py-6 sm:px-7 sm:py-7 md:grid-cols-[auto_1px_minmax(0,1fr)_auto] md:items-center md:gap-7 md:px-8 md:py-8">
              <LedgerIndex
                n={i + 1}
                className={cn("text-4xl md:text-5xl lg:text-[3.25rem]", accentNum)}
              />
              <span aria-hidden className="hidden h-16 w-px bg-border/90 md:block" />
              <div className="min-w-0">
                <span className="status-pill">{block.status}</span>
                <h2 className="mt-3 font-display text-2xl text-foreground transition-colors duration-300 group-hover:text-primary md:text-3xl">
                  {block.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                  {block.body}
                </p>
              </div>
              <Link
                to={block.href}
                className="inline-flex h-fit shrink-0 cursor-pointer items-center justify-center self-start rounded-full border border-primary/35 bg-[hsl(var(--mist)/0.65)] px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-[hsl(var(--teal-glow))] md:self-center"
              >
                {block.linkLabel}
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

/** Pull-quote / explainable block with drawing left rule. */
export function LedgerPull({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={cn("relative max-w-3xl pl-6 md:pl-7", className)}>
      <motion.span
        aria-hidden
        className="absolute left-0 top-1 bottom-1 w-0.5 origin-top rounded-full bg-[hsl(var(--champagne))]"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: EASE }}
      />
      <p className="font-display text-xl leading-snug text-foreground md:text-2xl md:leading-snug">
        {children}
      </p>
    </div>
  );
}
