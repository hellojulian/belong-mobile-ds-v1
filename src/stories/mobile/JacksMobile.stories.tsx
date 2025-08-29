import React from 'react'
import { ChevronLeft, Info, Share, Smartphone, BarChart2, Clock, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Separator } from "../../components/ui/separator"
import type { Meta, StoryObj } from '@storybook/react'

const actions = [
  { icon: Share, label: "Share data" },
  { icon: Smartphone, label: "Top up data" },
  { icon: BarChart2, label: "View data usage" },
  { icon: Clock, label: "View sharing history" },
]

const JacksMobilePage: React.FC = () => {
  return (
    <div className="w-[393px] h-[852px] mx-auto bg-background text-foreground overflow-hidden rounded-[60px] border-[14px] border-zinc-900 shadow-xl">
      <div className="flex flex-col h-full">
        {/* App Header */}
        <header className="flex items-center justify-between p-4 border-b">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-lg font-semibold">Jack's Mobile</h1>
          <Button variant="ghost" size="icon">
            <Info className="w-6 h-6" />
          </Button>
        </header>

        {/* User Profile */}
        <div className="flex flex-col items-center mt-6 mb-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://i.pinimg.com/564x/80/4e/f1/804ef1682390865b11f9d3df22293f7c.jpg" alt="Jack" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h2 className="mt-2 text-3xl font-bold tracking-tight font-proxima">Jack</h2>
          <p className="text-muted-foreground font-proxima">0400 333 123</p>
        </div>

        {/* Data Balance */}
        <Card className="mx-4 mb-4">
          <CardContent className="p-4">
            <h3 className="mb-2 text-sm font-medium">Data balance</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold tracking-tight font-proxima">100.5GB</p>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
              <div className="text-4xl">☁️</div>
            </div>
          </CardContent>
        </Card>

        {/* Action List */}
        <Card className="mx-4">
          <CardContent className="p-0">
            {actions.map((action, index) => (
              <React.Fragment key={index}>
                <Button
                  variant="ghost"
                  className="justify-between w-full px-4 py-6"
                >
                  <div className="flex items-center">
                    <action.icon className="w-5 h-5 mr-3" />
                    {action.label}
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </Button>
                {index < actions.length - 1 && (
                  <div className="px-4">
                    <Separator />
                  </div>
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const meta: Meta<typeof JacksMobilePage> = {
  title: 'Value Brand Explore/Mobile/Jacks Mobile Page',
  component: JacksMobilePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="p-4 bg-transparent">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof JacksMobilePage>;

export const Default: Story = {};