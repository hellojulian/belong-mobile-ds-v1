import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    hasLabel: {
      control: 'boolean',
      defaultValue: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

const RadioGroupWithOptionalLabel = ({ hasLabel = true, ...args }) => (
  <RadioGroup defaultValue="comfortable" {...args}>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="default" id="r1" />
      {hasLabel && <Label htmlFor="r1">Default</Label>}
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="comfortable" id="r2" />
      {hasLabel && <Label htmlFor="r2">Comfortable</Label>}
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="compact" id="r3" />
      {hasLabel && <Label htmlFor="r3">Compact</Label>}
    </div>
  </RadioGroup>
)

export const Default: Story = {
  render: (args) => <RadioGroupWithOptionalLabel {...args} />,
}

export const WithoutLabels: Story = {
  render: (args) => <RadioGroupWithOptionalLabel hasLabel={false} {...args} />,
}

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `
The Radio Group component has been updated with the following ARIA attributes to improve accessibility:

RadioGroup:
The \`RadioGroupPrimitive.Root\` already provides the necessary ARIA attributes for a radio group.

RadioGroupItem:
The \`RadioGroupPrimitive.Item\` component inherently provides the necessary ARIA attributes for a radio button.

RadioGroupIndicator:
The indicator is now a simple div element, which is hidden from screen readers by default as it's purely presentational.

Labels:
When labels are present, they are associated with their respective radio buttons using the 'htmlFor' attribute, allowing users to select an option by clicking on the label text.

### Usage Example

Here's an example of how to use the Radio Group component with proper ARIA attributes:

\`\`\`tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function AccessibleRadioGroup() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}
\`\`\`

These accessibility features ensure that the Radio Group component is usable by people with various disabilities and those using assistive technologies. The labels, when present, improve the clickable area and provide context for each option.
        `,
      },
    },
  },
}