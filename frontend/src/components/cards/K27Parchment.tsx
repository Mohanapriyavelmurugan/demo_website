import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function K27Parchment({
  tabs,
  active,
  onChange,
  children,
}: {
  tabs: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-hairline bg-sand/60 p-6 shadow-card md:p-10">
      <div aria-hidden className="mb-6 h-1.5 border-y border-teal/50" />
      <div className="mb-8 inline-flex flex-wrap gap-1 rounded-full border border-hairline bg-card p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-semibold",
              active === t.id ? "text-paper" : "text-slate"
            )}
          >
            {active === t.id && (
              <motion.span
                layoutId="legal-pill"
                className="absolute inset-0 -z-0 rounded-full bg-teal"
                transition={{ duration: 0.24 }}
              />
            )}
            <span className="relative z-10">{t.label}</span>
          </button>
        ))}
      </div>
      <div className="max-w-[68ch]">{children}</div>
    </div>
  );
}
