import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@/components/ui/switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    onCheckedChange: { action: 'checked changed' },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

const AnimatedSwitchComponent = () => {
  const [checked, setChecked] = React.useState(false)
  return (
    <div className="flex items-center space-x-2 font-proxima-regular">
      <Switch
        id="animated-switch"
        checked={checked}
        onCheckedChange={setChecked}
        label="Animated Switch"
      />
      <label htmlFor="animated-switch">
        Animated Switch: {checked ? 'On' : 'Off'}
      </label>
    </div>
  )
}

export const Default: Story = {
  name: 'Animated Switch',
  render: () => <AnimatedSwitchComponent />,
}

export const UncheckedSwitch: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="simple-switch" {...args} label="Simple Switch" />
      <label htmlFor="simple-switch">Simple Switch</label>
    </div>
  ),
  args: {
    checked: false,
  },
}

export const Checked: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch id="checked-switch" {...args} label="Checked Switch" />
      <label htmlFor="checked-switch">Checked Switch</label>
    </div>
  ),
  args: {
    checked: true,
  },
}

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `
The Switch component has been updated with the following ARIA attributes and roles to improve accessibility:

- \`role="switch"\`: Defines the element as a switch, which is important for screen readers to identify the purpose of the component.
- \`aria-checked\`: Indicates the current state of the switch (checked or unchecked). This attribute is dynamically updated based on the \`checked\` prop.
- \`aria-label\`: Provides a text alternative for the switch when there's no visible text label.
- \`<span className="sr-only">\`: Contains the label text, visible only to screen readers.

These attributes ensure that the switch is properly announced and its state is communicated to users of assistive technologies, improving the overall accessibility of the component.

### Usage Example

\`\`\`tsx
import React from 'react'
import { Switch } from "@/components/ui/switch"

export function AccessibleSwitchDemo() {
  const [checked, setChecked] = React.useState(false)

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        checked={checked}
        onCheckedChange={setChecked}
        label="Airplane Mode"
      />
      <label htmlFor="airplane-mode">
        Airplane Mode: {checked ? 'On' : 'Off'}
      </label>
    </div>
  )
}
\`\`\`

        `,
      },
    },
  },
  render: () => <AnimatedSwitchComponent />,
}