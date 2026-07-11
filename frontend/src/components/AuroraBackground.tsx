import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  colors?: [string, string, string][];
  speed?: number;
  blobCount?: number;
  children?: React.ReactNode;
  childrenClassName?: string;
}

const ALYVN_PALETTE: [string, string, string][] = [
  ["hsla(172, 80%, 45%, 0.55)", "hsla(190, 75%, 40%, 0.25)", "transparent"],
  ["hsla(205, 85%, 50%, 0.45)", "hsla(220, 70%, 45%, 0.2)", "transparent"],
  ["hsla(244, 70%, 60%, 0.35)", "transparent", "transparent"],
];

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className,
  colors = ALYVN_PALETTE,
  speed = 0.5,
  blobCount = 5,
  children,
  childrenClassName,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let raf: number;
    const animate = () => {
      timeRef.current += 0.01 * speed;
      const t = timeRef.current;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "screen";

      for (let i = 0; i < blobCount; i++) {
        const layer = colors[i % colors.length];
        if (!layer) continue;
        const [c1, c2, c3] = layer;
        const phase = (i / blobCount) * Math.PI * 2 + t;
        const x = w / 2 + Math.sin(phase) * (w * 0.28) + Math.cos(t * 0.5) * (w * 0.1);
        const y = h / 2 + Math.cos(phase * 0.7) * (h * 0.3) + Math.sin(t * 0.3) * (h * 0.12);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, Math.max(w, h) * 0.42);
        gradient.addColorStop(0, c1 ?? "transparent");
        gradient.addColorStop(0.5, c2 ?? "transparent");
        gradient.addColorStop(1, c3 ?? "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [colors, speed, blobCount]);

  return (
    <div className={cn("relative overflow-hidden bg-navy-deep", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 size-full opacity-90" />
      {/* Vignette + contrast layer to keep text readable over the aurora */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,10,24,0.55)_70%,rgba(4,10,24,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 grain opacity-60" />
      {children && <div className={cn("relative z-10", childrenClassName)}>{children}</div>}
    </div>
  );
};
