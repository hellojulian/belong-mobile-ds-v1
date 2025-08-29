import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { MessageSmileCircle } from '@untitled-ui/icons-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'disabled', 'quicklink', 'textlink', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'lg', 'icon'],
    },
    asChild: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'disabled',
    disabled: true,
  },
};

export const Quicklink: Story = {
  args: {
    children: 'Quicklink Button',
    variant: 'quicklink',
  },
};

export const Textlink: Story = {
  args: {
    children: 'Textlink Button',
    variant: 'textlink',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
    variant: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    variant: 'primary',
    loading: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="disabled" disabled>Disabled</Button>
      <Button variant="quicklink">Quicklink</Button>
      <Button variant="textlink">Textlink</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm" variant="primary">Small</Button>
      <Button size="lg" variant="primary">Large</Button>
      <Button size="icon" variant="primary" aria-label="Notification"><MessageSmileCircle></MessageSmileCircle></Button>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 mr-2"
          aria-hidden="true"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
        Button with Icon
      </>
    ),
    variant: 'primary',
  },
};

export const LoadingStates: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary" loading>Loading Primary</Button>
      <Button variant="secondary" loading>Loading Secondary</Button>
      <Button variant="quicklink" loading>Loading Quicklink</Button>
      <Button variant="textlink" loading>Loading Textlink</Button>
      <Button size="sm" variant="primary" loading>Loading Small</Button>
      <Button size="lg" variant="primary" loading>Loading Large</Button>
    </div>
  ),
};

export const Accessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <Button variant="primary" aria-label="Submit form">Submit</Button>
      <Button variant="secondary" aria-pressed="false">Toggle Feature</Button>
      <Button variant="quicklink" aria-haspopup="true">Open Menu</Button>
      <Button variant="textlink" aria-expanded="false">Show More</Button>
      <Button variant="primary" disabled>
        Disabled Action
      </Button>
      <Button size="icon" variant="primary" aria-label="Close dialog">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </Button>
      <Button variant="primary" loading aria-label="Submitting form">
        Submit
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The Button component incorporates several accessibility features:

The \`aria-label\` attribute provides a text alternative for buttons with only icons or when the visible text doesn't fully describe the button's action.

For toggle buttons, \`aria-pressed\` is used to indicate their current state (pressed or not pressed).

The \`aria-haspopup\` attribute indicates that the button opens a menu or dialog.

Buttons that expand or collapse content use \`aria-expanded\` to indicate the current state.

The \`disabled\` attribute is applied to buttons that are not interactive, which also sets \`aria-disabled="true"\`.

Decorative icons use \`aria-hidden="true"\` to prevent screen readers from announcing them.

The \`loading\` prop adds a loading indicator and disables the button, providing visual feedback for asynchronous actions.

Example usage:

\`\`\`jsx
<Button variant="primary" aria-label="Submit form">Submit</Button>
<Button variant="secondary" aria-pressed="false">Toggle Feature</Button>
<Button variant="quicklink" aria-haspopup="true">Open Menu</Button>
<Button variant="textlink" aria-expanded="false">Show More</Button>
<Button variant="primary" disabled>Disabled Action</Button>
<Button size="icon" variant="primary" aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</Button>
<Button variant="primary" loading aria-label="Submitting form">Submit</Button>
\`\`\`

        `,
      },
    },
  },
};

