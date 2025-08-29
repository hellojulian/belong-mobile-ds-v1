import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

// Define badge styles with additional variants and dark mode support
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-proxima transition-colors focus:outline-none focus:ring-2 focus:ring-sys-secondary focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        error:
          "border-sys-error bg-sys-error-container text-sys-on-error-container",
        outline: "text-foreground",
        success:
          "border-sys-success bg-sys-success-container text-sys-on-success-container",
        warning:
          "border-sys-warning bg-sys-warning-container text-sys-on-warning-container",
        info: "border-sys-information bg-sys-information-container text-sys-on-information-container",
        accenta:
          " border-sys-on-accent-a-container bg-sys-accent-a-container text-sys-on-accent-a-container [&>svg]:text-sys-accent-a",
        accentb:
          " border-sys-on-accent-b-container bg-sys-accent-b-container text-sys-on-accent-b-container [&>svg]:text-sys-accent-b",
        accentc:
          " border-sys-on-accent-c-container bg-sys-accent-c-container text-sys-on-accent-c-container [&>svg]:text-sys-accent-c",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  label?: string;
}

function Badge({ className, variant, label, children, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      role="status"
      aria-label={label || (typeof children === 'string' ? children : undefined)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Badge, badgeVariants };