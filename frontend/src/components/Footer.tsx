import React from "react";
import { Link } from "react-router-dom";
import { company, contact, disclaimer, footer } from "@/content/site";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div className="space-y-4">
            <p className="font-display text-2xl text-foreground">{company.name}</p>
            <p className="max-w-sm text-base leading-7 text-muted-foreground">{company.tagline}</p>
            <div className="space-y-1 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="block cursor-pointer text-foreground transition-colors hover:text-primary"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="block cursor-pointer text-foreground transition-colors hover:text-primary"
              >
                {contact.phone}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Company
              </p>
              <ul className="mt-4 space-y-2">
                {footer.companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Products
              </p>
              <ul className="mt-4 space-y-2">
                {footer.productLinks.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name} ↗
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                Legal
              </p>
              <ul className="mt-4 space-y-2">
                {footer.legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-border pt-6">
          <p className="text-xs leading-5 text-muted-foreground">{disclaimer}</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {company.legalName}
            {company.incorporated ? ` · Incorporated ${company.incorporated}` : ""}
          </p>
        </div>
      </div>
    </footer>
  );
};
