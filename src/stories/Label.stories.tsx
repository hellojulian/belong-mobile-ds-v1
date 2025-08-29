import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Label',
  },
  render: (args) => <Label {...args} />,
}

export const WithInput: Story = {
  args: {
    children: 'Email',
    htmlFor: 'email',
  },
  render: (args) => (
    <div>
      <Label {...args} />
      <Input id="email" type="email" placeholder="Enter your email" className="w-[361px]" />    </div>
  ),
}


export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `
### ARIA Accessibility

The Label component is built using Radix UI's Label primitive, which provides built-in accessibility features:

1. It automatically associates with form controls using the \`htmlFor\` prop.
2. It uses the native \`<label>\` element, ensuring proper semantics and keyboard interactions.
3. When a label is clicked, it automatically focuses the associated form control.

### Usage Example

Here's an example of how to use the Label component with proper accessibility:

\`\`\`tsx
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function AccessibleForm() {
  return (
    <div className="space-y-2">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <textarea id="message" placeholder="Enter your message" />
      </div>
    </div>
  )
}
\`\`\`
        `,
      },
    },
  },
}