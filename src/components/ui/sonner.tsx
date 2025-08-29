import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-sys-surface-bright group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-sys-secondary group-[.toast]:text-sys-on-secondary group-[.toast]:hover:bg-sys-secondary",
          cancelButton:
            "group-[.toast]:bg-sys-surface group-[.toast]:text-sys-on-surface group-[.toast]:hover:bg-sys-secondary",
        },
        // Add ARIA attributes
        ariaLive: "assertive",
        role: "alert",
      }}
      {...props}
    />
  )
}

export { Toaster }