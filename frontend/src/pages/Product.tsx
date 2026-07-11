// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { Shield, Pill, FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: FileText,
    title: "Clinical reasoning, grounded in guideline hierarchy",
    description:
      "ClinoveAI generates a structured consultation report — diagnosis, risk assessment, medication plan, and follow-up — built from RSSDI, ADA, EASD, and IDF guidelines, applied in that priority order for every patient.",
  },
  {
    icon: Shield,
    title: "Medication safety intelligence",
    description:
      "Every prescription ClinoveAI proposes — new or existing — is screened through a dedicated safety layer before it reaches the physician. This includes cross-checking for interactions across a patient's full medication list, evaluating drug suitability against organ function and comorbidities, and flagging anything that requires physician attention before a report is finalized. This safety layer runs independently of the clinical reasoning itself — a second, deliberate check, not a single point of failure.",
  },
  {
    icon: Pill,
    title: "Personalized diagnostic guidance",
    description:
      "Rather than defaulting to a generic test panel, ClinoveAI recommends lab investigations based on each patient's specific vitals, history, and risk indicators — helping physicians order the right tests for the right reasons, and avoid both over-testing and missed diagnoses.",
  },
  {
    icon: Calendar,
    title: "Built-in follow-up planning",
    description:
      "Every consultation includes a follow-up plan tailored to the patient's actual lab values and risk profile — not generic advice, but guidance grounded in their specific clinical picture.",
  },
];

export function Product() {
  return (
    <div className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0F1E2B] via-[#1F3B4D] to-[#2E7D6E] dark:from-white dark:to-teal-300"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              ClinoveAI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-muted-foreground"
            >
              A structured clinical reasoning layer for every diabetology consultation.
            </motion.p>
          </div>

          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
              The Problem
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Managing diabetes well requires holding a lot at once: current glycemic
              trend, renal function before certain drug classes, interactions across every
              medication a patient is already on, and the correct guideline for that
              patient's specific risk profile. A single oversight can mean a drug
              interaction that damages a kidney, or a treatment plan that's technically
              defensible but incomplete. ClinoveAI is built to make sure nothing gets
              missed — and to make sure every decision a physician makes is backed by the
              same rigor a specialist would apply.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl font-bold mb-12 text-center"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              How it works
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1F3B4D]/5 to-[#2E7D6E]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-2xl p-8 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1F3B4D] to-[#2E7D6E] flex items-center justify-center">
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Physician Oversight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative backdrop-blur-xl bg-gradient-to-br from-[#1F3B4D]/10 to-[#2E7D6E]/10 border-2 border-[#2E7D6E]/30 rounded-3xl p-10 shadow-2xl text-center"
          >
            <p className="text-xl leading-relaxed font-medium">
              Every ClinoveAI report is a draft for physician review, never a final
              decision. The treating physician reviews, edits, or rejects each report
              before it reaches a patient. This is a decision-support system designed to
              operate under direct physician oversight at every step.
            </p>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground italic">
              This page describes what ClinoveAI does and why it can be trusted — not the
              technical implementation, which remains confidential pending completed IP
              protection.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
