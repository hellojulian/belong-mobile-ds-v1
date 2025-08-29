import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Checkbox',
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLongLabel: Story = {
  args: {
    label: 'This is a checkbox with a long label that wraps to multiple lines to demonstrate how it looks with longer text.',
  },
};

export const GroupExample: Story = {
  render: () => (
    <div className="space-y-2">
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" />
      <Checkbox label="Option 3" />
    </div>
  ),
};

export const Accessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Checkbox 
          label="Subscribe to newsletter" 
          aria-describedby="newsletter-description" 
        />
        <p id="newsletter-description" className="text-sm text-sys-form-default font-proxima-body">
          Receive updates about our products and services.
        </p>
      </div>
      <div>
        <Checkbox 
          label="Accept terms and conditions" 
          required 
          aria-describedby="terms-error" 
        />
        <p id="terms-error" className="text-sm text-sys-error font-proxima-body" aria-live="polite">
          You must accept the terms and conditions to proceed.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The Checkbox component incorporates several accessibility features:

- The checkbox is built using Radix UI's Checkbox primitive, which provides built-in accessibility features.
- The label is now part of the Checkbox component, ensuring proper association between the checkbox and its label.
- The checkbox uses aria-labelledby to associate the label text with the checkbox input.
- Unique IDs are generated for each checkbox to ensure proper labeling.
- The 'aria-describedby' attribute is used to associate additional descriptive text with the checkbox, providing more context for screen reader users.
- For required checkboxes, the 'required' attribute is used, and an error message can be associated using 'aria-describedby'.
- The 'aria-live' attribute is used on error messages to ensure they are announced by screen readers when they appear.

These accessibility features ensure that the Checkbox component is usable by people with various disabilities and those using assistive technologies.
        `,
      },
    },
  },
};