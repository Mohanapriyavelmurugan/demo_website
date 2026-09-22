import { useEffect } from "react";

interface SEO {
  title: string;
  description?: string;
}

const SITE_URL = "https://valtraq.in";

/* Per-page SEO: title, description, Open Graph, Twitter card, and canonical. */
export function useSEO({ title, description }: SEO) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, key: string, value: string) => {
      if (!value) return;
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    // Canonical URL keeps the two domains from competing in search results.
    const canonicalHref = `${SITE_URL}${window.location.pathname}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    if (description) {
      setMeta('meta[name="description"]', "name", "description", description);
      setMeta('meta[property="og:description"]', "property", "og:description", description);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalHref);
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "Valtraq Healthcare");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  }, [title, description]);
}
