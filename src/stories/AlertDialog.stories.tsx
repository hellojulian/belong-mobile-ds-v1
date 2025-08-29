import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Trash01 } from '@untitled-ui/icons-react'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    cancelText: { control: 'text' },
    actionText: { control: 'text' },
    triggerText: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof AlertDialog>

const Template: Story = {
  render: ({ title, description, cancelText, actionText, triggerText }) => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">{triggerText}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[393px]">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction>{actionText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Default: Story = {
  ...Template,
  args: {
    title: 'Are you absolutely sure?',
    description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
    cancelText: 'Cancel',
    actionText: 'Continue',
    triggerText: 'Open Alert Dialog',
  },
}

export const IconDialog: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Show Icon Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="items-center gap-2 md:flex-row md:items-start md:gap-4">
          <div
            aria-hidden="true"
            className="p-3 rounded-full shrink-0 bg-red-50 dark:bg-red-900"
          >
            <Trash01 className="text-red-600 size-6 dark:text-red-200" />
          </div>
          <div className="flex flex-col gap-2">
            <AlertDialogTitle>Delete Account?</AlertDialogTitle>
            <AlertDialogDescription>
              Deleting your account is irreversible and will erase all your
              data. This action cannot be undone.
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const LogoutConfirmation: Story = {
  ...Template,
  args: {
    title: 'Logout',
    description: 'Are you sure you want to logout? You will need to login again to access your account.',
    cancelText: 'Cancel',
    actionText: 'Logout',
    triggerText: 'Logout',
  },
}

export const Accessibility: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Open Accessible Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[393px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Accessibility Example</AlertDialogTitle>
          <AlertDialogDescription>
            This is an example of an accessible alert dialog. It uses proper ARIA attributes and manages focus correctly.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The AlertDialog component incorporates several ARIA attributes and behaviors to enhance accessibility:

- \`role="alertdialog"\`: Automatically applied by Radix UI to indicate that the dialog is an alert that requires a response.

- \`aria-labelledby\`: Automatically handled by Radix UI, associating the dialog's title with the dialog content, providing a clear label for screen readers.

- \`aria-describedby\`: Automatically handled by Radix UI, associating the dialog's description with the dialog content, providing additional context for screen readers.

- \`aria-haspopup="dialog"\`: Applied to the trigger button to indicate that it opens a dialog.

- Focus management: Automatically handled by Radix UI. When the dialog opens, focus is moved to the first focusable element within the dialog. When the dialog closes, focus is returned to the trigger button.

- Focus trap: Automatically handled by Radix UI. While the dialog is open, focus is trapped within the dialog, preventing users from tabbing outside of it.

Example usage:

\`\`\`jsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="primary">Open Accessible Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent className="max-w-[393px]">
    <AlertDialogHeader>
      <AlertDialogTitle>Accessibility Example</AlertDialogTitle>
      <AlertDialogDescription>
        This is an example of an accessible alert dialog. It uses proper ARIA attributes and manages focus correctly.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Confirm</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
\`\`\`
        `,
      },
    },
  },
}