import { useEffect } from "react";

type Opts = {
  root: React.RefObject<HTMLDivElement | null>;
  lensEl: React.RefObject<HTMLDivElement | null>;
  lit: React.RefObject<HTMLDivElement | null>;
  mode: "pointer" | "ambient" | "static";
  rest: [number, number];
  setSize: (s: { w: number; h: number }) => void;
};

export function useDotLens({ root, lensEl, lit, mode, rest, setSize }: Opts) {
  useEffect(() => {
    const el = root.current;
    const L = lensEl.current;
    const I = lit.current;
    if (!el || !L || !I) return;
    const host = el.parentElement as HTMLElement;
    let w = 0;
    let h = 0;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    let raf = 0;
    let visible = false;
    const R = () => parseFloat(getComputedStyle(el).getPropertyValue("--lens")) || 260;
    let radius = R();

    const place = (px: number, py: number) => {
      L.style.transform = `translate3d(${px - radius}px, ${py - radius}px, 0)`;
      I.style.transform = `translate3d(${radius - px}px, ${radius - py}px, 0)`;
    };

    const ro = new ResizeObserver(([e]) => {
      w = e.contentRect.width;
      h = e.contentRect.height;
      radius = R();
      el.style.setProperty("--fw", `${w}px`);
      el.style.setProperty("--fh", `${h}px`);
      setSize({ w: Math.round(w / 40) * 40, h: Math.round(h / 40) * 40 });
      if (mode !== "ambient") {
        x = tx = w * rest[0];
        y = ty = h * rest[1];
        place(x, y);
      }
      if (mode === "ambient") {
        L.style.transform = "";
        I.style.transform = "";
      }
    });
    ro.observe(el);

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        el.dataset.active = String(visible);
        if (visible) el.dataset.seen = "true";
      },
      { rootMargin: "120px 0px" }
    );
    io.observe(el);

    if (mode !== "pointer") {
      return () => {
        ro.disconnect();
        io.disconnect();
      };
    }

    const tick = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      place(x, y);
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.4 ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const move = (e: PointerEvent) => {
      if (!visible || e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      kick();
    };
    const leave = () => {
      tx = w * rest[0];
      ty = h * rest[1];
      kick();
    };
    host.addEventListener("pointermove", move, { passive: true });
    host.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
    };
  }, [mode, rest[0], rest[1]]); // eslint-disable-line react-hooks/exhaustive-deps
}
