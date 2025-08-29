import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, MessageSmileSquare } from "@untitled-ui/icons-react";
import { Popover, PopoverTrigger, PopoverAnchor, PopoverContent } from "@/components/ui/popover";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
};

export const SettingsTabs: Story = {
  name: "Settings Tabs",
  render: () => (
    <div className="w-full max-w-[500px]">
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="preferences">
            <TabsList className="mb-4">
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="integrations">Your Contacts</TabsTrigger>
              <TabsTrigger value="usage">Usage Data</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="preferences">
              <h2 className="font-bold">Preferences</h2>
              <p className="text-sys-divider-default">
                Customize your settings to fit your needs.
              </p>
              <div className="grid gap-4 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-sys-divider-default">
                      Toggle between light and dark mode.
                    </p>
                  </div>
                  <Switch id="dark-mode" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Dashboard Notifications</h3>
                    <p className="text-sys-divider-default">
                      Receive dashboard updates and alerts.
                    </p>
                  </div>
                  <Switch id="dashboard-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">SMS Notifications</h3>
                    <p className="text-sys-divider-default">
                      Receive SMS updates and alerts.
                    </p>
                  </div>
                  <Switch id="sms-notifications" />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="usage">
              <h2 className="font-bold">Usage information</h2>
              <p className="text-sys-divider-default">
                Track and analyze your data.
              </p>
              <div className="grid gap-4 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Dashboard Data Visualisation</h3>
                    <p className="text-sys-divider-default">
                      Show your usage statistics on your dashboard.
                    </p>
                  </div>
                  <Switch id="dashboard-notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Activity Log</h3>
                    <p className="text-sys-divider-default">
                      Review your activity history.
                    </p>
                  </div>
                  <Button size="sm" variant="secondary">
                    View Log
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="support">
              <h2 className="font-bold">Support</h2>
              <p className="text-sys-divider-default">
                Get help and resources.
              </p>
              <div className="grid gap-4 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Documentation</h3>
                    <p className="text-sys-divider-default">
                      Read our popular topis and guides.
                    </p>
                  </div>
                  <Button size="sm" variant="secondary">
                    View Help Topics
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Contact Support</h3>
                    <p className="text-sys-divider-default">
                      Submit a support request.
                    </p>
                  </div>
                  <Button size="sm" variant="secondary">
                  <MessageSmileSquare
                        className="w-5 h-5 mr-2 text-sys-on-surface"
                      />
                    Chat to us now
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="integrations">
              {/* <h2 className="font-bold">Integrations</h2> */}
              <div className="flex items-center justify-between">
              <p className="text-sys-on-surface">
                Add a contact.
              </p><Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Plus className="size-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-5 w-80">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium font-proxima">Add a contact</h3>
            <p className="text-sm text-sys-divider-default">
              Add a contact to share data with.
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="nickname">Name</Label>
              <Input id="nickname" placeholder="Enter name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone">Phone number</Label>
              <Input id="phone" placeholder="Enter contact number" />
            </div>
            <Button variant="primary" type="submit" size="lg">
              Add to contact list
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
                  </div>
              <div className="grid gap-4 mt-4">
                <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
              <Avatar size="lg" className="flex-shrink-0">
                <AvatarImage
                  src="https://i.pinimg.com/564x/80/4e/f1/804ef1682390865b11f9d3df22293f7c.jpg"
                  alt="Family iPad"
                />
                <AvatarFallback>FI</AvatarFallback>
              </Avatar>
              <div className="flex-grow min-w-0">
                <h3 className="pb-1 text-sm font-bold leading-none">
                  Family iPad
                </h3>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  300GB remaining
                </p>
              </div>
              <Badge variant="secondary" className="invisible">
                Data low
              </Badge>
            </div>
                  <Button size="sm" variant="secondary">
                    Remove
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
              <Avatar size="lg" className="flex-shrink-0">
                <AvatarImage
                  src="https://i.pinimg.com/474x/2b/64/85/2b6485e915fd46fd8022d1fc34512aaa.jpg"
                  alt="Jules"
                />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="flex-grow min-w-0">
                <h3 className="pb-1 text-sm font-bold leading-none">
                 Jules
                </h3>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  3B remaining
                </p>
              </div>
              <Badge variant="warning">
                Data low
              </Badge>
            </div>
                  <Button size="sm" variant="secondary">
                    Remove
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
              <Avatar size="lg" className="flex-shrink-0">
                <AvatarImage
                  src="https://i.pinimg.com/564x/db/5d/ac/db5dac24913fd008681b2262d7127ad3.jpg"
                  alt="Sarah"
                />
                <AvatarFallback>SH</AvatarFallback>
              </Avatar>
              <div className="flex-grow min-w-0">
                <h3 className="pb-1 text-sm font-bold leading-none">
                  Sarah
                </h3>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  20GB remaining
                </p>
              </div>
              <Badge variant="secondary" className="invisible">
                Data low
              </Badge>
            </div>
                  <Button size="sm" variant="secondary">
                    Remove
                  </Button>
                </div>
                
                <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
              <Avatar size="lg" className="flex-shrink-0">
                <AvatarImage
                  src="https://i.pinimg.com/474x/91/73/4c/91734c0b0e7641ed32b73ad50867e8f5.jpg"
                  alt="Jack"
                />
                <AvatarFallback>JH</AvatarFallback>
              </Avatar>
              <div className="flex-grow min-w-0">
                <h3 className="pb-1 text-sm font-bold leading-none">
                  Jack
                </h3>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  100GB remaining
                </p>
              </div>
              <Badge variant="secondary" className="invisible">
                Data low
              </Badge>
            </div>
                  <Button size="sm" variant="secondary">
                    Remove
                  </Button>
                </div>

              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  ),
};


export const AccessibilityInfo: Story = {
  name: "Accessibility",
  parameters: {
    docs: {
      description: {
        story: `
The Tabs component has been updated with the following ARIA attributes to improve accessibility:

- \`role="tablist"\` on the TabsList component: Identifies the element as a container for a set of tabs.
- \`aria-orientation="horizontal"\` on the TabsList component: Indicates that the tabs are arranged horizontally.
- \`role="tab"\` on each TabsTrigger component: Identifies each element as a tab.
- \`role="tabpanel"\` on each TabsContent component: Identifies each element as a tab panel.
- \`tabIndex={0}\` on each TabsContent component: Ensures that the tab panel is focusable.

These attributes ensure that the tabs are properly identified and can be navigated using assistive technologies.

### Usage Example

\`\`\`tsx
import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function AccessibleTabsDemo() {
  return (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <h3>Account Settings</h3>
        <p>Configure your account preferences here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <h3>Password Settings</h3>
        <p>Change your password or set up two-factor authentication.</p>
      </TabsContent>
    </Tabs>
  )
}
\`\`\`

In this example, we've created an accessible tab interface for account settings. The Tabs component, with its added ARIA attributes, ensures that the tab structure is properly conveyed to assistive technologies, improving the overall accessibility of the application.
        `,
      },
    },
  },
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <p>Configure your account preferences here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <h3 className="text-lg font-semibold">Password Settings</h3>
        <p>Change your password or set up two-factor authentication.</p>
      </TabsContent>
    </Tabs>
  ),
};
