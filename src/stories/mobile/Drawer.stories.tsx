import React, { useState } from 'react'
import { ChevronLeft, Info, Share, Smartphone, BarChart2, Clock, ChevronRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Separator } from "../../components/ui/separator"
import { ScrollArea } from "../../components/ui/scroll-area"
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import type { Meta, StoryObj } from '@storybook/react'

const actions = [
  { icon: Share, label: "Share data" },
  { icon: Smartphone, label: "Top up data" },
  { icon: BarChart2, label: "View data usage" },
  { icon: Clock, label: "View sharing history" },
]

const JacksMobilePageWithDrawer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 100) {
      setIsDrawerOpen(false)
    }
  }

  return (
    <div className="w-[393px] h-[852px] mx-auto bg-background text-foreground overflow-hidden rounded-[60px] border-[14px] border-zinc-900 shadow-xl relative">
      <ScrollArea className="h-full">
        <div className="flex flex-col min-h-full">
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

          {/* Data Saving Tips Drawer Trigger */}
          <Button 
            variant="secondary" 
            className="mx-4 mt-4 mb-4"
            onClick={() => setIsDrawerOpen(true)}
          >
            Open Data Saving Tips
          </Button>
        </div>
      </ScrollArea>

      {/* Data Saving Tips Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 rounded-t-[32px] shadow-lg"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-4" />
              <div className="mb-6">
                <h2 className="px-6 mb-2 text-2xl font-semibold tracking-tight text-center font-proxima">Data saving tips</h2>
                <Separator className="mb-4" />
                <div className="px-6">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRelrli6MZs0itvJQ_vCHHJYMZiKnRgIZfFVg&s" alt="SIM" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="mb-6 font-semibold text-center text-md">
                    You could save up to 200GB per month based on your family's usage.
                  </h3>
                  <Button className="w-full mb-2" variant="primary">View savings guide</Button>
                  <Button variant="secondary" className="w-full" onClick={() => setIsDrawerOpen(false)}>Maybe later</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const meta: Meta<typeof JacksMobilePageWithDrawer> = {
  title: 'Value Brand Explore/Mobile/Jacks Mobile Page with Drawer',
  component: JacksMobilePageWithDrawer,
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
type Story = StoryObj<typeof JacksMobilePageWithDrawer>;

export const Default: Story = {};