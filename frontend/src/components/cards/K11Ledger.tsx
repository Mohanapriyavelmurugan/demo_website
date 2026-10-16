import React from "react";
import * as Acc from "@radix-ui/react-accordion";

export function K11Ledger({
  items,
  heading,
}: {
  items: { q: string; a: string }[];
  heading: React.ReactNode;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[4fr_8fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">{heading}</div>
      <Acc.Root type="single" collapsible defaultValue={items[0].q} className="border-t border-hairline">
        {items.map((it, i) => (
          <Acc.Item
            key={it.q}
            value={it.q}
            className="group border-b border-hairline transition-colors data-[state=open]:border-l-[3px] data-[state=open]:border-l-teal data-[state=open]:bg-mint"
          >
            <Acc.Header>
              <Acc.Trigger className="grid w-full grid-cols-[3.5rem_1fr_auto] items-baseline gap-4 px-4 py-5 text-left">
                <span aria-hidden className="font-mono text-label text-slate">
                  Q{String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl">{it.q}</span>
                <span
                  aria-hidden
                  className="text-2xl leading-none text-teal transition-transform duration-base group-data-[state=open]:rotate-45"
                >
                  +
                </span>
              </Acc.Trigger>
            </Acc.Header>
            <Acc.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <p className="pb-6 pl-[4.5rem] pr-10 text-lead text-ink">{it.a}</p>
            </Acc.Content>
          </Acc.Item>
        ))}
      </Acc.Root>
    </div>
  );
}
