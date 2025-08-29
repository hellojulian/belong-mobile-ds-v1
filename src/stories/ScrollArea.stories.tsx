import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from "@/components/ui/separator"

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ScrollArea>

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )
   

export const Default: Story = {
  render: () => (
<ScrollArea className="w-48 border rounded-md h-72">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `

The Scroll Area component has been updated with the following ARIA attributes to improve accessibility:

ScrollArea:
The \`ScrollAreaPrimitive.Root\` and \`ScrollAreaPrimitive.Viewport\` components from Radix UI already provide necessary ARIA attributes for a scrollable region.

ScrollBar:
The \`ScrollAreaPrimitive.ScrollAreaScrollbar\` component from Radix UI handles most of the accessibility requirements for the scrollbar.

ScrollAreaThumb:
Added \`aria-label="Scroll thumb"\` to provide a descriptive label for the scroll thumb, which can be announced by screen readers.

### Usage Example


\`\`\`tsx
import { ScrollArea } from "@/components/ui/scroll-area"

export function AccessibleScrollArea() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div>
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
\`\`\`

        `,
      },
    },
  },
}