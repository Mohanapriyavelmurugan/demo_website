import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Company", href: "/about" },
  { name: "Vision", href: "/vision" },
  { name: "Product", href: "/product" },
  { name: "Clinical Validation", href: "/validation" },
  { name: "Evidence", href: "/evidence" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy", href: "/legal#privacy" },
  { name: "Terms", href: "/legal#terms" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_2fr]">
          <div className="space-y-3">
            <p className="font-display text-2xl text-foreground">Valtraq</p>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Physician-centered clinical intelligence systems for guideline-based outpatient care.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {footerLinks.map((link) => (
                <Link key={link.name} to={link.href} className="transition-colors hover:text-foreground">
                  {link.name}
                </Link>
              ))}
              {legalLinks.map((link) => (
                <Link key={link.name} to={link.href} className="transition-colors hover:text-foreground">
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
              <p>Valtraq Health Care Pvt. Ltd.</p>
              <p>&copy; {new Date().getFullYear()} Valtraq. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
