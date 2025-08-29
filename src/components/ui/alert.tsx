import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 text-sm [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        error:
          "border-sys-error bg-sys-error-container text-sys-error [&>svg]:text-sys-error",
        info: "border-sys-information bg-sys-information-container text-sys-information [&>svg]:text-sys-information",
        warning:
          "border-sys-warning bg-sys-warning-container text-sys-warning [&>svg]:text-sys-warning",
        success:
          "border-sys-success bg-sys-success-container text-sys-success [&>svg]:text-sys-success",
        accenta:
          "border-sys-accent-a bg-sys-accent-a-container text-sys-accent-a [&>svg]:text-sys-accent-a",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-proxima-semibold text-base leading-none tracking-tight pl-7", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-proxima-body [&_p]:leading-relaxed pl-7", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };