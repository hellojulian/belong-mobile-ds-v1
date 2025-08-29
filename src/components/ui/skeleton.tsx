import React from "react"
import { cn } from "../../lib/utils"
        

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Indicates whether the skeleton is currently loading.
   * @default true
   */
  isLoading?: boolean
}

function Skeleton({
  className,
  isLoading = true,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-ref-neutral-70 dark:bg-ref-neutral-30", className)}
      {...props}
      role="status"
      aria-busy={isLoading}
      aria-live="polite"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export { Skeleton }