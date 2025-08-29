import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent className="gap-0.5 rounded-lg border border-border p-1">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `

The Pagination component has been updated with the following ARIA attributes to improve accessibility:

Pagination:
Kept \`role="navigation"\` and \`aria-label="pagination"\` to indicate that it's a navigation component for pagination.

PaginationContent:
Added \`role="list"\` to indicate that it's a list of pagination items.

PaginationItem:
Added \`role="listitem"\` to indicate that it's an item in the pagination list.

PaginationLink:
Added \`role="button"\` to indicate that it's an interactive element.
Added \`tabIndex={0}\` to ensure it's focusable.
Kept \`aria-current="page"\` for the active page link.

PaginationPrevious and PaginationNext:
Kept \`aria-label\` to provide a descriptive label for screen readers.

PaginationEllipsis:
Added \`aria-hidden="true"\` to hide the ellipsis from screen readers.
Kept the "More pages" text with \`className="sr-only"\` for screen readers.

ChevronLeftIcon and ChevronRightIcon:
Added \`aria-hidden="true"\` to hide these decorative icons from screen readers.

### Usage Example


\`\`\`tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function AccessiblePagination() {
  return (
    <Pagination>
      <PaginationContent className="gap-0.5 rounded-lg border border-border p-1">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">8</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">9</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
\`\`\`

        `,
      },
    },
  },
}