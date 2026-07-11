import React from "react";
import { MapPin, GraduationCap } from "lucide-react";
import { PageHero, Reveal, Eyebrow, LayeredCard } from "@/components/site/primitives";

export function Validation() {
  return (
    <div className="overflow-hidden">
      <PageHero
        label="Clinical validation"
        title={
          <>
            Tested where it matters — in a <span className="italic text-champagne">real clinic</span>.
          </>
        }
        subtitle="On real patients, under a practicing physician's direct review — not benchmarked against textbook cases alone."
      />

      <section className="relative py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow>Continuous review</Eyebrow>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-8">
              <LayeredCard className="space-y-6 p-8 md:p-10">
                <p className="text-lg font-light leading-relaxed text-white/70">
                  ClinoveAI is in active clinical pilot with Dr. Ashwin Mukundan, Co-Founder and
                  Clinical Lead. Every report the system generates is reviewed against his own
                  clinical judgment before it is ever used — he can approve it as written, edit it, or
                  reject it outright.
                </p>
                <p className="text-lg font-light leading-relaxed text-white/70">
                  This is not a one-time evaluation. It is a continuous, structured review process,
                  and every approval, edit, and rejection is captured as part of it. That means
                  ClinoveAI is being shaped by the day-to-day decisions of a practicing diabetologist
                  — and it is the foundation of the clinical evidence base Alyvn is building toward
                  publication and wider deployment.
                </p>
              </LayeredCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="glass p-8 md:p-10">
              <div className="flex flex-col items-start gap-8 md:flex-row">
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-glow/25 to-champagne/15 font-display text-4xl text-ivory ring-1 ring-white/10">
                  AM
                </div>
                <div className="flex-1 space-y-5">
                  <div>
                    <h3 className="font-display text-3xl text-ivory">Dr. Ashwin Mukundan</h3>
                    <p className="mt-1 text-sm font-medium text-champagne">Co-Founder & Clinical Lead</p>
                  </div>
                  <div className="space-y-3 text-sm text-white/60">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-teal-glow" />
                      <div>
                        <p>MBBS, MD (Internal Medicine, University First Rank)</p>
                        <p>PG Dip. (Diabetes and Renal Management)</p>
                        <p>PG Dip. (Advanced Diabetes Care)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal-glow" />
                      <p>
                        Dr. Ashwin's Advanced Diabetes Centre<br />
                        First Floor, 2, Opposite Bhima Gold, Above Bata Showroom<br />
                        Thana, Kannur, Kerala 670002
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
