import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus } from '@untitled-ui/icons-react'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <h3 className="mb-2 text-lg font-semibold font-proxima">Popover Title</h3>
        <p>This is the popover content. You can put any JSX in here.</p>
      </PopoverContent>
    </Popover>
  ),
}

export const AddFamilyMember: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Plus className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-5 w-80">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium font-proxima">Add Family Member</h3>
            <p className="text-sm text-muted-foreground">
              Add a family member to share data with.
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="nickname">Name</Label>
              <Input id="nickname" placeholder="Enter name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" placeholder="Enter contact number" />
            </div>
            <Button variant="primary" type="submit" size="lg">
              Add to family list
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>PB</AvatarFallback>
        </Avatar>
        <span className="font-medium font-proxima">Peter Boulis</span>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-4">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Avatar className="w-12 h-12">
              <AvatarFallback>PB</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="font-medium leading-none">Peter Boulis</p>
              <p className="text-sm text-muted-foreground">peter@belong.com.au</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Peter uses the most data out of your family.
          </p>
          <div className="flex flex-row gap-2">
            <Button size="sm" variant="primary" className="w-full">
              Manage
            </Button>
            <Button size="sm" variant="secondary" className="w-full">
              View usage
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `

The Popover component has been updated with the following ARIA attributes to improve accessibility:

PopoverTrigger:
Added \`aria-haspopup="dialog"\` to indicate that the trigger opens a dialog-like popover.

PopoverContent:
Added \`role="dialog"\` to indicate that the content is a dialog.
Added \`aria-modal="true"\` to indicate that the popover is modal and should trap focus when open.

### Usage Example


\`\`\`tsx
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function AccessiblePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <h3 className="mb-2 text-lg font-semibold">Popover Title</h3>
        <p>This is the popover content. You can put any JSX in here.</p>
      </PopoverContent>
    </Popover>
  )
}
\`\`\`

        `,
      },
    },
  },
}