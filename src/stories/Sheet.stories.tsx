import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const meta: Meta<typeof Sheet> = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
        <div className="mt-10 mb-6 rounded-lg overflow-hidden">
                <img
                  src="https://images.ctfassets.net/5lof7tf0p7b8/CmJSHTKj8v2vCcEND5Th0/6c8f717a54c9c01b8558e6dbaa5b8253/PrimaryBanner_SecondLifeShop_1800x1020px.png"
                  alt="Second Life Shop Banner"
                  className="w-full h-[200px] object-cover"
                />
              </div>
          <SheetTitle className="font-proxima-semibold tracking-tighht text-xl">Log in to Belong</SheetTitle>
          <SheetDescription>
            Please log in again to continue using the application.
          </SheetDescription>
        </SheetHeader>
        <form className="grid gap-4 py-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              required
              id="email"
              type="email"
              autoComplete="username"
              placeholder="team@belong.com.au"
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
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </SheetClose>
          <Button variant="primary" type="submit">Login</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `

The Sheet component is built using Radix UI's Dialog primitive, which provides built-in accessibility features:

1. It manages focus correctly, ensuring the dialog can be navigated using a keyboard.
2. It traps focus within the dialog when it's open, preventing users from accidentally interacting with content outside the dialog.
3. It provides proper ARIA attributes, such as \`role="dialog"\` and \`aria-modal="true"\`.
4. The close button has an \`aria-label\` for screen readers.

### Usage Example

Here's an example of how to use the Sheet component with proper accessibility:

\`\`\`tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function AccessibleSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
\`\`\`



        `,
      },
    },
  },
}