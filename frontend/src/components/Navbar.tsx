import React from "react";
import { Link, useLocation } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/ui/mobile-nav";
import { cn } from "@/lib/utils";
import { company, navLinks, primaryCta } from "@/content/site";

const mobileNav = [
  {
    name: "Menu",
    items: [
      { label: "Home", href: "/" },
      ...navLinks.map((item) => ({ label: item.label, href: item.href })),
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <MobileNav nav={mobileNav} />
          <Link
            to="/"
            className="font-display text-xl font-medium tracking-tight text-foreground transition-colors hover:text-primary"
            data-testid="nav-logo"
          >
            {company.name}
          </Link>
        </div>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => {
            const active =
              location.pathname === item.href ||
              location.pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active && "bg-secondary text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center justify-end">
          <Link
            to={primaryCta.href}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden cursor-pointer rounded-full sm:inline-flex"
            )}
            data-testid="nav-cta-demo"
          >
            {primaryCta.label}
          </Link>
        </div>
      </nav>
    </header>
  );
};
