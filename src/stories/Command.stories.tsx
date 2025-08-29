import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { 
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Calendar, Mail01, FaceSmile, Settings02, User01, Rocket02 } from "@untitled-ui/icons-react"

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="border rounded-lg shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FaceSmile className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Rocket02 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Launch</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Settings">
          <CommandItem>
            <User01 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Mail01 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Mail</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings02 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithSeparator: Story = {
  render: () => (
    <Command className="border rounded-lg shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FaceSmile className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Rocket02 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Launch</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User01 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Mail01 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Mail</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings02 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}



export const AccessibilityExample: Story = {
  render: () => (
    <Command className="border rounded-lg shadow-md" aria-label="Command menu">
      <CommandInput placeholder="Type a command or search..." aria-label="Command input" />
      <CommandList aria-label="Command list">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Accessibility Examples" aria-label="Accessibility examples">
          <CommandItem>
            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Calendar</span>
            <CommandShortcut aria-label="Shortcut: Command C">⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Mail01 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Mail</span>
            <CommandShortcut aria-label="Shortcut: Command M">⌘M</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The Command component incorporates several ARIA attributes to enhance accessibility:

- \`aria-label\`: Provides a descriptive label for the entire command menu, input, list, and groups.
- \`aria-hidden="true"\`: Applied to icons to prevent them from being announced by screen readers when they are purely decorative.
- \`aria-label\` on CommandShortcut: Provides a text alternative for the keyboard shortcut, making it more accessible to screen readers.

The Command component also leverages the underlying \`cmdk\` library, which provides additional accessibility features:

- Proper ARIA roles are automatically applied to the command menu, list, and items.
- Keyboard navigation is supported out of the box.
- Screen reader announcements are handled internally by the library.

Usage example:

\`\`\`jsx
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from '@/components/ui/command'
import { Calendar, Mail } from 'your-icon-library'

export function AccessibleCommandMenu() {
  return (
    <Command aria-label="Command menu">
      <CommandInput placeholder="Type a command or search..." aria-label="Command input" />
      <CommandList aria-label="Command list">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Options" aria-label="Command options">
          <CommandItem>
            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Calendar</span>
            <CommandShortcut aria-label="Shortcut: Command C">⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Mail</span>
            <CommandShortcut aria-label="Shortcut: Command M">⌘M</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
\`\`\`

This example demonstrates how to create an accessible Command menu with proper ARIA labels and roles.
        `,
      },
    },
  },
}