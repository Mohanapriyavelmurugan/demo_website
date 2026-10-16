import React from "react";
import { cn } from "@/lib/utils";

export function DotHush({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("dot-hush", className)}>{children}</div>;
}
