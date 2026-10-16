import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/site/motion";

export type MarkPart = "V" | "H" | "C";

type Caption = {
  letter: MarkPart;
  text: string;
};

type MarkExplainerProps = {
  captions: string[];
  note?: string;
};

const LETTERS: MarkPart[] = ["V", "H", "C"];
const TIMES = '"Times New Roman", Times, Georgia, serif';

function parseCaptions(captions: string[]): Caption[] {
  return captions.map((text, i) => ({
    letter: LETTERS[i] || "V",
    text,
  }));
}

export function MarkExplainer({ captions, note }: MarkExplainerProps) {
  const [active, setActive] = useState<MarkPart>("V");
  const reduce = useReducedMotion();
  const items = parseCaptions(captions);
  const gold = "hsl(var(--champagne))";
  const teal = "hsl(var(--primary))";
  const fill = active === "V" ? gold : teal;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
      {/* Compact letter stage */}
      <div>
        <div className="flex items-center gap-2.5">
          {LETTERS.map((letter, i) => (
            <React.Fragment key={letter}>
              <button
                type="button"
                onClick={() => setActive(letter)}
                onMouseEnter={() => setActive(letter)}
                className={cn(
                  "cursor-pointer text-sm font-semibold transition-colors",
                  active === letter ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
                style={{ fontFamily: TIMES }}
                aria-pressed={active === letter}
              >
                {letter}
              </button>
              {i < LETTERS.length - 1 && (
                <span aria-hidden className="h-px w-4 bg-[hsl(var(--champagne)/0.55)]" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="relative mt-3 flex aspect-square max-h-[16rem] w-full max-w-[16rem] items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-[hsl(var(--mist)/0.35)] sm:max-h-[18rem] sm:max-w-[18rem]">
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              className="relative select-none text-[9.5rem] leading-none sm:text-[10.5rem]"
              style={{ fontFamily: TIMES, color: fill }}
              initial={reduce ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              {active}
              {active === "V" && (
                <span
                  aria-hidden
                  className="absolute -left-1 top-[18%] h-2 w-2 rounded-full"
                  style={{ background: gold }}
                />
              )}
              {active === "C" && (
                <span
                  aria-hidden
                  className="absolute -right-0.5 bottom-[22%] h-2 w-2 rounded-full"
                  style={{ background: gold }}
                />
              )}
            </motion.span>
          </AnimatePresence>
        </div>

        {note && <p className="mt-3 max-w-[18rem] text-xs leading-5 text-muted-foreground">{note}</p>}
      </div>

      {/* Captions — denser rows */}
      <ul className="divide-y divide-border/70 border-y border-border/70">
        {items.map((item) => {
          const isActive = active === item.letter;
          return (
            <li key={item.letter}>
              <button
                type="button"
                onMouseEnter={() => setActive(item.letter)}
                onFocus={() => setActive(item.letter)}
                onClick={() => setActive(item.letter)}
                className={cn(
                  "flex w-full cursor-pointer gap-3.5 py-4 text-left transition-colors md:gap-4 md:py-3.5",
                  isActive ? "bg-[hsl(var(--mist)/0.5)]" : "hover:bg-[hsl(var(--mist)/0.28)]"
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "border border-[hsl(var(--champagne)/0.5)] text-[hsl(var(--champagne))]"
                  )}
                  style={{ fontFamily: TIMES }}
                >
                  {item.letter}
                </span>
                <span
                  className={cn(
                    "pt-0.5 text-sm leading-6 md:text-[0.95rem] md:leading-7",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.text}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
