import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer"

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Drawer>

const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
]

const DrawerDemoComponent = () => {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-sm mx-auto">
          <DrawerHeader>
            <DrawerTitle className="font-proxima">Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 rounded-full shrink-0"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
                aria-label="Decrease goal"
              >
                <Minus className="w-4 h-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="font-bold tracking-tighter text-7xl font-proxima" aria-live="polite">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground font-proxima">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 rounded-full shrink-0"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
                aria-label="Increase goal"
              >
                <Plus className="w-4 h-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button variant="primary">Submit</Button>
            <DrawerClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export const DrawerDemo: Story = {
  render: () => <DrawerDemoComponent />
}

export const Basic: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
      <Button variant="secondary">Open Add Task</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-sm mx-auto">
          <DrawerHeader>
            <DrawerTitle>Add Task</DrawerTitle>
            <DrawerDescription>
              New tasks are added to the default category.
            </DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-4 p-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Task Name</Label>
              <Input id="name" placeholder="Enter task name here" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="assignee">Assignee</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue id="assignee" placeholder="Select someone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Adam</SelectItem>
                  <SelectItem value="2">Ruth</SelectItem>
                  <SelectItem value="3">Taylor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DrawerFooter>
            <Button type="submit" variant="primary">Add</Button>
            <DrawerClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export const Content: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
      <Button variant="secondary">Open Only Content</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-sm mx-auto">
          <DrawerHeader>
            <DrawerTitle>Please log in again.</DrawerTitle>
          </DrawerHeader>
          <p className="p-4 text-muted-foreground">
            Your session has expired. Please login again to continue using the
            application.
          </p>
          <DrawerFooter>
          <Button type="submit" variant="primary">Login</Button>
            <DrawerClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export const Login: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
      <Button variant="secondary">Open Log in</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-sm mx-auto">
          <DrawerHeader>
            <DrawerTitle>Log in to Belong</DrawerTitle>
            <DrawerDescription>
              Please log in again to continue using the application.
            </DrawerDescription>
          </DrawerHeader>
          <form className="grid gap-4 p-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                required
                id="email"
                type="email"
                autoComplete="username"
                placeholder="team@belong.com.au"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                required
                id="password"
                type="password"
                placeholder="••••••••••"
                autoComplete="current-password"
              />
            </div>
          </form>
          <DrawerFooter>
          <Button type="submit" variant="primary">Log in</Button>
            <DrawerClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export const Accessibility: Story = {
  render: () => <DrawerDemoComponent />,
  parameters: {
    docs: {
      description: {
        story: `
The Drawer component incorporates several ARIA attributes and accessibility features to enhance usability for all users:

1. \`aria-haspopup="dialog"\`: Applied to the DrawerTrigger to indicate that it opens a dialog.
   Example: \`<DrawerTrigger aria-haspopup="dialog">\`

2. \`role="dialog"\`: Added to the DrawerContent to explicitly define its role as a dialog.
   Example: \`<DrawerContent role="dialog">\`

3. \`aria-modal="true"\`: Added to the DrawerContent to indicate that it's a modal dialog.
   Example: \`<DrawerContent aria-modal="true">\`

4. \`aria-label\`: Added to the DrawerClose component to provide a descriptive label for screen readers.
   Example: \`<DrawerClose aria-label="Close drawer">\`

5. \`aria-hidden="true"\`: Added to decorative elements to hide them from screen readers.
   Example: \`<div aria-hidden="true">...</div>\`

6. \`aria-live="polite"\`: Added to the goal display to announce changes to screen readers.
   Example: \`<div aria-live="polite">{goal}</div>\`

7. Proper labeling: Using \`aria-label\` on buttons to provide context for screen readers.
   Example: \`<Button aria-label="Increase goal">...\`

Usage example:

\`\`\`jsx
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function AccessibleDrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full max-w-sm mx-auto">
          <DrawerHeader>
            <DrawerTitle className="font-proxima">Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 rounded-full shrink-0"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
                aria-label="Decrease goal"
              >
                <Minus className="w-4 h-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="font-bold tracking-tighter text-7xl font-proxima" aria-live="polite">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground font-proxima">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 rounded-full shrink-0"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
                aria-label="Increase goal"
              >
                <Plus className="w-4 h-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            {/* Chart component here */}
          </div>
          <DrawerFooter>
            <Button variant="primary">Submit</Button>
            <DrawerClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
\`\`\`

        `,
      },
    },
  },
}