declare module "@/components/ui/navigation-menu" {
  import type * as React from "react";

  type BaseProps = React.PropsWithChildren<{ className?: string }>;

  export const NavigationMenu: React.FC<
    BaseProps & { delayDuration?: number; skipDelayDuration?: number }
  >;
  export const NavigationMenuList: React.FC<BaseProps>;
  export const NavigationMenuItem: React.FC<BaseProps>;
  export const NavigationMenuContent: React.FC<BaseProps>;
  export const NavigationMenuTrigger: React.FC<BaseProps>;
  export const NavigationMenuLink: React.FC<
    BaseProps & { asChild?: boolean; href?: string }
  >;
  export function navigationMenuTriggerStyle(): string;
}

declare module "@/components/ui/popover" {
  import type * as React from "react";

  type BaseProps = React.PropsWithChildren<{
    className?: string;
    align?: string;
    side?: string;
    sideOffset?: number;
    modal?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }>;

  export const Popover: React.FC<BaseProps>;
  export const PopoverTrigger: React.FC<BaseProps & { asChild?: boolean }>;
  export const PopoverContent: React.FC<BaseProps>;
}

declare module "@/components/ui/button" {
  import type * as React from "react";

  export const Button: React.FC<
    React.PropsWithChildren<{
      className?: string;
      variant?: string;
      size?: string;
      asChild?: boolean;
      "aria-label"?: string;
      "data-testid"?: string;
    }>
  >;

  export function buttonVariants(options?: {
    variant?: string;
    size?: string;
    className?: string;
  }): string;
}
