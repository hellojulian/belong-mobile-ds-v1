import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-[400px] p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof HoverCard>

const HoverCardDemo = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" className="w-16 h-16 rounded-full">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfM3D695MYGaQmB1NJmuHdG322lAtqwtq5Bw&s" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfM3D695MYGaQmB1NJmuHdG322lAtqwtq5Bw&s" alt="@vercel" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@belong</h4>
            <p className="text-sm">
              We have some upcoming work to do on the app. Stay tuned.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                 December 2024
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export const Default: Story = {
  render: () => <HoverCardDemo />,
}

export const Accessibility: Story = {
  render: () => <HoverCardDemo />,
  parameters: {
    docs: {
      description: {
        story: `
The HoverCard component has been updated with ARIA attributes to enhance accessibility:

1. \`aria-haspopup="dialog"\`: Added to the HoverCardTrigger to indicate that it opens a dialog-like element.
   Example: \`<HoverCardTrigger aria-haspopup="dialog">...\`

2. \`role="dialog"\`: Added to the HoverCardContent to define it as a dialog for screen readers.
   Example: \`<HoverCardContent role="dialog">...\`

3. \`aria-modal="false"\`: Added to the HoverCardContent to indicate that the hover card is non-modal and doesn't trap focus.
   Example: \`<HoverCardContent role="dialog" aria-modal="false">...\`

Usage example with additional accessibility attributes:

\`\`\`jsx
<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="ghost" className="w-10 h-10 rounded-full" aria-label="View user profile">
      <Avatar>
        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfM3D695MYGaQmB1NJmuHdG322lAtqwtq5Bw&s" alt="@vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
    </Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-80" aria-label="User profile information">
    <div className="flex justify-between space-x-4">
      <Avatar>
        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfM3D695MYGaQmB1NJmuHdG322lAtqwtq5Bw&s" alt="@vercel" />
        <AvatarFallback>VC</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold">@vercel</h4>
        <p className="text-sm">
          Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.
        </p>
        <div className="flex items-center pt-2">
          <span className="text-xs text-muted-foreground">
            Joined December 2021
          </span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
\`\`\`

In this example:
- The trigger button has an \`aria-label\` to describe its purpose.
- The HoverCardContent has an \`aria-label\` to provide a description of its content.

        `,
      },
    },
  },
}