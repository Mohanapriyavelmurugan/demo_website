import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("rounded-lg border bg-card p-6 md:p-8", className)}>{children}</div>;
}

/** Whole-card link with a top-edge trace on hover and focus (.card-link in index.css). */
export function LinkCard({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn("card-link group flex h-full flex-col justify-between p-6 md:p-8", className)}
    >
      {children}
    </Link>
  );
}

export function IconHalo({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-muted-foreground transition-colors duration-quick group-hover:border-primary group-hover:text-primary">
      {children}
    </span>
  );
}
