import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      defaultValue: 'lg',
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarDefault: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://mynaui.com/avatars/avatar-10.jpg" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarFallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarSizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar size="xs">
        <AvatarImage src="https://mynaui.com/avatars/avatar-10.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage src="https://mynaui.com/avatars/avatar-10.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://mynaui.com/avatars/avatar-10.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://mynaui.com/avatars/avatar-10.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage src="https://mynaui.com/avatars/avatar-10.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="2xl">
        <AvatarImage src="https://mynaui.com/avatars/avatar-10.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="3xl">
        <AvatarImage src="https://mynaui.com/avatars/avatar-10.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const AvatarWithSizeControl: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => (
    <Avatar size={args.size}>
      <AvatarImage src="https://mynaui.com/avatars/avatar-10.jpg" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-3 *:ring *:ring-background">
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=47" alt="Avatar 1" />
        <AvatarFallback>A1</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=32" alt="Avatar 2" />
        <AvatarFallback>A2</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=38" alt="Avatar 3" />
        <AvatarFallback>A3</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const AvatarCustomSizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar className="size-6">
        <AvatarFallback className="text-xs font-bold">PJ</AvatarFallback>
      </Avatar>
      <Avatar className="size-8">
        <AvatarFallback className="text-sm font-bold">PJ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="text-sm font-bold">PJ</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback className="text-sm font-bold">PJ</AvatarFallback>
      </Avatar>
      <Avatar className="size-14">
        <AvatarFallback className="text-base font-bold">PJ</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarFallback className="text-lg font-bold">PJ</AvatarFallback>
      </Avatar>
    </div>
  ),
};