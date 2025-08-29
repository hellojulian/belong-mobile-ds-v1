import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "../../lib/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  withText?: boolean
  label?: string
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, withText = false, label, ...props }, ref) => {
  const progressValue = Math.round(value || 0)
  const progressId = React.useId()

  return (
    <div className="w-full">
      {withText && (
        <div className="flex justify-between mb-2 text-sm font-medium">
          <span id={`${progressId}-label`}>{label || 'Progress'}</span>
          <span id={`${progressId}-value`} aria-live="polite">{progressValue}%</span>
        </div>
      )}
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-sys-divider-decorative",
          className
        )}
        value={progressValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressValue}
        aria-valuetext={`${progressValue}%`}
        aria-labelledby={withText ? `${progressId}-label ${progressId}-value` : undefined}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="flex-1 w-full h-full transition-all rounded-full bg-sys-secondary"
          style={{ transform: `translateX(-${100 - progressValue}%)` }}
        />
      </ProgressPrimitive.Root>
    </div>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }