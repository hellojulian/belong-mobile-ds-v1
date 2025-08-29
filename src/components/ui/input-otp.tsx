"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const inputVariants = cva(
  "flex h-9 w-9 rounded-md font-proxima-bold border text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-sys-form-default bg-transparent text-sys-on-surface focus-visible:ring-sys-secondary focus:border-sys-form-active focus:bg-sys-secondary-container active:bg-sys-secondary-container",
        error:
          "border-sys-form-error bg-sys-error-container text-sys-on-error-container active:bg-sys-error-container focus-visible:ring-sys-error focus:border-sys-form-error focus:bg-sys-error-container",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface InputOTPProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>, VariantProps<typeof inputVariants> {
  length?: number
  onChange?: (value: string) => void
  label?: string
}

const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
  ({ className, length = 6, variant = "default", onChange, label = "One-time password", ...props }, ref) => {
    const [otp, setOtp] = React.useState<string[]>(Array(length).fill(''))
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (index: number, value: string) => {
      if (value.length > 1) return
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)
      
      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus()
      }

      const otpString = newOtp.join('')
      onChange?.(otpString)
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        e.preventDefault()
        const newOtp = [...otp]
        if (newOtp[index]) {
          newOtp[index] = ''
        } else if (index > 0) {
          newOtp[index - 1] = ''
          inputRefs.current[index - 1]?.focus()
        }
        setOtp(newOtp)
        onChange?.(newOtp.join(''))
      } else if (e.key === 'ArrowLeft' && index > 0) {
        e.preventDefault()
        inputRefs.current[index - 1]?.focus()
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        e.preventDefault()
        inputRefs.current[index + 1]?.focus()
      }
    }

    return (
      <div ref={ref} className={cn("flex flex-col gap-2", className)}>
        <label id="otp-label" className="sr-only">
          {label}
        </label>
        <div className="flex gap-2" role="group" aria-labelledby="otp-label">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              pattern="\d{1}"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              className={cn(
                inputVariants({ variant }),
                "text-center"
              )}
              aria-label={`Digit ${index + 1}`}
              {...props}
            />
          ))}
        </div>
      </div>
    )
  }
)
InputOTP.displayName = "InputOTP"

export { InputOTP }