import * as React from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-8 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-xl border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-sys-surface-bright text-foreground",
        error: "error border-sys-error bg-sys-error-container",
        success: "success border-sys-success bg-sys-success-container",
        info: "information border-sys-information bg-sys-information-container",
        warning: "warning border-sys-warning bg-sys-warning-container",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), 
        "data-[state=open]:slide-in-from-top-full data-[state=closed]:slide-out-to-right-full",
        "sm:data-[state=open]:slide-in-from-bottom-full",
        "data-[swipe=move]:translate-y-[var(--radix-toast-swipe-move-y)]",
        "data-[swipe=cancel]:translate-y-0",
        "data-[swipe=end]:translate-y-[var(--radix-toast-swipe-end-y)]",
        className
      )}
      {...props}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex font-proxima h-8 rounded-full shrink-0 items-center justify-center px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sys-secondary disabled:pointer-events-none disabled:opacity-50 bg-sys-secondary text-sys-on-secondary",
      "group-[.error]:bg-sys-error group-[.error]:text-sys-on-error group-[.error]:hover:bg-sys-error-hover",
      "group-[.success]:bg-sys-success group-[.success]:text-sys-on-success group-[.success]:hover:bg-sys-success-hover",
      "group-[.information]:bg-sys-information group-[.information]:text-sys-on-information group-[.information]:hover:bg-sys-information-hover",
      "group-[.warning]:bg-sys-warning group-[.warning]:text-sys-on-warning group-[.warning]:hover:bg-sys-warning-hover",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-sys-secondary group-hover:opacity-100",
      "group-[.error]:text-sys-on-surface group-[.warning]:focus:ring-offset-sys-secondary",
      "group-[.success]:text-sys-on-surface group-[.warning]:focus:ring-offset-sys-secondary",
      "group-[.information]:text-sys-on-surface group-[.warning]:focus:ring-offset-sys-secondary",
      "group-[.warning]:text-sys-on-surface group-[.warning]:focus:ring-offset-sys-secondary",
      className
    )}
    toast-close=""
    {...props}
    aria-label="Close"
  >
    <Cross2Icon className="w-4 h-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn(
      "text-md font-proxima",
      "group-[.error]:text-sys-error",
      "group-[.success]:text-sys-success",
      "group-[.information]:text-sys-information",
      "group-[.warning]:text-sys-warning",
      className
    )}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn(
      "text-sm font-proxima-body opacity-90",
      "group-[.error]:text-sys-error",
      "group-[.success]:text-sys-success",
      "group-[.information]:text-sys-information",
      "group-[.warning]:text-sys-warning",
      className
    )}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}