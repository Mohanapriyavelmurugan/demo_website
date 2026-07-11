import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      data-testid="theme-toggle"
      className={cn(
        "relative h-9 w-[66px] rounded-full border backdrop-blur-xl",
        "border-[color:var(--glass-border)] bg-[color:hsl(var(--foreground)/0.06)]",
        "shadow-[inset_0_1px_0_hsl(var(--foreground)/0.15)]",
        className
      )}
    >
      {/* track icons */}
      <Sun
        className="pointer-events-none absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
        style={{ color: "hsl(var(--warm))", opacity: isDark ? 0.35 : 0 }}
      />
      <Moon
        className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-teal-glow"
        style={{ opacity: isDark ? 0 : 0.35 }}
      />
      {/* sliding liquid thumb */}
      <motion.span
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 480, damping: 30 }}
        className="absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full"
        style={{
          background: "linear-gradient(160deg, rgba(20,184,166,0.98), rgba(11,107,101,0.88))",
          boxShadow: "0 4px 14px rgba(20,184,166,0.5), inset 0 1px 0 rgba(255,255,255,0.55)",
        }}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-[#04081A]" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-[#04081A]" />
        )}
      </motion.span>
    </button>
  );
};
