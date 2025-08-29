import React from 'react'
import { ChevronUpDown, Mobile, Tablet, Tv } from "@mynaui/icons-react";
import { Simcard, Modem02, Plane, ChevronSelectorVertical } from '@untitled-ui/icons-react';
import { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="nbn">NBN Broadband</SelectItem>
        <SelectItem value="esim">eSIM</SelectItem>
        <SelectItem value="sim">SIM plan</SelectItem>
        <SelectItem value="data">Data only plan</SelectItem>
        <SelectItem value="devices">Devices</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a device" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="desktop">
          <div className="flex items-center">
            <Tv className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Desktop</span>
          </div>
        </SelectItem>
        <SelectItem value="mobile">
          <div className="flex items-center">
            <Mobile className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Mobile</span>
          </div>
        </SelectItem>
        <SelectItem value="tablet">
          <div className="flex items-center">
            <Tablet className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Tablet</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `

The Select component has been updated with the following ARIA attributes to improve accessibility:

SelectTrigger:
The \`SelectPrimitive.Trigger\` component from Radix UI already provides necessary ARIA attributes for the select trigger.
The font has been updated to use Proxima Nova for the entire trigger, including the placeholder.

SelectContent:
The \`SelectPrimitive.Content\` component from Radix UI handles most of the accessibility requirements for the select content.

SelectItem:
The \`SelectPrimitive.Item\` component from Radix UI provides necessary ARIA attributes for select items.

Icons:
Added \`aria-hidden="true"\` to icons to prevent screen readers from announcing them, as they are purely decorative.

### Usage Example

Here's an example of how to use the Select component with proper ARIA attributes and the Proxima Nova font:

\`\`\`tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AccessibleSelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="nbn">NBN Broadband</SelectItem>
        <SelectItem value="esim">eSIM</SelectItem>
        <SelectItem value="sim">SIM plan</SelectItem>
        <SelectItem value="data">Data only plan</SelectItem>
        <SelectItem value="devices">Devices</SelectItem>
      </SelectContent>
    </Select>
  )
}
\`\`\`

This example demonstrates the usage of the Select component with its ARIA attributes and the Proxima Nova font, ensuring proper accessibility and consistent styling for users relying on assistive technologies. The select component is semantically structured, and all interactive elements are properly labeled for screen readers.

Key accessibility features:
1. The Select component creates a dropdown that is announced as such to screen readers.
2. The select trigger and options are keyboard navigable.
3. The selected option is properly communicated to screen readers.
4. Icons are hidden from screen readers to avoid unnecessary announcements.
5. The Proxima Nova font is applied to the entire trigger, including the placeholder, for consistent styling.

When using the Select component, ensure that you provide clear and descriptive labels for the select trigger and options to enhance the user experience for all users, including those using assistive technologies.
        `,
      },
    },
  },
}

