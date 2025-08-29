import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "@untitled-ui/icons-react"

import { cn } from "@/lib/utils"

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn("w-full border-transparent", className)}
    {...props}
  />
))
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border border-sys-divider-decorative rounded-lg mb-2 overflow-hidden",
      "transition-all duration-200 ease-in-out",
      "hover:border-sys-secondary border-2",
      "focus-within:ring-2 focus-within:ring-sys-secondary",
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') {
      event.currentTarget.blur();
    }
  };

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center font-proxima-semibold justify-between px-4 py-3 text-base font-medium text-sys-on-surface transition-all",
          "bg-sys-surface hover:bg-sys-surface-bright",
          "focus:outline-none focus:bg-sys-surface-bright",
          "[&[data-state=open]]:bg-sys-on-inverse-surface",
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        onKeyDown={handleKeyDown}
        aria-expanded="false"
        {...props}
      >
        <span className="text-left">{children}</span>
        <ChevronDown 
          className="w-6 h-6 transition-transform duration-300 shrink-0 text-sys-secondary-text" 
          aria-hidden="true"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      "bg-sys-surface-container text-sys-on-surface",
      className
    )}
    {...props}
  >
    <div className={cn("px-4 py-3", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }