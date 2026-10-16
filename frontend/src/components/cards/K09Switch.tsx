import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type TB = { title: string; body: string };

export function K09Switch({ items }: { items: TB[] }) {
  const [v, setV] = useState(items[0].title);
  return (
    <Tabs.Root value={v} onValueChange={setV} className="rounded-xl border border-hairline bg-mint p-6 shadow-card md:p-10">
      <Tabs.List className="relative inline-flex max-[420px]:w-full max-[420px]:flex-col rounded-full bg-card p-1.5 shadow-inner">
        {items.map((it) => (
          <Tabs.Trigger
            key={it.title}
            value={it.title}
            className="relative z-10 rounded-full px-5 py-2.5 text-sm font-semibold text-slate data-[state=active]:text-paper"
          >
            {v === it.title && (
              <motion.span
                layoutId="k09"
                className="absolute inset-0 -z-10 rounded-full bg-teal"
                transition={{ duration: 0.24, ease: EASE }}
              />
            )}
            {it.title}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {items.map((it) => (
        <Tabs.Content key={it.title} value={it.title} className="mt-8 outline-none">
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-[30ch] font-display text-3xl leading-snug md:text-4xl"
          >
            {it.body}
          </motion.p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
