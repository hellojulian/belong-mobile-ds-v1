import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a micro-interaction?</AccordionTrigger>
        <AccordionContent>
          Micro-interactions are events which have one main task — a single
          purpose — and they are found all over your device and within apps.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why should I use a micro-interaction?</AccordionTrigger>
        <AccordionContent>
          You should use micro-interactions to enhance a simple task and to make
          the experience more enjoyable.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I use a micro-interaction?</AccordionTrigger>
        <AccordionContent>
          Start by thinking about the task you want the user to perform.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    type: 'single',
    collapsible: true,
    className: "w-full rounded-2xl border-2 text-base",
  },
}


export const Accessibility: Story = {
  ...Default,
  parameters: {
    docs: {
      description: {
        story: `

1. This accordion uses the \`@radix-ui/react-accordion\` primitive, which provides robust accessibility support.
2. The accordion follows the WAI-ARIA Accordion Design Pattern.
3. Keyboard navigation support includes:
   - Tab: Moves focus between accordion headers
   - Space or Enter: Expands/collapses the focused accordion item
   - Arrow Down: Moves focus to the next accordion header
   - Arrow Up: Moves focus to the previous accordion header
   - Home: Moves focus to the first accordion header
   - End: Moves focus to the last accordion header
   - Escape: Removes focus from the current accordion trigger
4. Focus styles have been enhanced:
   - A visible focus ring appears when the accordion trigger is focused
   - The focus ring uses the system secondary color for high contrast
   - The focus ring has an offset to ensure visibility on all background colors
5. ARIA attributes implemented:
   - \`aria-expanded\` on the trigger, indicating whether the accordion is open or closed
   - The \`AccordionPrimitive\` from Radix UI handles other necessary ARIA attributes
6. The expand/collapse state is communicated to assistive technologies.
7. The ChevronDown icon has \`aria-hidden="true"\` to prevent screen readers from announcing it.
8. Escape key functionality:
   - Pressing the 'Escape' key while focused on an accordion trigger will remove focus from the trigger.
   - This allows users to quickly exit the accordion navigation if needed.

Usage example:

\`\`\`jsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full text-sm border rounded">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is a micro-interaction?</AccordionTrigger>
        <AccordionContent>
          Micro-interactions are events which have one main task — a single
          purpose — and they are found all over your device and within apps.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why should I use a micro-interaction?</AccordionTrigger>
        <AccordionContent>
          You should use micro-interactions to enhance a simple task and to make
          the experience more enjoyable.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do I use a micro-interaction?</AccordionTrigger>
        <AccordionContent>
          Start by thinking about the task you want the user to perform.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
\`\`\`

To further improve accessibility:
1. Ensure logical heading structure when implementing (e.g., use \`<h3>\` for accordion items if the accordion is within an \`<h2>\` context).
2. Provide clear, descriptive labels for each accordion item.
3. Consider adding \`aria-controls\` to \`AccordionTrigger\` referencing the content ID.
4. Ensure any interactive elements within accordion content are keyboard-accessible.
5. Test thoroughly with various screen readers (NVDA, JAWS, VoiceOver) for optimal assistive technology support.
        `,
      },
    },
  },
}