import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, CheckCircle2, Mail, MapPin } from "lucide-react";
import { PageHero, Reveal, Eyebrow } from "@/components/site/primitives";
import { liquidGlassClass } from "@/components/ui/liquid-glass-button";
import { useSEO } from "@/hooks/useSEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

interface FormState {
  name: string;
  email: string;
  organization: string;
  message: string;
}

const empty: FormState = { name: "", email: "", organization: "", message: "" };

export function Contact() {
  useSEO({ title: "Contact — Alyvn", description: "Talk to the Alyvn team about ClinoveAI demos and partnerships." });
  const [formData, setFormData] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitted(true);
      setFormData(empty);
      toast.success("Message sent — we'll be in touch soon.");
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-ivory placeholder:text-foreground/30 outline-none transition-colors focus:border-teal-glow/50 focus:bg-foreground/[0.05]";

  return (
    <div className="overflow-hidden">
      <PageHero
        label="Get in touch"
        title={
          <>
            Let's talk about <span className="italic text-champagne">better care</span>.
          </>
        }
        subtitle="Whether you run a clinic and want to see ClinoveAI in action, or you're exploring a partnership with Alyvn, we'd like to hear from you."
      />

      <section className="relative py-8 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Reach us</Eyebrow>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-glow/12 text-teal-glow ring-1 ring-teal-glow/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ivory">Partnerships & demos</p>
                  <p className="text-sm text-foreground/50">Use the form and we'll route your note.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-champagne/12 text-champagne ring-1 ring-champagne/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ivory">Clinical pilot</p>
                  <p className="text-sm text-foreground/50">
                    Dr. Ashwin's Advanced Diabetes Centre, Kannur, Kerala
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-8">
            <div className="glass-strong p-8 md:p-10" data-testid="contact-form-card">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-14 text-center"
                  data-testid="contact-success"
                >
                  <CheckCircle2 className="mx-auto mb-5 h-16 w-16 text-teal-glow" />
                  <h3 className="font-display text-3xl text-ivory">Thank you for reaching out</h3>
                  <p className="mt-2 text-foreground/55">We've received your message and will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-foreground/60">Name *</label>
                      <input id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} data-testid="contact-name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-foreground/60">Email *</label>
                      <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} data-testid="contact-email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm text-foreground/60">Organization</label>
                    <input id="organization" name="organization" value={formData.organization} onChange={handleChange} className={inputClass} data-testid="contact-organization" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-foreground/60">Message *</label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} data-testid="contact-message" />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="contact-submit"
                    className={liquidGlassClass("primary", "group w-full")}
                  >
                    {loading ? "Sending..." : (<>
                      <Send className="h-5 w-5" /> Send message
                    </>)}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
