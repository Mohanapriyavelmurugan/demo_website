import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, X } from "lucide-react";
import { PageHero, Reveal } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { contact } from "@/content/company";
import { newsroomItems, type NewsroomItem } from "@/content/newsroom";
import { useSEO } from "@/hooks/useSEO";

function Lightbox({ item, onClose }: { item: NewsroomItem; onClose: () => void }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // Prevent the page behind the overlay from scrolling.
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.event}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background"
      >
        <X className="h-5 w-5" />
      </button>
      <motion.figure
        className="max-h-full w-full max-w-4xl overflow-hidden rounded-2xl bg-card"
        initial={reduceMotion ? false : { scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={reduceMotion ? undefined : { scale: 0.97, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.image} alt={item.alt} className="max-h-[70vh] w-full object-contain bg-secondary" />
        <figcaption className="border-t border-border p-5">
          <p className="font-display text-xl text-foreground">{item.event}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {item.date}
            {item.location ? ` · ${item.location}` : ""}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.caption}</p>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

export function Newsroom() {
  useSEO({
    title: "Newsroom | Valtraq Healthcare",
    description:
      "Valtraq Healthcare at industry events, summits, and clinical meetings.",
  });

  const [active, setActive] = useState<NewsroomItem | null>(null);
  const close = useCallback(() => setActive(null), []);

  return (
    <div>
      <PageHero
        label="Newsroom"
        title={<>Valtraq out in the field.</>}
        subtitle="Summits, clinical meetings, and conversations with the physicians and partners shaping how decision support reaches outpatient care."
      />

      <section className="section-block">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {newsroomItems.length === 0 ? (
            <Reveal>
              <div className="surface mx-auto max-w-2xl px-6 py-14 text-center">
                <h2 className="font-display text-2xl text-foreground">Nothing here yet.</h2>
                <p className="copy-compact mx-auto mt-3">
                  We are putting together coverage of the events and meetings Valtraq takes part
                  in. In the meantime, our team is happy to speak directly.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsroomItems.map((item, index) => (
                <Reveal key={item.image} delay={index * 0.05}>
                  <button
                    type="button"
                    onClick={() => setActive(item)}
                    className="group surface flex h-full w-full flex-col overflow-hidden text-left transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_hsl(var(--foreground)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    aria-label={`View photo: ${item.event}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading={index > 2 ? "lazy" : undefined}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ objectPosition: item.imagePosition ?? "center" }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="font-display text-xl leading-tight text-foreground">
                        {item.event}
                      </h2>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5 text-primary" />
                          {item.date}
                        </span>
                        {item.location && (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            {item.location}
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.caption}</p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {active && <Lightbox item={active} onClose={close} />}
      </AnimatePresence>

      <CtaBand
        title="Meet us at the next one."
        description="Speaking at an event, or want to meet the team? We would like to hear from you."
        ctaLabel="Contact us"
        ctaHref="/contact"
        email={contact.email}
        phone={contact.phone}
      />
    </div>
  );
}
