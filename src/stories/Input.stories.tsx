import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'error'],
    },
    label: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '393px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    variant: 'error',
    error: 'Password must be at least 8 characters long',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
};

export const AccessibilityExample: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    'aria-required': 'true',
    'aria-describedby': 'username-description',
  },
  render: (args) => (
    <div>
      <Input {...args} />
      <p id="username-description" className="mt-1 text-sm text-gray-500">
        Your username must be 5-20 characters long.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The Input component incorporates several accessibility features:

- \`label\`: When provided, it's associated with the input using htmlFor and id attributes.
- \`aria-invalid\`: Set to true when the input has an error (variant is 'error').
- \`aria-describedby\`: Links the input to its error message when an error is present.
- Error messages have a \`role="alert"\` to ensure they're announced by screen readers.
- The input uses semantic HTML elements and attributes for native accessibility support.

Additional ARIA attributes can be passed as props for specific use cases, as demonstrated in this example with \`aria-required\` and \`aria-describedby\`.

Usage example:

\`\`\`jsx
import { Input } from './input'

export function AccessibleForm() {
  return (
    <form style={{ width: '393px' }}>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        aria-required="true"
        aria-describedby="email-description"
      />
      <p id="email-description" className="mt-1 text-sm text-gray-500">
        We'll never share your email with anyone else.
      </p>
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
        variant="error"
        error="Password must be at least 8 characters long"
      />
      <button type="submit">Submit</button>
    </form>
  )
}
\`\`\`

This example demonstrates how to create an accessible form using the Input component with proper labels, descriptions, and error handling. The form is set to a width of 393px to match the story examples.
        `,
      },
    },
  },
};