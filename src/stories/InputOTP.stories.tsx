import type { Meta, StoryObj } from '@storybook/react'
import { InputOTP } from '@/components/ui/input-otp'

const meta: Meta<typeof InputOTP> = {
  title: 'Components/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  argTypes: {
    length: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of input fields',
    },
    variant: {
      control: 'radio',
      options: ['default', 'error'],
      description: 'The visual style of the input',
    },
    onChange: { action: 'OTP changed' },
  },
}

export default meta

type Story = StoryObj<typeof InputOTP>

export const Default: Story = {
  args: {
    length: 6,
    variant: 'default',
  },
}

export const Error: Story = {
  args: {
    length: 6,
    variant: 'error',
  },
}

export const CustomLength: Story = {
  args: {
    length: 4,
    variant: 'default',
  },
}

export const Disabled: Story = {
  args: {
    length: 6,
    variant: 'default',
    disabled: true,
  },
}

export const WithPlaceholder: Story = {
  args: {
    length: 6,
    variant: 'default',
    placeholder: '0',
  },
}

export const Interactive: Story = {
  render: (args) => {
    return (
      <div className="space-y-4">
        <InputOTP {...args} />
        <p>Enter the OTP above to see it change here.</p>
      </div>
    )
  },
  args: {
    length: 6,
    variant: 'default',
  },
}