import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group/marquee flex overflow-hidden p-2 [--duration:40s] [--gap:1.5rem]",
        // Space between repeated loops (last card → first of next set)
        vertical ? "flex-col gap-6" : "flex-row gap-6",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-start",
            // Space between cards inside a loop
            vertical ? "flex-col gap-6" : "flex-row gap-6",
            vertical ? "animate-marquee-vertical" : "animate-marquee",
            pauseOnHover && "group-hover/marquee:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
