import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import { MobileNav } from "@/components/ui/mobile-nav";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  description: string;
  href: string;
};

const companyItems: NavItem[] = [
  {
    title: "Company",
    description: "Corporate profile and operating focus",
    href: "/about",
  },
  {
    title: "Vision & Mission",
    description: "Principles and long-term direction",
    href: "/vision",
  },
  {
    title: "Leadership",
    description: "Founders and executive team",
    href: "/team",
  },
];

const platformItems: NavItem[] = [
  {
    title: "Valtraq CDSS",
    description: "Clinical decision support for outpatient care",
    href: "/product",
  },
  {
    title: "Clinical Governance",
    description: "Physician review, safety, and audit",
    href: "/validation",
  },
  {
    title: "Guideline Basis",
    description: "Guideline-grounded clinical frameworks",
    href: "/evidence",
  },
];

const mobileNav = [
  {
    name: "Home",
    items: [{ label: "Home", href: "/" }],
  },
  {
    name: "Company",
    items: companyItems.map((item) => ({ label: item.title, href: item.href })),
  },
  {
    name: "Services",
    items: [{ label: "Services", href: "/services" }],
  },
  {
    name: "Platform",
    items: platformItems.map((item) => ({ label: item.title, href: item.href })),
  },
  {
    name: "Contact",
    items: [
      { label: "Contact", href: "/contact" },
    ],
  },
];

function NavListItem({ title, description, href }: NavItem) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          data-testid={`nav-link-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-foreground focus:bg-secondary"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{description}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export const Navbar: React.FC = () => {
  const location = useLocation();
  const homeActive = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <MobileNav nav={mobileNav} />
          <Link
            to="/"
            className="font-display text-xl font-medium tracking-tight text-foreground"
            data-testid="nav-logo"
          >
            Valtraq
          </Link>
        </div>

        <NavigationMenu
          delayDuration={200}
          skipDelayDuration={350}
          className="hidden max-w-none flex-1 justify-center lg:flex"
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  data-testid="nav-link-home"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    homeActive && "bg-secondary text-foreground"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 bg-transparent px-3">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[320px] gap-1 p-2">
                  {companyItems.map((item) => (
                    <NavListItem key={item.href} {...item} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/services"
                  data-testid="nav-link-services"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/services" && "bg-secondary text-foreground"
                  )}
                >
                  Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 bg-transparent px-3">
                Platform
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[340px] gap-1 p-2">
                  {platformItems.map((item) => (
                    <NavListItem key={item.href} {...item} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/contact"
                  data-testid="nav-link-contact"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    location.pathname === "/contact" && "bg-secondary text-foreground"
                  )}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex shrink-0 items-center justify-end">
          <Link
            to="/contact"
            className={cn(buttonVariants({ size: "sm" }), "hidden rounded-full sm:inline-flex")}
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
};
