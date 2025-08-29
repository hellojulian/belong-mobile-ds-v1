import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DataTable } from '@/components/ui/datatable'

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DataTable>

export const Default: Story = {
  render: () => <DataTable />,
}

export const Accessibility: Story = {
  render: () => <DataTable />,
  parameters: {
    docs: {
      description: {
        story: `
The DataTable component incorporates several ARIA attributes and accessibility features to enhance usability for all users:

- \`aria-label\`: Applied to the main Table component to describe its purpose.
  Example: \`<Table aria-label="Payments data table">\`

- \`aria-label\` on interactive elements: Provides descriptive labels for buttons, inputs, and other interactive elements.
  Example: \`<Button aria-label="Previous page">Previous</Button>\`

- \`aria-hidden="true"\`: Applied to decorative icons to prevent them from being announced by screen readers.
  Example: \`<ArrowUpDown className="w-4 h-4 ml-2" aria-hidden="true" />\`

- Improved checkbox labels: More descriptive \`aria-label\` attributes for "Select all" and individual row selection checkboxes.
  Example: \`<Checkbox aria-label={\`Select row \${row.index + 1}\`} />\`

- \`aria-live="polite"\`: Applied to the row selection status text to announce changes to screen readers.
  Example: \`<div aria-live="polite">{table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.</div>\`

- Improved sorting button accessibility: More descriptive \`aria-label\` that includes the current sort direction.
  Example: \`<Button aria-label={\`Sort by Email \${column.getIsSorted() === "asc" ? "descending" : "ascending"}\`}>Email</Button>\`

Usage example:

\`\`\`jsx
import { DataTable } from '@/components/ui/data-table'

export function MyComponent() {
  return (
    <div className="w-full">
      <DataTable />
    </div>
  )
}
\`\`\`

This example demonstrates how to use the DataTable component with its built-in accessibility features.
        `,
      },
    },
  },
}