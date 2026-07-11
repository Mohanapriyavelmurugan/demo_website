// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Guideline-first, without exception",
    description:
      "Every recommendation ClinoveAI produces is grounded in established clinical guidelines — RSSDI, ADA, EASD, and IDF — applied in a defined priority order. No inference beyond recognized standards.",
  },
  {
    icon: Compass,
    title: "Physician-in-the-loop, non-negotiable",
    description:
      "ClinoveAI is a decision-support tool, not a decision-maker. Every report is reviewed, edited, or approved by the treating physician before it reaches a patient. The physician remains the final authority.",
  },
  {
    icon: Heart,
    title: "Built for where the need is greatest",
    description:
      "We start with diabetology in India — where the burden is massive, the care gap is measurable, and the opportunity to make a difference is immediate. We build for real clinics, not hypothetical ones.",
  },
];

export function Vision() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Vision */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#1F3B4D] to-[#2E7D6E] text-white text-2xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                01
              </motion.div>
              <h1
                className="text-5xl md:text-6xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Vision
              </h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                A connected clinical ecosystem where every physician in India — whether in
                a metro specialty clinic or a district government hospital — has access to
                the same standard of guideline-grounded diagnostic support as a leading
                endocrinologist. We see this as the starting point for a broader shift:
                AI-assisted care infrastructure woven into India's public and private
                healthcare systems, built on Indian clinical data, Indian guidelines, and
                Indian ownership — not adapted from elsewhere.
              </p>
            </motion.div>
          </div>

          {/* Mission */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#2E7D6E] to-[#3FA88C] text-white text-2xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                02
              </motion.div>
              <h2
                className="text-5xl md:text-6xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Mission
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                Alyvn builds AI-powered clinical decision support that strengthens
                physician judgment rather than substituting for it. We begin with
                ClinoveAI in diabetology, where the need is largest and most measurable,
                and where a well-defined body of clinical guidelines lets us build
                responsibly from day one. Every system we develop keeps the physician as
                the final decision-maker — reviewing, editing, and approving every
                recommendation before it reaches a patient — and every product we build
                going forward will hold to that same principle.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#1F3B4D] to-[#3FA88C] text-white text-2xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                03
              </motion.div>
              <h2
                className="text-5xl md:text-6xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1F3B4D]/5 to-[#2E7D6E]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-2xl p-8 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <value.icon className="h-10 w-10 mb-4 text-[#2E7D6E]" />
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
