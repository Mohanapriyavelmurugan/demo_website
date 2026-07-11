import React from "react";
import NeuroNoise from "@/components/ui/neuro-noise";
import { cn } from "@/lib/utils";

interface NeuroHeroProps {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
}

/* Neuro-noise shader hero background, themed to Alyvn navy + teal, with a
   vignette + grain overlay so foreground text stays high-contrast. */
export const NeuroHero: React.FC<NeuroHeroProps> = ({
  className,
  children,
  childrenClassName,
}) => {
  return (
    <div className={cn("relative overflow-hidden bg-navy-deep", className)}>
      <NeuroNoise
        colorFront="#14B8A6"
        colorMid="#0B6B65"
        colorBack="#04081A"
        brightness={0.85}
        contrast={0.42}
        speed={0.55}
        scale={1.35}
        rotation={28}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
      {/* Contrast layers */}
      <div className="pointer-events-none absolute inset-0 bg-navy-deep/35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,transparent_0%,rgba(4,8,26,0.5)_55%,rgba(4,8,26,0.92)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep to-transparent" />
      <div className="pointer-events-none absolute inset-0 grain opacity-50" />
      {children && <div className={cn("relative z-10", childrenClassName)}>{children}</div>}
    </div>
  );
};
