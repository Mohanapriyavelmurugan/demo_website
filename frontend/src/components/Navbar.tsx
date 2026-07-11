import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Vision", href: "/vision" },
  { name: "Product", href: "/product" },
  { name: "Validation", href: "/validation" },
  { name: "Evidence", href: "/evidence" },
  { name: "Team", href: "/team" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.06] bg-navy-deep/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
        data-testid="main-navbar"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-2" data-testid="nav-logo">
              <span className="font-display text-2xl font-semibold tracking-tight text-white">
                Alyvn
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-teal-glow shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  data-testid={`nav-link-${item.name.toLowerCase()}`}
                  className={cn(
                    "group relative text-sm font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-teal-glow transition-all duration-300",
                      location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
              <Link
                to="/contact"
                data-testid="nav-contact-cta"
                className="group flex items-center gap-2 rounded-full bg-teal-glow px-5 py-2.5 text-sm font-medium text-navy-deep transition-all hover:shadow-[0_0_24px_rgba(20,184,166,0.45)]"
              >
                Contact
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/[0.06] bg-navy-deep/95 backdrop-blur-xl lg:hidden"
            >
              <div className="space-y-1 px-6 py-4">
                {[...navigation, { name: "Contact", href: "/contact" }].map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      location.pathname === item.href
                        ? "bg-teal-glow/10 text-teal-glow"
                        : "text-white/70 hover:bg-white/[0.04]"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
