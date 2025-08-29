import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dashboard from './MobileDashboard';

const meta: Meta<typeof Dashboard> = {
  title: 'Value Brand Explore/Dashboard/Mobile Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

const MobileContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-center min-h-screen p-4 bg-transparent">
    <div className="w-[393px] h-[852px] bg-transparent text-foreground overflow-hidden rounded-[60px] border-[14px] border-zinc-900 shadow-xl relative">
      <div className="absolute w-1/3 transform -translate-x-1/2 top-4 left-1/2 h-7 bg-zinc-900 rounded-b-3xl" />
      <div className="h-full overflow-y-auto">
        {children}
      </div>
    </div>
  </div>
);

export const MobileWrapped: Story = {
  name: 'Mobile Dashboard',
  render: () => (
    <MobileContainer>
      <Dashboard />
    </MobileContainer>
  ),
};