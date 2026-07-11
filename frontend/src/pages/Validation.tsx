// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

export function Validation() {
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
              Clinical Validation
            </h1>
            <p className="text-2xl text-muted-foreground">
              Tested where it matters — in a real clinic, on real patients, under a
              physician's direct review.
            </p>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-3xl p-10 shadow-2xl space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              ClinoveAI is in active clinical pilot with Dr. Ashwin Mukundan, Co-Founder
              and Clinical Lead, at Dr. Ashwin's Advanced Diabetes Centre, First Floor, 2,
              Opposite Bhima Gold, Above Bata Showroom, Thana, Kannur, Kerala 670002. Every
              report the system generates is reviewed against his own clinical judgment
              before it is ever used — he can approve it as written, edit it, or reject it
              outright.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              This is not a one-time evaluation. It is a continuous, structured review
              process, and every approval, edit, and rejection is captured as part of it.
              That means ClinoveAI is being shaped by the day-to-day decisions of a
              practicing diabetologist — not benchmarked against textbook cases alone. It is
              also the foundation of the clinical evidence base Alyvn is building toward
              publication and wider deployment.
            </p>
          </motion.div>

          {/* Doctor Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F3B4D]/5 to-[#2E7D6E]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-2xl p-8 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1F3B4D] to-[#2E7D6E] flex items-center justify-center text-white text-3xl font-bold shadow-xl"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    AM
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Dr. Ashwin Mukundan</h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      Co-Founder & Clinical Lead
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <GraduationCap className="h-5 w-5 text-[#2E7D6E] flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <p>MBBS, MD (Internal Medicine, University First Rank)</p>
                        <p>PG Dip. (Diabetes and Renal Management)</p>
                        <p>PG Dip. (Advanced Diabetes Care)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-[#2E7D6E] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        Dr. Ashwin's Advanced Diabetes Centre<br />
                        First Floor, 2, Opposite Bhima Gold, Above Bata Showroom<br />
                        Thana, Kannur, Kerala 670002
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
