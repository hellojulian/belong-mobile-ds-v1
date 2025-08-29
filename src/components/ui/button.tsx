import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from 'lucide-react'
import { cn } from "../../lib/utils"
import { X } from "@untitled-ui/icons-react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors font-proxima-bold disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary:
          "bg-sys-secondary text-sys-on-secondary rounded-full active:bg-sys-secondary-pressed",
        secondary:
          "border-2 border-sys-secondary rounded-full bg-transparent active:bg-sys-secondary/40",
        disabled:
          "bg-sys-form-disabled text-sys-form-border-default rounded-full",
        quicklink:
          "bg-zinc-100 border border-zinc-300 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 text-black rounded-full active:bg-zinc-200 dark:active:bg-zinc-700",
        textlink: "text-sys-secondary-text underline-offset-4 underline",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        outline:
          "border border-sys-form-border-default bg-sys-surface-bright shadow-sm",
        close:
          "rounded-full bg-sys-divider-decorative hover:bg-sys-divider-default text-sys-on-surface hover:bg-sys-secondary-container active:bg-sys-surface-container focus:outline-none",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 rounded-full px-3 text-sm",
        lg: "h-12 rounded-full px-6",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sys-secondary"
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {variant === 'close' ? <X className="w-5 h-5" /> : children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }