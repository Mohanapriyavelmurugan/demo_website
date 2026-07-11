// @ts-nocheck
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const team = [
  {
    initials: "TVK",
    name: "Telukuntla Vinay Koushik",
    role: "Co-Founder & Lead Developer",
    credentials: [],
  },
  {
    initials: "AM",
    name: "Dr. Ashwin Mukundan",
    role: "Co-Founder & Clinical Lead",
    credentials: [
      "MBBS, MD (Internal Medicine, University First Rank)",
      "PG Dip. (Diabetes and Renal Management)",
      "PG Dip. (Advanced Diabetes Care)",
    ],
  },
  {
    initials: "RY",
    name: "Ramabathina Yashaswini",
    role: "Co-Founder & Research Lead",
    credentials: [],
  },
  {
    initials: "MV",
    name: "Mohanapriya Velmurugan",
    role: "Co-Founder & IP Lead",
    credentials: [],
  },
  {
    initials: "DU",
    name: "Dr. Udendhran",
    role: "Co-Founder & Technical Advisor",
    credentials: [
      "Assistant Professor, SRM University",
      "Computational Intelligence",
    ],
  },
];

export function Team() {
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
          <div className="text-center">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0F1E2B] via-[#1F3B4D] to-[#2E7D6E] dark:from-white dark:to-teal-300"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Founders & Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Built by clinicians, engineers, and researchers committed to closing India's
              diabetes care gap.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F3B4D]/5 to-[#2E7D6E]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative backdrop-blur-xl bg-background/60 border border-border/40 rounded-2xl p-8 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1F3B4D] to-[#2E7D6E] flex items-center justify-center text-white text-2xl font-bold shadow-xl mb-6"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {member.initials}
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4">
                    {member.role}
                  </p>

                  {/* Credentials */}
                  {member.credentials.length > 0 && (
                    <div className="mt-auto pt-4 border-t border-border/40 w-full">
                      <div className="space-y-1">
                        {member.credentials.map((cred, i) => (
                          <p key={i} className="text-xs text-muted-foreground">
                            {cred}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center pt-12"
          >
            <p className="text-lg italic text-muted-foreground">
              Built with clinicians, for clinicians.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
