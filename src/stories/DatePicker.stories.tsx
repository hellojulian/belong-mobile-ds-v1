import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from '@/components/ui/date-picker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'radio',
      options: ['single', 'range'],
      defaultValue: 'range',
    },
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: (args) => <DatePicker {...args} />,
}

export const SingleDatePicker: Story = {
  render: () => <DatePicker mode="single" />,
}

export const DateRangePicker: Story = {
  render: () => <DatePicker mode="range" />,
}

export const Accessibility: Story = {
  render: () => (
    <div>
      <h3>Single Date Picker</h3>
      <DatePicker mode="single" />
      <h3 className="mt-4">Date Range Picker</h3>
      <DatePicker mode="range" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The DatePicker component incorporates several ARIA attributes and accessibility features to enhance usability for all users:

1. \`aria-label\`: Applied to the trigger button to announce the selected date or instruct to pick a date.
   Example: \`<Button aria-label={formatDate(date)}>\`

2. \`aria-hidden="true"\`: Applied to decorative icons to prevent them from being announced by screen readers.
   Example: \`<CalendarIcon className="w-4 h-4 mr-2" aria-hidden="true" />\`

3. Keyboard navigation: The DayPicker component from react-day-picker library handles keyboard navigation within the calendar.

4. Clear button: Allows users to easily reset their selection using either mouse or keyboard.

5. Responsive design: The component adapts to different screen sizes, ensuring usability across devices.

6. Color contrast: The component uses the system's color scheme, which should be designed with proper contrast ratios for readability.

7. Focus management: The component manages focus appropriately when opening and closing the date picker.

These accessibility features ensure that the DatePicker component is usable by people relying on various assistive technologies, providing better context, feedback, and navigation options for both single date and date range selection modes.
        `,
      },
    },
  },
}