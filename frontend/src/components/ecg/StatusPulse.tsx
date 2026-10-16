import React from "react";

export function StatusPulse() {
  return (
    <span aria-hidden className="relative inline-flex h-2 w-2">
      <span className="absolute inset-0 rounded-full bg-teal motion-safe:animate-ping1" />
      <span className="relative h-2 w-2 rounded-full bg-teal" />
    </span>
  );
}
