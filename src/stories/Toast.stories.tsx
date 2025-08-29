import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastClose, ToastAction, } from '@/components/ui/toast'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <div className="p-4">
          <Story />
        </div>
        <ToastViewport />
      </ToastProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        height: '300px',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

const ToastDemo = ({ variant, title, description }: { variant?: 'default' | 'error' | 'success' | 'info' | 'warning', title: string, description: string }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Button variant="secondary"  onClick={() => setOpen(true)}>Show {variant || 'Default'} Toast</Button>
      <Toast open={open} onOpenChange={setOpen} variant={variant}>
        <div className="grid gap-1">
          {title && <ToastTitle>{title}</ToastTitle>}
          {description && <ToastDescription>{description}</ToastDescription>}
        </div>
        <ToastAction altText="Try again" onClick={() => console.log('Toast action clicked')}>
          Action
        </ToastAction>
        <ToastClose />
      </Toast>
    </div>
  )
}

// export const Default: Story = {
//   render: () => <ToastDemo title="Notification" description="This is a default toast message." />,
// }

// export const Error: Story = {
//   render: () => <ToastDemo variant="error" title="Error" description="A error toast." />,
// }

// export const Success: Story = {
//   render: () => <ToastDemo variant="success" title="Success" description="A success toast." />,
// }

// export const Information: Story = {
//   render: () => <ToastDemo variant="info" title="Information" description="A information toast." />,
// }

// export const Warning: Story = {
//   render: () => <ToastDemo variant="warning" title="Warning" description="A warning toast." />,
// }




export const ToastTypes: Story = {
  name: 'Toast Types',
  render: () => (
    <div className="flex flex-col space-y-4">
      <ToastDemo title="Default Toast" description="This is a default toast with a description." />
      <ToastDemo variant="success" title="Success Toast" description="This is a success toast." />
      <ToastDemo variant="info" title="Info Toast" description="This is an info toast." />
      <ToastDemo variant="warning" title="Warning Toast" description="This is a warning toast." />
      <ToastDemo variant="error" title="Error Toast" description="This is an error toast." />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story showcases different types of toasts, including default, success, info, warning, and error variants.',
      },
    },
  },
}

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `
The Toast component has been updated with the following ARIA attributes to improve accessibility:

- \`role="alert"\`: Defines the toast as an alert, which is important for screen readers to identify and announce the content.
- \`aria-live="assertive"\`: Indicates that the toast message should be announced immediately by assistive technologies.
- \`aria-atomic="true"\`: Ensures that the entire content of the toast is read as a single, atomic unit.
- \`aria-label="Close"\` on the close button: Provides a clear label for the close button for screen readers.

These attributes ensure that toast notifications are properly announced to users of assistive technologies, improving the overall accessibility of the application.

### Usage Example

\`\`\`tsx
import React from 'react'
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastClose, ToastAction } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"

export function AccessibleToastDemo() {
  const [open, setOpen] = React.useState(false)

  return (
    <ToastProvider>
      <Button onClick={() => setOpen(true)}>Show Toast</Button>
      <Toast open={open} onOpenChange={setOpen}>
        <div className="grid gap-1">
          <ToastTitle>Notification</ToastTitle>
          <ToastDescription>This is an accessible toast message.</ToastDescription>
        </div>
        <ToastAction altText="Dismiss" onClick={() => setOpen(false)}>
          Dismiss
        </ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
}
\`\`\`

In this example, clicking the button will trigger an accessible toast notification. The Toast component, with its added ARIA attributes, ensures that the toast message is properly announced by screen readers and other assistive technologies.
        `,
      },
    },
  },
  render: () => <ToastDemo title="Accessibility Demo" description="This toast demonstrates accessibility features." />,
}