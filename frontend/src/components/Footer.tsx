import React from "react";
import { Link } from "react-router-dom";
import { company, contact, disclaimer } from "@/content/company";

const columns = [
  {
    heading: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Vision & Mission", href: "/vision" },
      { name: "Leadership", href: "/team" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Offering",
    links: [
      { name: "Services", href: "/services" },
      { name: company.product, href: "/product" },
      { name: "Clinical Governance", href: "/validation" },
      { name: "Guideline Basis", href: "/evidence" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { name: "Privacy Policy", href: "/legal#privacy" },
      { name: "Terms of Use", href: "/legal#terms" },
    ],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_2fr]">
          <div className="space-y-4">
            <p className="font-display text-2xl text-foreground">{company.name}</p>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">{company.tagline}</p>
            {(contact.email || contact.phone) && (
              <div className="space-y-1 text-sm">
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="block text-foreground transition-colors hover:text-primary"
                  >
                    {contact.email}
                  </a>
                )}
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="block text-foreground transition-colors hover:text-primary"
                  >
                    {contact.phone}
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  {column.heading}
                </p>
                <ul className="mt-4 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-3 border-t border-border pt-6">
          <p className="text-xs leading-5 text-muted-foreground">{disclaimer}</p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
