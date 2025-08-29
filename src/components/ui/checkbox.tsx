import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "@untitled-ui/icons-react"

import { cn } from "../../lib/utils"

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: string;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || React.useId()
    return (
      <div className="flex items-center">
        <CheckboxPrimitive.Root
          ref={ref}
          id={checkboxId}
          className={cn(
            "peer h-5 w-5 shrink-0 rounded-sm border-2 border-sys-form-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background  focus-visible:ring-sys-secondary disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-sys-secondary data-[state=checked]:text-primary-foreground data-[state=checked]:border-sys-secondary",
            className
          )}
          aria-labelledby={`${checkboxId}-label`}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
          >
            <Check className="w-4 h-4" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <label 
          id={`${checkboxId}-label`}
          htmlFor={checkboxId} 
          className="ml-2 text-sm leading-none font-proxima-regular peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"

export { Checkbox }