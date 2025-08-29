import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '@/components/ui/combobox';
import { ChevronUpDown, Mobile, Tablet, Tv } from "@mynaui/icons-react";


const meta: Meta<typeof Combobox> = {
  title: 'Components/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    emptyMessage: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  args: {},
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Select topic',
  },
};

export const CustomEmptyMessage: Story = {
  args: {
    emptyMessage: 'No matching topics found',
  },
};


export const Accessibility: Story = {
  render: () => (
    <div className="space-y-2">
      <Combobox 
        placeholder="Select topic" 
        emptyMessage="No topics available"
        aria-label="Topic selection"
      />
      <p id="combobox-description" className="text-sm text-gray-500">
        Select from popular support topics.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The Combobox component incorporates several accessibility features:

The trigger button has a \`role="combobox"\` and \`aria-expanded\` attribute to indicate when the dropdown is open.
- An \`aria-label\` is provided on the trigger button to describe its purpose and current selection.
- The CaretSortIcon is marked with \`aria-hidden="true"\` to prevent it from being announced by screen readers.
- The CheckIcon for selected items is also marked with \`aria-hidden="true"\`.
- The component uses the Command component from shadcn/ui, which provides additional accessibility features for keyboard navigation and screen reader support.

Example usage with additional description:

\`\`\`jsx
<div>
  <Combobox 
    placeholder="Select a Topic" 
    emptyMessage="No topics available"
    aria-label="Topic selection"
    aria-describedby="combobox-description"
  />
  <p id="combobox-description" className="text-sm text-gray-500">
    Choose your preferred web development Topic from the list.
  </p>
</div>
\`\`\`

This example shows how to provide an additional description for the Combobox using \`aria-describedby\`, which can be helpful for users of assistive technologies.
        `,
      },
    },
  },
};

export const UsageExample: Story = {
  render: () => (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Select Your Topic</h2>
      <Combobox 
        placeholder="Select topic"
        emptyMessage="No topics match your search"
        className="w-[250px]"
      />
      <p className="text-sm text-gray-600">
        Your selected Topic will be used to initialize your new project.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
This example demonstrates how to use the Combobox component in a typical form scenario:

\`\`\`jsx
import { Combobox } from './combobox';

function topicselector() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Select Your Topic</h2>
      <Combobox 
        placeholder="Select topic"
        emptyMessage="No topics match your search"
        className="w-[250px]"
      />
      <p className="text-sm text-gray-600">
        Your selected Topic will be used to initialize your new project.
      </p>
    </div>
  );
}
\`\`\`

        `,
      },
    },
  },
};