"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const inputVariants = cva(
  "flex h-10 w-full font-proxima-body rounded-md border px-2.5 py-3 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sys-form-default disabled:cursor-not-allowed disabled:opacity-50 px-[10px] py-[12px] outline-none",
  {
    variants: {
      variant: {
        default:
          "border-sys-form-default bg-transparent focus:border-sys-form-active focus:bg-sys-secondary-container focus:placeholder:text-sys-secondary focus:border-2",
        error:
          "border-sys-form-error bg-sys-error-container placeholder:text-sys-error focus:border-sys-form-error-error focus:border-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", label, error, id, ...props }, ref) => {
    const inputId = id || React.useId();
    const errorId = `${inputId}-error`;
    const [isKeyboardFocus, setIsKeyboardFocus] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const lastInteractionWasKeyboard = React.useRef(false);

    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          lastInteractionWasKeyboard.current = true;
        }
      };

      const handleMouseDown = () => {
        lastInteractionWasKeyboard.current = false;
      };

      const handleFocusIn = (e: FocusEvent) => {
        if (e.target === inputRef.current) {
          setIsKeyboardFocus(lastInteractionWasKeyboard.current);
        }
      };

      const handleFocusOut = (e: FocusEvent) => {
        if (e.target === inputRef.current) {
          setIsKeyboardFocus(false);
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('focusin', handleFocusIn);
      document.addEventListener('focusout', handleFocusOut);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('focusin', handleFocusIn);
        document.removeEventListener('focusout', handleFocusOut);
      };
    }, []);

    return (
      <div className="relative">
        {label && (
          <label htmlFor={inputId} className="block mb-1 font-medium text-sys-on-surface font-proxima-body">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            className={cn(
              inputVariants({ variant, className }),
              isKeyboardFocus && variant === 'default' && "ring-2 ring-sys-secondary ring-offset-2 border-sys-secondary",
              isKeyboardFocus && variant === 'error' && "ring-2 ring-sys-error ring-offset-2 border-sys-error",
              "dark:ring-offset-sys-surface-bright"
            )}
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            id={inputId}
            aria-invalid={variant === 'error'}
            aria-describedby={error ? errorId : undefined}
            autoComplete="off"
            {...props}
          />
        </div>
        {error && (
          <p id={errorId} className="mt-1 text-sm font-proxima-body text-sys-error" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }