import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TB = { title: string; body: string };

export function K03Glass({ items }: { items: TB[] }) {
  const off = ["md:mt-0", "md:mt-14", "md:mt-5"];
  const w = ["md:col-span-4", "md:col-span-5", "md:col-span-3"];
  return (
    <div className="grid gap-5 md:grid-cols-12">
      {items.map((it, i) => (
        <div
          key={it.title}
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
            e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
          }}
          className={cn(
            "group relative overflow-hidden rounded-lg border p-8 backdrop-blur-md shadow-glow [background:linear-gradient(160deg,rgb(255_255_255/.09),rgb(255_255_255/.03))]",
            i === 1 ? "border-saffron/45" : "border-teal-200/25",
            off[i],
            w[i]
          )}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-quick group-hover:opacity-100 motion-reduce:hidden"
            style={{
              background:
                "radial-gradient(260px circle at var(--mx) var(--my), hsl(var(--aurora)/.28), transparent 70%)",
            }}
          />
          {i === 1 && (
            <span
              aria-hidden
              className="absolute inset-x-8 -top-px h-0.5 bg-gradient-to-r from-transparent via-saffron to-transparent"
            />
          )}
          <motion.i
            aria-hidden
            className={cn("block h-2.5 w-2.5 rounded-full", i === 1 ? "bg-saffron" : "bg-teal-200")}
            whileInView={{ scale: [1, 1.5, 1] }}
            viewport={{ once: true }}
          />
          <h3 className="relative mt-6 font-display text-2xl text-paper">{it.title}</h3>
          <p className="relative mt-2 text-paper/90">{it.body}</p>
        </div>
      ))}
    </div>
  );
}
