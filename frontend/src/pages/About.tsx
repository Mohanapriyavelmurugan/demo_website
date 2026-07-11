// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <h1
              className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#0F1E2B] via-[#1F3B4D] to-[#2E7D6E] dark:from-white dark:to-teal-300"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              About the Company
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl space-y-6"
          >
            <p className="text-xl leading-relaxed text-muted-foreground">
              Alyvn exists to close India's largest healthcare gap: the distance between
              how many people need guideline-based diabetes care, and how many currently
              receive it.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              With close to 90 million people living with diabetes — a number projected
              to exceed 134 million by 2045 — India's challenge has never been a shortage
              of cases. It is a shortage of consistent, specialist-quality care reaching
              those cases. Nearly four in ten diabetes patients are treated by physicians
              without adequate training in the disease. Specialist positions in community
              health centres remain vacant at scale. The consequence is measured in
              preventable kidney damage, cardiovascular events, and complications that
              earlier, guideline-consistent intervention could have avoided.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Alyvn was founded to close that gap — building AI-powered clinical decision
              support that brings specialist-level guideline discipline into any
              outpatient practice, while keeping the treating physician as the sole
              clinical authority on every case.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Our first product, ClinoveAI, is in active clinical pilot today, in real
              use with a practicing diabetologist.
            </p>
          </motion.div>

          {/* Visual accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-2 rounded-full overflow-hidden bg-gradient-to-r from-[#1F3B4D] via-[#2E7D6E] to-[#3FA88C]"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
