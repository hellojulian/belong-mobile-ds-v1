import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/badge';
import { X } from '@untitled-ui/icons-react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'outline', 'success', 'warning', 'info', 'accenta', 'accentb', 'accentc', 'secondary', 'destructive'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="accenta">Accent A</Badge>
      <Badge variant="accentb">Accent B</Badge>
      <Badge variant="accentc">Accent C</Badge>
    </div>
  ),
};

export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'default',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'info',
  },
};

export const AccentA: Story = {
  args: {
    children: 'Accent A',
    variant: 'accenta',
  },
};

export const AccentB: Story = {
  args: {
    children: 'Accent B',
    variant: 'accentb',
  },
};

export const AccentC: Story = {
  args: {
    children: 'Accent C',
    variant: 'accentc',
  },
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
          className="w-4 h-4 mr-1"
          aria-hidden="true"
        >
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
        Badge with Icon
      </>
    ),
    variant: 'default',
  },
};



export const WithDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>
        <span className="-ml-0.5 mr-1 size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true"></span>
        Badge
      </Badge>
      <Badge variant="secondary">
        <span className="-ml-0.5 mr-1 size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true"></span>
        Secondary
      </Badge>
      <Badge variant="outline">
        <span className="-ml-0.5 mr-1 size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true"></span>
        Outline
      </Badge>
      <Badge variant="destructive">
        <span className="-ml-0.5 mr-1 size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true"></span>
        Destructive
      </Badge>
    </div>
  ),
};

export const WithClose: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>
        Badge
        <button className="group -mr-0.5 ml-1 shrink-0 rounded-full" aria-label="Remove">
          <X className="stroke-current size-4" aria-hidden="true" />
        </button>
      </Badge>
      <Badge variant="secondary">
        Secondary
        <button className="group -mr-0.5 ml-1 shrink-0 rounded-full" aria-label="Remove">
          <X className="stroke-current size-4" aria-hidden="true" />
        </button>
      </Badge>
      <Badge variant="outline">
        Outline
        <button className="group -mr-0.5 ml-1 shrink-0 rounded-full" aria-label="Remove">
          <X className="stroke-current size-4" aria-hidden="true" />
        </button>
      </Badge>
      <Badge variant="destructive">
        Destructive
        <button className="group -mr-0.5 ml-1 shrink-0 rounded-full" aria-label="Remove">
          <X className="stroke-current size-4" aria-hidden="true" />
        </button>
      </Badge>
    </div>
  ),
};

// Accessibility Story
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" aria-label="Task completed">Success</Badge>
      <Badge variant="warning" aria-label="3 warnings">
        <span className="-ml-0.5 mr-1 size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true"></span>
        3
      </Badge>
      <Badge variant="info">
        Info
        <button className="group -mr-0.5 ml-1 shrink-0 rounded-full" aria-label="Dismiss information">
          <X className="stroke-current size-3" aria-hidden="true" />
        </button>
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The Badge component incorporates several ARIA attributes and best practices to enhance accessibility:

- \`role="status"\`: Indicates that the badge contains advisory information for the user.

- \`aria-label\`: Provides a descriptive label for badges when the content might not be self-explanatory.

- \`aria-hidden="true"\`: Applied to decorative elements (like dots or icons) to prevent screen readers from announcing them.

- Semantic structure: The badge content is structured to provide clear and meaningful information to all users.

- Interactive elements: Close buttons within badges have clear \`aria-label\` attributes to describe their action.

Example usage:

\`\`\`jsx
<Badge variant="success" aria-label="Task completed">Success</Badge>

<Badge variant="warning" aria-label="3 warnings">
  <span className="-ml-0.5 mr-1 size-1.5 shrink-0 rounded-full bg-current" aria-hidden="true"></span>
  3
</Badge>

<Badge variant="info">
  Info
  <button className="group -mr-0.5 ml-1 shrink-0 rounded-full" aria-label="Dismiss information">
    <X className="stroke-current size-3" aria-hidden="true" />
  </button>
</Badge>
\`\`\`

        `,
      },
    },
  },
};