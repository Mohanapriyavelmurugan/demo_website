import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, ShieldCheck, LineChart } from "lucide-react";
import { NeuroHero } from "@/components/home/NeuroHero";
import { HeroPanels } from "@/components/home/HeroPanels";
import { CountUp } from "@/components/CountUp";
import { DiabetesBurdenChart, UndiagnosedChart, ProjectionChart } from "@/components/home/DiabetesCharts";
import { liquidGlassClass } from "@/components/ui/liquid-glass-button";
import { useSEO } from "@/hooks/useSEO";

const headlineLines = [
  "India carries the world's",
  "second-largest diabetes burden.",
];

const statCards = [
  { end: 89.8, decimals: 1, suffix: "M", label: "Indian adults living with diabetes in 2024" },
  { end: 57, suffix: "%", label: "Of adults with diabetes remain undiagnosed" },
  { end: 25, prefix: "< ", suffix: "%", label: "On treatment achieve real glycemic control" },
  { end: 39, suffix: "%", label: "Treated by doctors not adequately trained in diabetes" },
];

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function Home() {
  useSEO({ title: "Alyvn — Clinical intelligence for diabetes care", description: "ClinoveAI brings specialist-grade guideline discipline to every outpatient diabetology consultation — with the physician fully in control." });
  return (
    <div className="overflow-hidden">
      {/* ================= HERO ================= */}
      <NeuroHero className="min-h-screen">
        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-2 lg:px-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-champagne backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
              Clinical intelligence for diabetes care
            </motion.div>

            <h1 className="font-display text-5xl font-light leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {headlineLines.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-gradient-teal"
                >
                  More than half undiagnosed.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 max-w-xl text-lg font-light leading-relaxed text-foreground/70"
            >
              Alyvn builds clinical decision support that helps physicians close that gap. Our first
              product, ClinoveAI, brings specialist-grade guideline discipline to every outpatient
              diabetology consultation — with the physician fully in control.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/product"
                data-testid="hero-primary-cta"
                className={liquidGlassClass("primary", "group text-base")}
              >
                See how ClinoveAI works
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                data-testid="hero-secondary-cta"
                className={liquidGlassClass("secondary", "text-base")}
              >
                Talk to our team
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 text-sm italic text-foreground/40"
            >
              Built with clinicians, for clinicians.
            </motion.p>
          </div>

          <HeroPanels />
        </div>
      </NeuroHero>

      {/* ================= STATS COUNT-UP ================= */}
      <section className="relative py-24 md:py-32" data-testid="stats-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div {...reveal} className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-champagne">
              The scale of the problem
            </p>
            <h2 className="mt-3 font-display text-4xl font-normal tracking-tight text-foreground md:text-5xl">
              A crisis measured in millions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass group p-8 transition-transform duration-300 hover:-translate-y-1.5"
                data-testid={`stat-card-${i}`}
              >
                <div className="font-display text-5xl text-gradient-teal">
                  <CountUp
                    end={stat.end}
                    decimals={stat.decimals ?? 0}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE CHARTS ================= */}
      <section className="relative py-12 md:py-20" data-testid="charts-section">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <motion.div {...reveal} className="lg:col-span-7">
              <DiabetesBurdenChart />
            </motion.div>
            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <UndiagnosedChart />
            </motion.div>
            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.25 }}
              className="lg:col-span-12"
            >
              <ProjectionChart />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= NARRATIVE: WHY ================= */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <motion.div {...reveal} className="lg:col-span-4">
              <div className="flex items-center gap-4">
                <span className="font-display text-6xl text-foreground/15">01</span>
                <div className="h-px flex-1 bg-gradient-to-r from-teal-glow/50 to-transparent" />
              </div>
              <h2 className="mt-4 font-display text-4xl font-normal tracking-tight text-foreground md:text-5xl">
                Why this happens
              </h2>
            </motion.div>
            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.15 }}
              className="relative lg:col-span-8"
            >
              {/* layered stacked glass */}
              <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-2xl border border-foreground/[0.04] bg-foreground/[0.01] md:block" />
              <div className="glass-strong relative p-10">
                <p className="text-lg font-light leading-relaxed text-foreground/75">
                  Diabetes management isn't simple. It means tracking HbA1c trends, adjusting drug
                  classes as kidney function changes, catching interactions between five or six
                  concurrent medications, and following guidelines that shift as new evidence emerges.
                  A general physician juggling forty patients a day, without a diabetology fellowship,
                  is being asked to do specialist-level work with generalist bandwidth. That gap is
                  where poor glycemic control and preventable complications come from — not from a
                  lack of effort, but a lack of support.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= NARRATIVE: WHAT ALYVN DOES ================= */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div {...reveal} className="mb-12">
            <div className="flex items-center gap-4">
              <span className="font-display text-6xl text-foreground/15">02</span>
              <div className="h-px flex-1 bg-gradient-to-r from-teal-glow/50 to-transparent" />
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-normal tracking-tight text-foreground md:text-5xl">
              What Alyvn does about it
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: LineChart,
                title: "Guideline-grade reasoning",
                body: "A structured second layer of clinical logic grounded in RSSDI, ADA, EASD and IDF guidelines — surfaced at the point of care.",
              },
              {
                icon: Stethoscope,
                title: "Specialist logic, any clinic",
                body: "Every consultation benefits from specialist-level guideline discipline, without needing a specialist physically in the room.",
              },
              {
                icon: ShieldCheck,
                title: "Physician in the loop",
                body: "Every report is reviewed, editable and approved by the treating physician before it ever reaches a patient.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="glass group p-8 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-glow/12 text-teal-glow ring-1 ring-teal-glow/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal} className="mt-10">
            <Link
              to="/product"
              data-testid="narrative-product-cta"
              className="group inline-flex items-center gap-2 text-teal-glow transition-colors hover:text-teal-300"
            >
              Learn more about ClinoveAI
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 md:py-32" data-testid="cta-section">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div {...reveal} className="glass-strong relative overflow-hidden p-12 text-center md:p-20">
            <div className="aurora-orb h-[30vw] w-[30vw] bg-teal-glow/20 -left-10 -top-20 animate-aurora-drift" />
            <div className="aurora-orb h-[30vw] w-[30vw] bg-sky-500/15 -right-10 -bottom-20 animate-aurora-drift" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-4xl font-normal tracking-tight text-foreground md:text-5xl">
                Ready to transform diabetes care?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg font-light text-foreground/60">
                Whether you run a clinic or you're exploring a partnership, we'd like to hear from you.
              </p>
              <Link
                to="/contact"
                data-testid="cta-button"
                className={liquidGlassClass("primary", "group mt-10 text-base")}
              >
                Get in touch
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
