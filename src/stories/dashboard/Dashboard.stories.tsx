import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Dashboard from './Dashboard';
import { TooltipProvider } from "../../components/ui/tooltip";

const meta: Meta<typeof Dashboard> = {
  title: 'Value Brand Explore/Dashboard/Desktop Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

const DesktopContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-transparent">
    {children}
  </div>
);

export const DesktopWrapped: Story = {
  name: 'Desktop Dashboard',
  render: () => (
    <DesktopContainer>
      <Dashboard />
    </DesktopContainer>
  ),
  parameters: {
    docs: {
      disable: true,
    },
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
};

// If you need to mock any context or props, you can add them here
DesktopWrapped.parameters = {
  ...DesktopWrapped.parameters,
  // Add any necessary parameters or mocks
};

// If your Dashboard component requires props, you can add them like this:
// DesktopWrapped.args = {
//   exampleProp: 'value',
// };