import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { tv } from 'tailwind-variants';
import { useState, useEffect } from 'react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const focusRing = tv({
  base: 'outline outline-offset-2',
  variants: {
    isFocusVisible: {
      false: 'outline-0',
      true: 'outline-2 outline-sys-secondary'
    },
    isInvalid: {
      false: '',
      true: 'outline-2 outline-sys-focus-error'
    }
  },
  compoundVariants: [
    {
      isInvalid: true,
      isFocusVisible: true,
      class: 'outline-2 outline-sys-focus-error'
    }
  ]
});

export function useFocusVisible() {
  const [isFocusVisible, setIsFocusVisible] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' || e.key.startsWith('Arrow') || e.key === 'Enter') {
        setIsFocusVisible(true);
      }
    };

    const handleMouseDown = () => {
      setIsFocusVisible(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return isFocusVisible;
}

export function composeTailwindRenderProps(
  className: string | ((props: any) => string) | undefined,
  tw: string
): (props: any) => string {
  return (props: any) => {
    const baseClass = typeof className === 'function' ? className(props) : className;
    return `${tw} ${baseClass || ''}`.trim();
  };
}