import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FlaskConical, Mail, MailCheck, Phone, PhoneCall } from "lucide-react";
import { toast } from "sonner";
import {
  Eyebrow,
  Reveal,
  Section,
} from "@/components/site/primitives";
import { contact, contactPage } from "@/content/site";
import { useSEO } from "@/hooks/useSEO";
import { cn } from "@/lib/utils";

interface FormState {
  inquiryType: string;
  name: string;
  email: string;
  organization: string;
  role: string;
  message: string;
  consent: boolean;
  website: string;
}

type FieldErrors = Partial<Record<"name" | "email" | "message" | "consent" | "inquiryType", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const STEP_ICONS = [MailCheck, PhoneCall, FlaskConical] as const;

function mapTypeParam(raw: string | null): string {
  if (!raw) return "demo";
  const match = contactPage.inquiryTypes.find((t) => t.value === raw.toLowerCase());
  return match ? match.value : "demo";
}

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.inquiryType) errors.inquiryType = "Please choose why you are writing.";
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(form.email.trim())) errors.email = "Please enter a valid email address.";
  if (form.message.trim().length < 10)
    errors.message = "Please include a short message (at least 10 characters).";
  if (!form.consent) errors.consent = "Please agree so we can reply to you.";
  return errors;
}

function failureMessage(status: number): string {
  if (status === 429) return "Too many submissions. Please try again in a few minutes.";
  if (status === 503) return `We couldn't send your message. Please email us at ${contact.email}.`;
  return `We couldn't send your message. Please email us at ${contact.email}.`;
}

