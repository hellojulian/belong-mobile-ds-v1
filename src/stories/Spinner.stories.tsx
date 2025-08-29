import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SpokeSpinner, RoundSpinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';

const meta: Meta<typeof SpokeSpinner> = {
  title: 'Components/Spinner',
  component: SpokeSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['slate', 'blue', 'red', 'green', 'white'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpokeSpinner>;

export const SpokeSpinnerStory: Story = {
  args: {
    size: 'md',
    color: 'slate',
  },
};

export const RoundSpinnerStory: Story = {
  args: {
    size: 'xl',
    color: 'blue',
  },
  render: (args) => <RoundSpinner {...args} />,
};

export const SpinnerSizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <SpokeSpinner size="xs" />
      <SpokeSpinner size="sm" />
      <SpokeSpinner size="md" />
      <SpokeSpinner size="lg" />
      <SpokeSpinner size="xl" />
    </div>
  ),
};


export const RoundSpinnerSizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <RoundSpinner color="blue" size="xs" />
      <RoundSpinner color="blue" size="sm" />
      <RoundSpinner color="blue" size="md" />
      <RoundSpinner color="blue" size="lg" />
      <RoundSpinner color="blue" size="xl" />
    </div>
  ),
};

export const RoundSpinnerColors: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <RoundSpinner size="xl"  color="slate" />
      <RoundSpinner size="xl" color="blue" />
      <RoundSpinner size="xl" color="red" />
      <RoundSpinner size="xl" color="green" />
    </div>
  ),
};
export const SpinnerInButton: Story = {
    render: () => (
      <div className="space-y-4">
        <Button variant="primary" className="flex items-center space-x-2">
          <SpokeSpinner size="sm" color="slate" />
          <span>Loading...</span>
        </Button>
        <Button variant="primary" className="flex items-center space-x-2">
          <RoundSpinner size="sm" color="slate" />
          <span>Processing...</span>
        </Button>
      </div>
    ),
  };

export const Accessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <SpokeSpinner />
      <RoundSpinner />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The Spinner component incorporates the following accessibility features:

1. It uses the \`aria-label="Loading..."\` attribute to provide a text alternative for screen readers.
2. It has a \`role="status"\` to indicate that it's a status message.

These features ensure that users of assistive technologies are aware of the loading state.

Usage example:

\`\`\`jsx
import { SpokeSpinner, RoundSpinner } from './spinner';

export function LoadingState() {
  return (
    <div>
      <h2>Loading data...</h2>
      <SpokeSpinner size="lg" color="blue" />
    </div>
  );
}

export function ProcessingState() {
  return (
    <div>
      <h2>Processing request...</h2>
      <RoundSpinner size="lg" color="green" />
    </div>
  );
}
\`\`\`
        `,
      },
    },
  },
};