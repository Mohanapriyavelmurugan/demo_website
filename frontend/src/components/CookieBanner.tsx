import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "valtraq-cookie-consent";

export type CookieConsent = "accepted" | "rejected";

export function getCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setCookieConsent(value: CookieConsent) {
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new CustomEvent("valtraq-cookie-consent", { detail: value }));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);
  }, []);

  if (!visible) return null;

  const choose = (value: CookieConsent) => {
    setCookieConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card/95 p-4 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          We use analytics cookies to understand how the site is used. You can accept or reject.
          Details are in our{" "}
          <Link to="/legal#cookies" className="underline underline-offset-2 hover:text-foreground">
            cookie policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="cursor-pointer rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="cursor-pointer rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
