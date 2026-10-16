import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCookieConsent, type CookieConsent } from "@/components/CookieBanner";

/*
 * GA4 loads only after the visitor Accepts cookies (or if they previously accepted).
 * Vercel Web Analytics is first-party and loads in production regardless of GA consent.
 * Both skip when Do Not Track is on.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.REACT_APP_GA_ID || "G-MD9BRPD3LD";
const isProduction = process.env.NODE_ENV === "production";

function doNotTrack(): boolean {
  if (typeof navigator === "undefined") return false;
  const dnt =
    navigator.doNotTrack ||
    (window as unknown as { doNotTrack?: string }).doNotTrack ||
    (navigator as unknown as { msDoNotTrack?: string }).msDoNotTrack;
  return dnt === "1" || dnt === "yes";
}

function addScript(src: string, attrs: Record<string, string> = {}) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const el = document.createElement("script");
  el.src = src;
  el.defer = true;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  document.head.appendChild(el);
}

let vercelReady = false;
let gaReady = false;

function initVercel() {
  if (vercelReady) return;
  vercelReady = true;
  addScript("/_vercel/insights/script.js");
}

function initGa() {
  if (gaReady || !GA_ID) return;
  gaReady = true;
  addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { send_page_view: false, anonymize_ip: true });
}

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (!isProduction || doNotTrack()) return;
    initVercel();

    const applyConsent = (consent: CookieConsent | null) => {
      if (consent === "accepted") initGa();
    };

    applyConsent(getCookieConsent());

    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsent>).detail;
      applyConsent(detail);
    };
    window.addEventListener("valtraq-cookie-consent", onConsent);
    return () => window.removeEventListener("valtraq-cookie-consent", onConsent);
  }, []);

  useEffect(() => {
    if (!isProduction || doNotTrack() || !GA_ID || !window.gtag) return;
    if (getCookieConsent() !== "accepted") return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}
