import React from "react";
import { FallingPattern } from "@/components/ui/falling-pattern";

/* Fixed animated backdrop shown behind all non-hero sections, in both themes. */
export const FallingBackdrop: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
    <FallingPattern
      color="hsl(var(--primary))"
      backgroundColor="transparent"
      duration={200}
      blurIntensity="0em"
      density={1}
      className="h-full w-full opacity-[0.1] dark:opacity-[0.14] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]"
    />
  </div>
);