export function Contact() {
  useSEO({
    title: "Contact | Valtraq",
    description: contactPage.intro,
  });

  const [params] = useSearchParams();
  const initialType = mapTypeParam(params.get("type"));

  const [form, setForm] = useState<FormState>({
    inquiryType: initialType,
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
    consent: false,
    website: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setForm((prev) => ({ ...prev, inquiryType: mapTypeParam(params.get("type")) }));
  }, [params]);

  const messagePrompt = useMemo(() => {
    return contactPage.messagePrompts[form.inquiryType] || contactPage.messagePrompts.other;
  }, [form.inquiryType]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const next =
      type === "checkbox" && e.target instanceof HTMLInputElement ? e.target.checked : value;
    setForm((prev) => ({ ...prev, [name]: next }));
    if (name in errors) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    const clientErrors = validate(form);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length) return;

    setLoading(true);
    try {
      const inquiryLabel =
        contactPage.inquiryTypes.find((t) => t.value === form.inquiryType)?.label ||
        form.inquiryType;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization: form.organization,
          inquiryType: inquiryLabel,
          role: form.role,
          message: form.message,
          consent: form.consent,
          website: form.website,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({
          inquiryType: "demo",
          name: "",
          email: "",
          organization: "",
          role: "",
          message: "",
          consent: false,
          website: "",
        });
        toast.success("Message sent.");
        return;
      }

      const payload = await response.json().catch(() => ({}));
      if (response.status === 422 && payload.fields) {
        setErrors(payload.fields);
        return;
      }
      setFormError(failureMessage(response.status));
    } catch {
      setFormError(failureMessage(0));
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (invalid?: boolean) =>
    cn(
      "h-12 w-full rounded-xl border bg-background/80 px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-card focus-visible:ring-2 focus-visible:ring-primary",
      invalid ? "border-destructive" : "border-border"
    );

  return (
    <div>
      <Section ground="paper" className="ground-hero !pt-16 md:!pt-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_auto_minmax(0,0.9fr)] lg:items-end lg:gap-10">
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="band-heading mt-4">Talk to Valtraq.</h1>
          </Reveal>
          <span
            aria-hidden
            className="hidden h-full min-h-[5rem] w-px bg-[hsl(var(--champagne)/0.55)] lg:block"
          />
          <Reveal delay={0.08}>
            <p className="max-w-md text-base leading-7 text-muted-foreground lg:pb-1">
              {contactPage.intro}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section ground="paper">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal variant="left">
            {submitted ? (
              <div className="glass-card-float rounded-[1.35rem] p-8">
                <h2 className="font-display text-2xl text-foreground">Message received</h2>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {contactPage.confirmation}
                </p>
                <button
                  type="button"
                  className="mt-6 cursor-pointer text-sm font-semibold text-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="relative">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-6 top-8 h-40 w-40 rounded-[45%_55%_60%_40%] bg-[hsl(var(--mist)/0.85)] blur-[1px] md:-left-10 md:h-48 md:w-48"
                />
                <form
                  onSubmit={handleSubmit}
                  className="glass-card-float relative space-y-5 rounded-[1.35rem] p-6 md:p-8"
                  noValidate
                >
                  <fieldset>
                    <legend className="text-sm font-medium text-foreground">I&apos;d like to</legend>
                    <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="I'd like to">
                      {contactPage.inquiryTypes.map((t) => {
                        const selected = form.inquiryType === t.value;
                        return (
                          <label
                            key={t.value}
                            className={cn(
                              "cursor-pointer rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
                              selected
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border bg-card text-foreground hover:border-primary/35 hover:bg-[hsl(var(--mist)/0.5)]"
                            )}
                          >
                            <input
                              type="radio"
                              name="inquiryType"
                              value={t.value}
                              checked={selected}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {t.label}
                          </label>
                        );
                      })}
                    </div>
                    {errors.inquiryType && (
                      <p className="mt-2 text-sm text-destructive">{errors.inquiryType}</p>
                    )}
                  </fieldset>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        className={`${inputClass(Boolean(errors.name))} mt-2`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Work email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className={`${inputClass(Boolean(errors.email))} mt-2`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-destructive">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="organization" className="text-sm font-medium text-foreground">
                        Organisation <span className="text-muted-foreground">(optional)</span>
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className={`${inputClass()} mt-2`}
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="text-sm font-medium text-foreground">
                        I am a <span className="text-muted-foreground">(optional)</span>
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className={`${inputClass()} mt-2 cursor-pointer`}
                      >
                        <option value="">Select…</option>
                        {contactPage.roles.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <div className="mt-2 rounded-xl border border-[hsl(var(--champagne)/0.35)] bg-[hsl(var(--champagne)/0.08)] px-4 py-2.5 text-xs leading-5 text-muted-foreground">
                      {contactPage.patientWarning}
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={messagePrompt}
                      className={cn(
                        inputClass(Boolean(errors.message)),
                        "mt-2 h-auto min-h-[8rem] resize-y py-3"
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  {/* Honeypot — hidden from real users */}
                  <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 cursor-pointer rounded border-border"
                    />
                    <label htmlFor="consent" className="text-sm leading-6 text-muted-foreground">
                      I agree that Valtraq may use these details to reply to me, as set out in the{" "}
                      <Link
                        to="/legal#privacy"
                        className="font-medium text-foreground underline underline-offset-2"
                      >
                        Privacy policy
                      </Link>
                      .
                    </label>
                  </div>
                  {errors.consent && <p className="text-sm text-destructive">{errors.consent}</p>}

                  {formError && (
                    <p className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Send message"}
                  </button>
                </form>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1} variant="right">
            <aside className="glass-card-float rounded-[1.35rem] p-6 md:p-8">
              <h2 className="font-display text-2xl text-foreground">{contactPage.sidebar.title}</h2>
              <ol className="mt-8 space-y-6">
                {contactPage.sidebar.steps.map((step, i) => {
                  const Icon = STEP_ICONS[i] ?? MailCheck;
                  return (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/80 bg-[hsl(var(--mist)/0.65)] text-primary">
                        <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                      </span>
                      <p className="pt-1.5 text-sm leading-6 text-muted-foreground">
                        <span className="mr-1 font-semibold text-foreground">
                          {String(i + 1).padStart(2, "0")}.
                        </span>
                        {step}
                      </p>
                    </li>
                  );
                })}
              </ol>
              <div className="gold-rule mt-8" />
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {contactPage.sidebar.pricing}
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-primary/35 bg-[hsl(var(--mist)/0.65)] px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-[hsl(var(--teal-glow))]"
                >
                  <Mail className="h-4 w-4 text-primary" aria-hidden />
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-primary/35 bg-[hsl(var(--mist)/0.65)] px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-[hsl(var(--teal-glow))]"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden />
                  {contact.phone}
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
