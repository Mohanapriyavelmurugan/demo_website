import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export type Status =
  | "Available"
  | "Available for pilots"
  | "In development"
  | "Ongoing"
  | "Later";
type Tone = "available" | "pilots" | "progress" | "ongoing";

const badge = cva(
  "inline-flex h-6 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.08em]",
  {
    variants: {
      tone: {
        available: "border-transparent bg-accent text-accent-foreground",
        pilots: "border-primary bg-card text-accent-foreground",
        progress: "border-input bg-card text-status-progress",
        ongoing: "border-input bg-secondary text-muted-foreground",
      },
    },
  }
);

const toneFor = (s: Status): Tone =>
  s === "Available"
    ? "available"
    : s === "Available for pilots"
      ? "pilots"
      : s === "In development"
        ? "progress"
        : "ongoing";

function Dot({ tone }: { tone: Tone }) {
  if (tone === "available") return <span aria-hidden className="h-2 w-2 rounded-full bg-primary" />;
  if (tone === "pilots")
    return (
      <span
        aria-hidden
        className="h-2 w-2 rounded-full border border-primary bg-[linear-gradient(90deg,hsl(var(--primary))_50%,transparent_50%)]"
      />
    );
  if (tone === "progress")
    return <span aria-hidden className="h-2 w-2 rounded-full border-[1.5px] border-status-progress" />;
  return (
    <span aria-hidden className="flex gap-[2px]">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-[3px] w-[3px] rounded-full bg-muted-foreground" />
      ))}
    </span>
  );
}

export function StatusBadge({ status, className }: { status: Status; className?: string }) {
  const tone = toneFor(status);
  return (
    <span className={cn(badge({ tone }), className)}>
      <Dot tone={tone} />
      {status}
    </span>
  );
}
