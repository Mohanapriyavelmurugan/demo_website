import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { liquidGlassClass } from "./ui/liquid-glass-button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Vision", href: "/vision" },
  { name: "Product", href: "/product" },
  { name: "Validation", href: "/validation" },
  { name: "Evidence", href: "/evidence" },
  { name: "Team", href: "/team" },
];

const EXPAND_THRESHOLD = 80;

export const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  const lastY = React.useRef(0);
  const collapseY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = lastY.current;
    if (expanded && latest > prev && latest > 160) {
      setExpanded(false);
      collapseY.current = latest;
    } else if (!expanded && latest < prev && collapseY.current - latest > EXPAND_THRESHOLD) {
      setExpanded(true);
    }
    lastY.current = latest;
  });

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop: centered animated pill */}
      <div className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 lg:block">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1, width: expanded ? "auto" : "3.25rem" }}
          transition={{ type: "spring", damping: 20, stiffness: 260 }}
          onClick={() => !expanded && setExpanded(true)}
          className={cn(
            "flex h-13 items-center gap-1 overflow-hidden rounded-full border py-2 pl-4 pr-2 backdrop-blur-xl",
            "border-[color:var(--glass-border)] bg-[color:hsl(var(--background)/0.7)] shadow-[var(--glass-shadow)]",
            !expanded && "cursor-pointer justify-center px-0"
          )}
          style={{ height: "3.25rem" }}
          data-testid="main-navbar"
        >
          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1"
              >
                <Link to="/" className="mr-3 flex items-center gap-2" data-testid="nav-logo">
                  <span className="font-display text-xl font-semibold text-foreground">Alyvn</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-glow shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
                </Link>
                {navItems.slice(1).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    data-testid={`nav-link-${item.name.toLowerCase()}`}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                      location.pathname === item.href
                        ? "text-teal-glow"
                        : "text-foreground/60 hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <ThemeToggle className="ml-2" />
                <Link
                  to="/contact"
                  data-testid="nav-contact-cta"
                  className={liquidGlassClass("primary", "ml-1 !px-5 !py-2 text-sm")}
                >
                  Contact
                </Link>
              </motion.div>
            ) : (
              <motion.div key="collapsed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <Menu className="h-5 w-5 text-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>

      {/* Mobile bar */}
      <div className="fixed inset-x-0 top-0 z-50 lg:hidden">
        <div className="flex h-16 items-center justify-between border-b border-[color:var(--glass-border)] bg-[color:hsl(var(--background)/0.8)] px-6 backdrop-blur-xl">
          <Link to="/" className="flex items-center gap-2" data-testid="nav-logo-mobile">
            <span className="font-display text-xl font-semibold text-foreground">Alyvn</span>
            <span className="h-1.5 w-1.5 rounded-full bg-teal-glow" />
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-foreground"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-testid="mobile-menu-toggle"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-b border-[color:var(--glass-border)] bg-[color:hsl(var(--background)/0.95)] backdrop-blur-xl"
            >
              <div className="space-y-1 px-6 py-4">
                {[...navItems, { name: "Contact", href: "/contact" }].map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      location.pathname === item.href
                        ? "bg-teal-glow/10 text-teal-glow"
                        : "text-foreground/70 hover:bg-foreground/[0.04]"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
