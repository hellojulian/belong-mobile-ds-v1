import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    delayDuration: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <TooltipProvider>
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const WithDelay: Story = {
  render: (args) => (
    <TooltipProvider>
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me (with delay)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip has a delay</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  args: {
    delayDuration: 500,
  },
};

export const TooltipPlacements: Story = {
    name: 'Tooltip Placements',
    render: () => (
      <div className="flex flex-wrap items-center justify-center gap-4">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>New Project</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>New Project</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>New Project</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>New Project</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    ),
    parameters: {
      docs: {
        description: {
          story: `
  This story demonstrates tooltips with different placement options: top, bottom, left, and right.
  The \`side\` prop on the \`TooltipContent\` component is used to control the placement of the tooltip.
  The \`delayDuration\` is set to 0 for immediate display on hover.
          `,
        },
      },
    },
  };

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `
The Tooltip component has been updated with the following ARIA attributes to improve accessibility:

- \`aria-describedby\`: Associates the tooltip content with the trigger element, ensuring that screen readers can announce the tooltip content when the trigger is focused.
- \`role="tooltip"\`: Explicitly defines the purpose of the tooltip content for assistive technologies.
- Keyboard navigation support: Tooltips can be triggered using keyboard focus, which is handled by Radix UI's underlying implementation.

These attributes ensure that tooltip information is properly announced to users of assistive technologies, improving the overall accessibility of the application.

### Usage Example

\`\`\`tsx
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export function AccessibleTooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for Info</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is an accessible tooltip message.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
\`\`\`

In this example, hovering over the button or focusing it with a keyboard will trigger an accessible tooltip. The Tooltip component, with its added ARIA attributes, ensures that the tooltip content is properly associated with the trigger and announced by screen readers and other assistive technologies.
        `,
      },
    },
  },
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Accessibility Demo</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip demonstrates accessibility features.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

