import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@/components/ui/progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The current progress value (0-100)",
    },
    withText: {
      control: "boolean",
      description: "Whether to display the progress value as text",
    },
    label: {
      control: "text",
      description: "Label for the progress bar",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A progress component to display the completion status of a task or process.",
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
    withText: false,
    label: "Progress",
  },
  parameters: {
    docs: {
      description: {
        story: "Default progress bar without text.",
      },
    },
  },
};

export const WithText: Story = {
  args: {
    value: 75,
    withText: true,
    label: "Download Progress",
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bar with text displaying the current value.",
      },
    },
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    withText: true,
    label: "Task Progress",
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bar at 0% completion.",
      },
    },
  },
};

export const Full: Story = {
  args: {
    value: 100,
    withText: true,
    label: "Upload Complete",
  },
  parameters: {
    docs: {
      description: {
        story: "Progress bar at 100% completion.",
      },
    },
  },
};

export const Accessibility: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress
        value={60}
        withText={true}
        label="File Upload"
        aria-label="File upload progress"
      />
      <Progress
        value={30}
        withText={false}
        label="Background Task"
        aria-label="Background task progress"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
The Progress component incorporates several ARIA attributes to enhance accessibility:

- \`aria-valuemin\`: Set to 0, indicating the minimum value of the progress bar.
- \`aria-valuemax\`: Set to 100, indicating the maximum value of the progress bar.
- \`aria-valuenow\`: Dynamically set to the current progress value.
- \`aria-valuetext\`: Provides a text alternative for the current value, e.g., "60%".
- \`aria-label\` or \`aria-labelledby\`: Associates a label with the progress bar for screen readers.

When \`withText\` is true:
- The label and value are visually displayed.
- \`aria-labelledby\` is used to associate the visible label and value with the progress bar.
- The value span has \`aria-live="polite"\` to announce changes to screen readers.

When \`withText\` is false:
- \`aria-label\` is used to provide a non-visual label for the progress bar.

Example usage:

\`\`\`jsx
<Progress
  value={60}
  withText={true}
  label="File Upload"
  aria-label="File upload progress"
/>

<Progress
  value={30}
  withText={false}
  label="Background Task"
  aria-label="Background task progress"
/>
\`\`\`

        `,
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Progress value={11} className="h-px" />
      <Progress value={22} className="h-0.5" />
      <Progress value={33} className="h-1" />
      <Progress value={44} className="h-1.5" />
      <Progress value={55} className="h-2" />
      <Progress value={66} className="h-2.5" />
      <Progress value={77} className="h-3" />
      <Progress value={88} className="h-3.5" />
      <Progress value={99} className="h-4" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `

Sizes range from 1px (\`h-px\`) to 16px (\`h-4\`), providing a wide range of options for different use cases.

Example usage:

\`\`\`jsx
<Progress value={33} className="h-1" aria-label="Small progress bar" />
<Progress value={66} className="h-2.5" aria-label="Medium-large progress bar" />
\`\`\`

        `,
      },
    },
  },
};
