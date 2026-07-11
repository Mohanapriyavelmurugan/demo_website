// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { FileCheck, Shield, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: FileCheck,
    title: "Guideline-grounded reasoning",
    description:
      "ClinoveAI's clinical reasoning draws exclusively from four established diabetes management frameworks — RSSDI, ADA, EASD, and IDF — applied in a defined priority order suited to Indian patients. This is a deliberate constraint, not a limitation: it means every recommendation the system produces can be traced back to a recognized clinical standard, not inferred from an unconstrained model.",
  },
  {
    icon: Shield,
    title: "Independent safety layer",
    description:
      "That reasoning is reinforced by a dedicated safety layer that operates independently of the clinical recommendations themselves — cross-checking prescriptions against a patient's full medication history and organ function, and flagging anything requiring physician attention before a report is ever finalized.",
  },
  {
    icon: CheckCircle2,
    title: "Continuous physician validation",
    description:
      "Every report that passes through this pipeline is then reviewed by a practicing physician — approved, edited, or rejected — before it is used. That structured review, applied to every single case, is what makes ClinoveAI's evidence base different from a model tested once against a static dataset: it is validated continuously, against real clinical judgment, in a live practice.",
  },
];

export function Evidence() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0F1E2B] via-[#1F3B4D] to-[#2E7D6E] dark:from-white dark:to-teal-300"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Evidence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on established guidelines. Verified through structured physician
              review. Reinforced by independent safety checks.
            </p>
          </div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              ClinoveAI's clinical reasoning draws exclusively from four established
              diabetes management frameworks — RSSDI, ADA, EASD, and IDF — applied in a
              defined priority order suited to Indian patients. This is a deliberate
              constraint, not a limitation: it means every recommendation the system
              produces can be traced back to a recognized clinical standard, not inferred
              from an unconstrained model.
            </p>
          </motion.div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F3B4D]/5 to-[#2E7D6E]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-2xl p-8 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1F3B4D] to-[#2E7D6E] flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Diagnostic Testing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Diagnostic test suggestions follow the same principle: each is generated
              based on the individual patient's data, not a fixed template, so that
              recommendations stay clinically justified on a case-by-case basis.
            </p>
          </motion.div>

          {/* Future Publication */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative backdrop-blur-xl bg-gradient-to-br from-[#1F3B4D]/10 to-[#2E7D6E]/10 border-2 border-[#2E7D6E]/30 rounded-3xl p-10 shadow-2xl text-center"
          >
            <p className="text-xl leading-relaxed font-medium">
              As this pilot dataset grows, it will support both the system's continued
              development and future academic publication.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
