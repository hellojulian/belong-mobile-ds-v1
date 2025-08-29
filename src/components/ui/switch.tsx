import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "../../lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    label: string;
  }
>(({ className, id, checked, label, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sys-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-sys-secondary data-[state=unchecked]:bg-sys-form-default",
      className
    )}
    {...props}
    ref={ref}
    id={id}
    checked={checked}
    aria-checked={checked}
    role="switch"
    aria-label={label}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-zinc-50 shadow-lg ring-0 transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
    <span className="sr-only">{label}</span>
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }