import React, { useState } from "react";
import {
  BookOpenCheck,
  FileCheck2,
  Focus,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const previewModes = [
  {
    id: "priorities",
    label: "Care priorities",
    icon: Focus,
    title: "Key care priorities at a glance.",
    description:
      "Valtraq CDSS highlights relevant clinical considerations for physician review.",
    items: [
      "Glycaemic trend marked for review",
      "Cardiometabolic context surfaced",
      "Follow-up considerations organized",
    ],
  },
  {
    id: "guidance",
    label: "Guideline context",
    icon: BookOpenCheck,
    title: "Guidance with a clear clinical basis.",
    description:
      "Relevant guidance is presented with traceable sources for physician review.",
    items: [
      "Context-relevant guidance indexed",
      "Source trace available for review",
      "No autonomous treatment decision",
    ],
  },
  {
    id: "summary",
    label: "Visit summary",
    icon: FileCheck2,
    title: "Structured documentation in less time.",
    description:
      "Consultation information is organized into a concise, physician-reviewed summary.",
    items: [
      "Assessment draft prepared",
      "Actions remain pending physician decision",
      "Patient communication prompts organized",
    ],
  },
] as const;

type PreviewId = (typeof previewModes)[number]["id"];

export function CdssDemo() {
  const [activeId, setActiveId] = useState<PreviewId>("priorities");
  const active = previewModes.find((mode) => mode.id === activeId) ?? previewModes[0];
  const ActiveIcon = active.icon;

  return (
    <div className="surface overflow-hidden" data-testid="cdss-product-preview">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Consultation preview
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            An illustrative view of Valtraq CDSS during outpatient care.
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/[0.04] px-3 py-1 text-xs text-primary">
          <ShieldCheck className="h-3.5 w-3.5" />
          Physician review required
        </span>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr]">
        <div className="border-b border-border p-4 lg:border-b-0 lg:border-r">
          <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Explore capabilities
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {previewModes.map((mode) => {
              const Icon = mode.icon;
              const selected = mode.id === activeId;
              return (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setActiveId(mode.id)}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border px-3 py-3 text-left text-sm transition-colors",
                    selected
                      ? "border-primary/30 bg-primary/[0.05] text-foreground"
                      : "border-transparent text-muted-foreground hover:bg-secondary"
                  )}
                >
                  <Icon className={cn("h-4 w-4 shrink-0", selected && "text-primary")} />
                  {mode.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-5 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Illustrative consultation · D-0241</p>
              <h3 className="mt-2 max-w-xl font-display text-2xl text-foreground">
                {active.title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                {active.description}
              </p>
            </div>
            <div className="rounded-xl bg-primary/[0.06] p-3">
              <ActiveIcon className="h-5 w-5 text-primary" />
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {active.items.map((item, index) => (
              <div key={item} className="rounded-xl border border-border bg-background p-4">
                <span className="text-[11px] font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-6 text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-secondary/40 px-4 py-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <p className="text-xs leading-5 text-muted-foreground">
              Illustrative preview. All clinical outputs require physician review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
