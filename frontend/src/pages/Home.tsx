// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, Users, Target, TrendingDown } from "lucide-react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  {
    number: "89.8M",
    label: "Indian adults living with diabetes in 2024",
    sublabel: "Second-highest burden in the world, behind only China",
  },
  {
    number: "57%",
    label: "Of adults with diabetes in India remain undiagnosed",
  },
  {
    number: "< 1 in 4",
    label: "Patients on regular treatment achieve real glycemic control",
  },
  {
    number: "39%",
    label: "Of people with diabetes in India are treated by doctors not adequately trained",
  },
];

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Aurora Background */}
      <AuroraBackground className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Line-by-line reveal headline */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {[
                  "India carries the world's",
                  "second-largest diabetes burden —",
                  "89.8 million people, and more",
                  "than half undiagnosed.",
                ].map((line, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20, clipPath: "inset(0 100% 0 0)" }}
                    animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0F1E2B] via-[#1F3B4D] to-[#2E7D6E] dark:from-white dark:via-gray-100 dark:to-teal-300"
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed"
              >
                Alyvn builds AI-powered clinical decision support that helps physicians
                close that gap. Our first product, ClinoveAI, brings specialist-grade
                guideline discipline to every outpatient diabetology consultation.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-lg italic text-muted-foreground/80 mb-12"
              >
                Built with clinicians, for clinicians.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <Link to="/product">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-[#1F3B4D] to-[#2E7D6E] hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 text-lg px-8 py-6 rounded-xl"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      See how ClinoveAI works
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#2E7D6E] to-[#3FA88C]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AuroraBackground>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F3B4D]/5 to-[#2E7D6E]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-2xl p-8 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1">
                  <motion.div
                    className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#1F3B4D] to-[#2E7D6E]"
                    style={{ fontFamily: "'Fraunces', serif" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-base font-medium mb-2">{stat.label}</p>
                  {stat.sublabel && (
                    <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Happens Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#1F3B4D] to-[#2E7D6E] text-white text-2xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                01
              </motion.div>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Why this happens
              </h2>
            </div>
            <div className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Diabetes management isn't simple. It means tracking HbA1c trends,
                adjusting drug classes as kidney function changes, catching interactions
                between five or six concurrent medications, and following guidelines that
                shift as new evidence emerges. A general physician juggling forty patients
                a day, without a diabetology fellowship, is being asked to do
                specialist-level work with generalist bandwidth. That gap is where poor
                glycemic control, preventable complications, and inconsistent care come
                from — not from a lack of effort, but a lack of support.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Alyvn Does Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#2E7D6E] to-[#3FA88C] text-white text-2xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                02
              </motion.div>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                What Alyvn does about it
              </h2>
            </div>
            <div className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                ClinoveAI gives physicians a structured second layer of clinical reasoning
                — grounded in RSSDI, ADA, EASD, and IDF guidelines — so every consultation
                benefits from specialist-level guideline logic, without needing a
                specialist in the room. The physician stays fully in control: every report
                is reviewed, editable, and approved before it reaches a patient.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link to="/product">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-2 hover:bg-primary/5"
                  >
                    Learn more about ClinoveAI
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1E2B] via-[#1F3B4D] to-[#2E7D6E] opacity-5" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Ready to transform diabetes care?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Whether you run a clinic or exploring a partnership, we'd like to hear from
            you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#1F3B4D] to-[#2E7D6E] hover:shadow-2xl hover:shadow-teal-500/30 text-lg px-8 py-6 rounded-xl"
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
