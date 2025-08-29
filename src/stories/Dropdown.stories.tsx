import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  User01,
  CreditCard01,
  Settings02,
  Users01,
  UserPlus01,
  AnnotationQuestion,
  LogOut01,
  Mail01,
  Phone02,
} from "@untitled-ui/icons-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Open Dropdown</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User01 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard01 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings02 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users01 className="w-4 h-4 mr-2" aria-hidden="true" />
            <span>Friends</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus01 className="w-4 h-4 mr-2" aria-hidden="true" />
              <span>Add friends</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail01 className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span>By Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Phone02 className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span>By Phone</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <AnnotationQuestion className="w-4 h-4 mr-2" aria-hidden="true" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut01 className="w-4 h-4 mr-2" aria-hidden="true" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Default: Story = {
  render: () => <DropdownMenuDemo />,
};

export const AccessibleDropdownMenu: Story = {
  render: () => <DropdownMenuDemo />,
  parameters: {
    docs: {
      description: {
        story: `
The DropdownMenu component incorporates several ARIA attributes and accessibility features to enhance usability for all users:

1. \`aria-haspopup="menu"\`: Applied to the DropdownMenuTrigger to indicate that it opens a menu.
   Example: \`<DropdownMenuTrigger aria-haspopup="menu">\`

2. \`role="menuitem"\`: Added to DropdownMenuItem to explicitly define its role.
   Example: \`<DropdownMenuItem role="menuitem">\`

3. \`aria-hidden="true"\`: Added to decorative icons to hide them from screen readers.
   Example: \`<User className="w-4 h-4 mr-2" aria-hidden="true" />\`

4. Keyboard Navigation: The component supports full keyboard navigation, including:
   - Arrow keys to move between menu items
   - Enter or Space to select an item
   - Esc to close the menu
   - Tab to move focus to the next focusable element

5. Focus Management: When the menu is opened, focus is automatically moved to the first menu item.

6. Screen Reader Announcements: The component uses appropriate ARIA attributes to ensure screen readers announce the menu's state (open/closed) and the selected items.

Usage example:

\`\`\`jsx
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut } from "lucide-react"

export function AccessibleDropdownMenuExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="w-4 h-4 mr-2" aria-hidden="true" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="w-4 h-4 mr-2" aria-hidden="true" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="w-4 h-4 mr-2" aria-hidden="true" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
\`\`\`

These accessibility features ensure that the DropdownMenu component is usable by people relying on assistive technologies, providing better context, feedback, and navigation options.
        `,
      },
    },
  },
};
