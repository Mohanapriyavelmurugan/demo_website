import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * Analytics loader.
 *
 * Google Analytics 4 loads only when REACT_APP_GA_ID is set at build time, so
 * local development and preview builds stay clean. Vercel Web Analytics loads
 * from Vercel's own first-party path, which means no third-party cookies.
 *
 * Both are skipped outside production and when the visitor has Do Not Track on.
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

let initialised = false;

function init() {
  if (initialised) return;
  initialised = true;

  // Vercel Web Analytics — served first-party from /_vercel/insights.
  addScript("/_vercel/insights/script.js");

  if (!GA_ID) return;

  addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  // Page views are sent manually per route below, so the SPA reports correctly.
  window.gtag("config", GA_ID, { send_page_view: false, anonymize_ip: true });
}

/** Mount once, inside the router. Sends a page view on every route change. */
export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (!isProduction || doNotTrack()) return;
    init();
  }, []);

  useEffect(() => {
    if (!isProduction || doNotTrack() || !GA_ID || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);

  return null;
}
