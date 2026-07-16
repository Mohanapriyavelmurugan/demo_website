import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@/components/SmoothScroll";

/** Reset scroll to top (or hash target) on every route change. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { immediate: true });
        } else {
          el.scrollIntoView();
        }
        return;
      }
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash, lenis]);

  return null;
}
