import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { PageHero, Reveal } from "@/components/site/primitives";
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
  useSEO({
    title: "Contact - Valtraq",
    description:
      "Request a pilot evaluation, discuss clinical collaboration, or explore partnership opportunities with Valtraq Health Care Pvt. Ltd.",
  });

  const [formData, setFormData] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitted(true);
      setFormData(empty);
      toast.success("Inquiry received.");
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      toast.error("Unable to submit inquiry at this time.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <div>
      <PageHero
        label="Contact"
        title={<>Request a pilot walkthrough or partnership conversation.</>}
        subtitle="Request a pilot evaluation, discuss clinical collaboration, or explore partnership opportunities with Valtraq Health Care Pvt. Ltd."
      />

      <section className="section-block">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <div className="surface p-6 md:p-8" data-testid="contact-form-card">
              {submitted ? (
                <div className="py-10" data-testid="contact-success">
                  <p className="text-sm text-primary">Inquiry received</p>
                  <h2 className="mt-2 font-display text-3xl text-foreground">Thank you.</h2>
                  <p className="copy-compact mt-3">
                    Our team will respond using the contact details you provided.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-foreground">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        data-testid="contact-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        data-testid="contact-email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm text-foreground">
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className={inputClass}
                      data-testid="contact-organization"
                      placeholder="Hospital, clinic, research institution, or partner organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-foreground">
                      Inquiry
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      data-testid="contact-message"
                      placeholder="Pilot evaluation, clinical collaboration, or partnership inquiry"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="contact-submit"
                    className="inline-flex items-center justify-center rounded-full border border-primary bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/95 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit inquiry"}
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
