import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const DialogDemo: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="w-[393px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold font-proxima">Edit profile</DialogTitle>
          <DialogDescription className="text-gray-500">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="font-semibold">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Peter Boulis"
              className="w-full"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username" className="font-semibold">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@pboulis"
              className="w-full"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="primary" className="w-full">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const OnlyContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Only Content</Button>
      </DialogTrigger>
      <DialogContent className="w-[393px]">
        <DialogHeader>
          <DialogTitle className="font-proxima">Please log in again.</DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground">
          Your session has expired. Please login again to continue using the
          application.
        </p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button variant="primary" type="submit">Log in</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Open log in</Button>
      </DialogTrigger>
      <DialogContent className="w-[393px]">
        <DialogHeader>
          <DialogTitle className="font-proxima">Log in to Belong</DialogTitle>
          <DialogDescription>
            Please login again to continue using the application.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              required
              id="email"
              type="email"
              autoComplete="username"
              placeholder="team@mynaui.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              required
              id="password"
              type="password"
              placeholder="••••••••••"
              autoComplete="current-password"
            />
          </div>
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" variant="primary">Log in</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Accessibility: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Open Accessible Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Accessibility Features</DialogTitle>
          <DialogDescription>
            This dialog demonstrates key accessibility features.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h3 className="text-lg font-medium">Key Features:</h3>
          <ul className="pl-5 mt-2 space-y-2 list-disc">
            <li>Focus is trapped within the dialog when open</li>
            <li>Escape key closes the dialog</li>
            <li>Dialog is properly labeled for screen readers</li>
            <li>Close button is accessible and clearly labeled</li>
          </ul>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The Dialog component is designed with accessibility in mind:

1. **Keyboard Navigation**: 
   - The dialog can be opened and closed using the keyboard.
   - When open, focus is trapped within the dialog, allowing users to navigate through all interactive elements.
   - The Escape key can be used to close the dialog.

2. **Screen Reader Support**:
   - The dialog is properly labeled using \`aria-labelledby\` and \`aria-describedby\` attributes.
   - The dialog's role is set to "dialog" to ensure proper announcement by screen readers.
   - The close button is clearly labeled for screen reader users.

3. **Focus Management**:
   - When the dialog opens, focus is automatically set to the first focusable element within the dialog.
   - When the dialog closes, focus is returned to the element that opened it.

4. **Visual Indicators**:
   - The dialog has sufficient color contrast to ensure readability.
   - Interactive elements within the dialog have clear focus indicators.

Example usage with accessibility features:

\`\`\`jsx
<Dialog>
  <DialogTrigger asChild>
    <Button variant="primary">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Accessible Dialog Title</DialogTitle>
      <DialogDescription>
        This is a description of the dialog content.
      </DialogDescription>
    </DialogHeader>
    <p>Main content of the dialog goes here.</p>
    <DialogFooter>
      <DialogClose asChild>
        <Button type="button">Close Dialog</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
\`\`\`
        `,
      },
    },
  },
};