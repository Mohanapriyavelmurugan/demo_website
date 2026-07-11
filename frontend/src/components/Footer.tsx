import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Vision & Mission", href: "/vision" },
  { name: "Product", href: "/product" },
  { name: "Clinical Validation", href: "/validation" },
  { name: "Evidence", href: "/evidence" },
  { name: "Team", href: "/team" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/legal#privacy" },
  { name: "Terms of Use", href: "/legal#terms" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-navy-deep">
      <div className="aurora-orb h-[40vw] w-[40vw] bg-teal-glow/10 left-1/4 -bottom-1/2" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="font-display text-3xl font-semibold text-white">Alyvn</h3>
              <span className="h-1.5 w-1.5 rounded-full bg-teal-glow shadow-[0_0_10px_rgba(20,184,166,0.8)]" />
            </div>
            <p className="max-w-xs text-sm italic text-white/50">
              Built with clinicians, for clinicians.
            </p>
            <p className="text-sm text-white/40">
              Clinical decision support that keeps the physician in control.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-glow">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-glow">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 border-t border-white/[0.06] pt-8 text-center text-sm text-white/40"
        >
          <p>&copy; {new Date().getFullYear()} Alyvn. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
