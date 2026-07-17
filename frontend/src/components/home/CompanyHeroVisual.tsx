import React from "react";
import { motion } from "framer-motion";

const companyFacts = [
  ["Entity", "Valtraq Health Care Pvt. Ltd."],
  ["First product", "ClinoveAI"],
  ["Stage", "Pilot evaluation"],
  ["Market", "Indian outpatient healthcare"],
  ["Operating principle", "Physician-centered by design"],
];

export function CompanyHeroVisual() {
  return (
    <div className="surface relative overflow-hidden p-6 md:p-8">
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/[0.06] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-primary/[0.04] blur-2xl" />

      <div className="relative mx-auto flex h-44 items-center justify-center md:h-48">
        <motion.div
          className="absolute h-36 w-36 rounded-full border border-primary/15 md:h-40 md:w-40"
          animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-28 w-28 rounded-full border border-primary/25 md:h-32 md:w-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-20 w-20 rounded-full bg-primary/10 md:h-24 md:w-24"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 text-center">
          <p className="font-display text-3xl text-foreground md:text-4xl">Valtraq</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            India
          </p>
        </div>
      </div>

      <div className="relative mt-2 border-t border-border pt-5">
        <dl className="space-y-3">
          {companyFacts.map(([label, value]) => (
            <div key={label} className="grid grid-cols-[1fr_1.2fr] gap-3 text-sm">
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="font-medium text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
