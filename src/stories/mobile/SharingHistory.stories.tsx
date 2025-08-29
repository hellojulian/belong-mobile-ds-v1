import React from 'react'
import { ChevronLeft, Info } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { ScrollArea } from "../../components/ui/scroll-area"
import { Separator } from "../../components/ui/separator"
import type { Meta, StoryObj } from '@storybook/react'

const sharingHistory = [
  { name: "Jules", phone: "0406 257 871", date: "22/8/24", amount: "10GB" },
  { name: "Sarah", phone: "0406 257 871", date: "22/8/24", amount: "1GB" },
  { name: "Jack", phone: "0406 257 871", date: "21/8/24", amount: "3GB" },
  { name: "Family iPad", phone: "0406 257 871", date: "15/8/24", amount: "10GB" },
  { name: "Jules", phone: "0406 257 871", date: "15/8/24", amount: "1GB" },
  { name: "Sarah", phone: "0406 257 871", date: "12/7/24", amount: "2GB" },
  { name: "Family iPad", phone: "0406 257 871", date: "11/7/24", amount: "10GB" },
]

const SharingHistoryPage: React.FC = () => {
  return (
    <div className="w-[393px] h-[852px] mx-auto bg-background text-foreground overflow-hidden rounded-[60px] border-[14px] border-zinc-900 shadow-xl">
      <div className="flex flex-col h-full">
        {/* App Header */}
        <header className="flex items-center justify-between p-4 border-b">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-lg font-semibold">Sharing History</h1>
          <Button variant="ghost" size="icon">
            <Info className="w-6 h-6" />
          </Button>
        </header>

        {/* User Profile */}
        <div className="flex flex-col items-center mt-6 mb-4">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src="https://i.pinimg.com/564x/80/4e/f1/804ef1682390865b11f9d3df22293f7c.jpg"
              alt="User"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h2 className="mt-2 text-3xl font-bold tracking-tight font-proxima">
            Jack
          </h2>
          <p className="text-muted-foreground font-proxima">0400 333 123</p>
        </div>

        {/* Sharing History List */}
        <Card className="flex-grow mx-4 mb-4 overflow-hidden">
          <CardHeader>
            <CardTitle>Data shared</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px] pr-4">
              {sharingHistory.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center justify-between px-6 py-4">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.phone}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                      <p className="font-semibold">{item.amount}</p>
                    </div>
                  </div>
                  {index < sharingHistory.length - 1 && <Separator className="mx-6" />}
                </React.Fragment>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const meta: Meta<typeof SharingHistoryPage> = {
  title: 'Value Brand Explore/Mobile/Sharing History Page',
  component: SharingHistoryPage,
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
type Story = StoryObj<typeof SharingHistoryPage>;

export const Default: Story = {};