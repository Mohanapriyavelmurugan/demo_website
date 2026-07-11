import { useEffect } from "react";

interface SEO {
  title: string;
  description?: string;
}

/* Lightweight per-page SEO: sets document title + description/OG meta. */
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

    if (description) setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    if (description) setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:type"]', "property", "og:type", "website");
  }, [title, description]);
}
