import { cn } from "@/lib/utils";
import { StatusPulse } from "@/components/ecg/StatusPulse";

const tone = {
  Available: "bg-teal-wash text-teal-700 border-transparent",
  "Available for pilots": "bg-card text-teal-700 border-teal",
  "In development": "bg-saffron-tint text-saffron-700 border-saffron-edge",
  Ongoing: "bg-sand text-slate border-[hsl(var(--field-edge))]",
  Later: "bg-card/60 text-slate border-dashed border-saffron-edge",
} as const;

export type SiteStatus = keyof typeof tone;

export function StatusChip({ status }: { status: SiteStatus }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center gap-2 rounded-full border px-3 font-mono text-label uppercase",
        tone[status]
      )}
    >
      {status === "Available" ? (
        <StatusPulse />
      ) : (
        <i aria-hidden className="h-2 w-2 rounded-full border border-current" />
      )}
      {status}
    </span>
  );
}
