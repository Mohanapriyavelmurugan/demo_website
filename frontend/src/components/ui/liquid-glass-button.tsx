import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

export const liquidGlassClass = (variant: Variant = "primary", className?: string) =>
  cn("glass-btn", variant === "secondary" ? "glass-btn-secondary" : "glass-btn-primary", className);

export interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const LiquidGlassButton = React.forwardRef<HTMLButtonElement, LiquidGlassButtonProps>(
  ({ variant = "primary", className, children, ...props }, ref) => (
    <button ref={ref} className={liquidGlassClass(variant, className)} {...props}>
      {children}
    </button>
  )
);
LiquidGlassButton.displayName = "LiquidGlassButton";
