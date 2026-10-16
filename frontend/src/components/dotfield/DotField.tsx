import React, { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ecgPath } from "@/components/ecg/ecgPath";
import { useDotLens } from "./useDotLens";

export type DotVariant = "paper" | "card" | "mint" | "saffron" | "night" | "night2" | "sand";

export interface DotFieldProps {
  variant?: DotVariant;
  density?: "fine" | "regular" | "airy";
  lens?: "sm" | "md" | "lg";
  motion?: "auto" | "static";
  touch?: "ambient" | "static";
  rest?: [number, number];
  ecg?: false | { beats: number[]; y?: number };
  fade?: "none" | "edges" | "bottom";
  className?: string;
}

type Mode = "pointer" | "ambient" | "static";
export const LENS_PX = { sm: 180, md: 260, lg: 340 } as const;

export function DotField({
  variant = "paper",
  density = "regular",
  lens = "md",
  motion = "auto",
  touch = "static",
  rest = [0.72, 0.32],
  ecg = false,
  fade = "none",
  className,
}: DotFieldProps) {
  const root = useRef<HTMLDivElement>(null);
  const lensEl = useRef<HTMLDivElement>(null);
  const lit = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<Mode>("static");
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
      ?.saveData === true;
    if (reduce || saveData || motion === "static") setMode("static");
    else setMode(fine ? "pointer" : touch);
  }, [reduce, motion, touch]);

  useDotLens({ root, lensEl, lit, mode, rest, setSize });

  const ecgMask = useMemo(() => {
    if (!ecg || !size.w) return undefined;
    const h = size.h;
    const w = size.w;
    const y = (ecg.y ?? 0.7) * h;
    const d = ecgPath({ width: w, height: 120, beats: ecg.beats, baseline: y, unit: 26 });
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><path d="${d}" fill="none" stroke="#000" stroke-width="26" stroke-linejoin="round" stroke-linecap="round"/></svg>`;
    return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
  }, [ecg, size.w, size.h]);

  return (
    <div
      ref={root}
      aria-hidden
      className={cn("dotfield", className)}
      data-variant={variant}
      data-density={density}
      data-lens={lens}
      data-mode={mode}
      data-fade={fade}
      data-active="true"
      data-seen={reduce ? "true" : "false"}
    >
      <div className="df-base" />
      {ecgMask && (
        <div className="df-ecg" style={{ WebkitMaskImage: ecgMask, maskImage: ecgMask }} />
      )}
      <div ref={lensEl} className="df-lens">
        <div ref={lit} className="df-lit" />
      </div>
    </div>
  );
}
