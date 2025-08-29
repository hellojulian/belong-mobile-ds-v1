import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {
    className: 'w-[100px] h-[20px]',
  },
}

export const SimpleCard: Story = {
  render: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}

export const CardWithInputs: Story = {
  render: () => (
    <Card
      className="w-[361px] overflow-hidden"
      role="region"
      aria-labelledby="login-title"
    >
      <div className="relative w-full h-[160px]">
        <Skeleton className="absolute inset-0 object-cover w-full h-full rounded-t-xl" />
      </div>
      <CardHeader>
        <div className="mb-4">
          <Label
            htmlFor="login-progress"
            className="text-sm text-muted-foreground"
          >
            <Skeleton className="w-16 h-4" />
          </Label>
          <Skeleton className="w-full h-2 mt-1" />
        </div>
        <CardTitle id="login-title"><Skeleton className="w-40 h-6" /></CardTitle>
        <CardDescription><Skeleton className="w-56 h-4" /></CardDescription>
      </CardHeader>
      <CardContent>
        <form aria-labelledby="login-title">
          <div className="grid items-center w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name-input"><Skeleton className="w-12 h-4" /></Label>
              <Skeleton className="w-full h-10" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password-input"><Skeleton className="w-16 h-4" /></Label>
              <Skeleton className="w-full h-10" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="grid grid-flow-col gap-3 justify-stretch">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
      </CardFooter>
    </Card>
  ),
}

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `
### ARIA Accessibility

The Skeleton component includes the following accessibility features:

1. It uses \`role="status"\` to indicate that it's a status message.
2. It uses \`aria-busy="true"\` to indicate that it's currently in a busy (loading) state.
3. It uses \`aria-live="polite"\` to announce changes to screen readers without interrupting the current task.
4. It includes a visually hidden "Loading..." text for screen readers.

### Usage Example

Here's an example of how to use the Skeleton component with proper accessibility:

\`\`\`tsx
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function LoadingCard() {
  return (
    <Card
      className="w-[361px] overflow-hidden"
      role="region"
      aria-labelledby="login-title"
    >
      <div className="relative w-full h-[160px]">
        <Skeleton className="absolute inset-0 object-cover w-full h-full rounded-t-xl" />
      </div>
      <CardHeader>
        <div className="mb-4">
          <Label
            htmlFor="login-progress"
            className="text-sm text-muted-foreground"
          >
            <Skeleton className="w-16 h-4" />
          </Label>
          <Skeleton className="w-full h-2 mt-1" />
        </div>
        <CardTitle id="login-title"><Skeleton className="w-40 h-6" /></CardTitle>
        <CardDescription><Skeleton className="w-56 h-4" /></CardDescription>
      </CardHeader>
      <CardContent>
        <form aria-labelledby="login-title">
          <div className="grid items-center w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name-input"><Skeleton className="w-12 h-4" /></Label>
              <Skeleton className="w-full h-10" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password-input"><Skeleton className="w-16 h-4" /></Label>
              <Skeleton className="w-full h-10" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="grid grid-flow-col gap-3 justify-stretch">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-10" />
      </CardFooter>
    </Card>
  )
}
\`\`\`
`,
      },
    },
  },
}