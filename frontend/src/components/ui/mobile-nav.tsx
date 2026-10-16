import React from "react";
import { Link, useLocation } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { primaryCta } from "@/content/site";

export type MobileNavGroup = {
  name: string;
  items: { label: string; href: string }[];
};

type MobileNavProps = {
  nav: MobileNavGroup[];
};

export function MobileNav({ nav }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        className="flex h-10 w-10 touch-manipulation items-center justify-center rounded-md text-foreground"
        data-testid="mobile-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <div className="relative size-4">
          <span
            className={cn(
              "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-300 ease-out",
              open ? "top-[0.4rem] -rotate-45" : "top-1"
            )}
          />
          <span
            className={cn(
              "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-300 ease-out",
              open ? "top-[0.4rem] rotate-45" : "top-2.5"
            )}
          />
        </div>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 top-16 z-40 bg-foreground/10"
            onClick={() => setOpen(false)}
          />
          <div className="fixed left-4 right-4 top-[4.25rem] z-50 mx-auto max-h-[min(70vh,28rem)] max-w-md overflow-y-auto rounded-xl border border-border bg-background p-5 shadow-lg animate-in fade-in slide-in-from-top-3 duration-300">
            <div className="flex flex-col gap-7">
              {nav.map((category) => (
                <div className="flex flex-col gap-2.5" key={category.name}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {category.name}
                  </p>
                  <div className="flex flex-col gap-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                        className="min-h-[52px] rounded-lg px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                to={primaryCta.href}
                className={cn(buttonVariants({ size: "lg" }), "w-full")}
                onClick={() => setOpen(false)}
                data-testid="mobile-nav-cta-demo"
              >
                {primaryCta.label}
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
