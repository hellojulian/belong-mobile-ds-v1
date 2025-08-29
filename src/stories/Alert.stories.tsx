import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { AlertOctagon, InfoCircle, CheckCircle, AlertTriangle, AlertSquare } from "@untitled-ui/icons-react";
import { Button } from "../components/ui/button";

const meta = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "radio",
      options: ["error", "info", "warning", "success"],
    },
    description: {
      control: "text",
    },
    showDescription: {
      control: "boolean",
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// New Combined Variants Story
export const CombinedVariants: Story = {
  render: () => {
    const variants = ["error", "info", "warning", "success"] as const;
    const icons = {
      error: <AlertOctagon className="w-5 h-5" aria-hidden="true" />,
      info: <InfoCircle className="w-5 h-5" aria-hidden="true" />,
      warning: <AlertTriangle className="w-5 h-5" aria-hidden="true" />,
      success: <CheckCircle className="w-5 h-5" aria-hidden="true" />,
    };
    const titles = {
      error: "Error",
      info: "Information",
      warning: "Warning",
      success: "Success",
    };

    return (
      <div className="space-y-4">
        {variants.map((variant) => (
          <React.Fragment key={variant}>
            {/* Standard Alert */}
            <Alert 
              variant={variant} 
              aria-labelledby={`${variant}-title`}
              aria-describedby={`${variant}-description`}
            >
              {icons[variant]}
              <AlertTitle id={`${variant}-title`}>{titles[variant]}</AlertTitle>
              <AlertDescription id={`${variant}-description`}>This is a {variant} alert with a description.</AlertDescription>
            </Alert>

            {/* Description-only Alert */}
            <Alert 
              variant={variant} 
              aria-describedby={`${variant}-description-only`}
            >
              {icons[variant]}
              <AlertDescription id={`${variant}-description-only`}>This is a description-only {variant} alert.</AlertDescription>
            </Alert>
          </React.Fragment>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
Accessibility features:
- \`aria-labelledby\` associates the AlertTitle with the Alert component.
- \`aria-describedby\` associates the AlertDescription with the Alert component.
- Icons are marked as \`aria-hidden="true"\` to prevent screen readers from announcing them.
- Alerts are focusable with \`tabIndex={0}\` for keyboard navigation.
        `,
      },
    },
  },
};

// Base Alert Story
const BaseAlert: Story = {
  render: ({ variant, description, showDescription }) => {
    const icons = {
      error: <AlertOctagon className="w-5 h-5" aria-hidden="true" />,
      info: <InfoCircle className="w-5 h-5" aria-hidden="true" />,
      warning: <AlertTriangle className="w-5 h-5" aria-hidden="true" />,
      success: <CheckCircle className="w-5 h-5" aria-hidden="true" />,
    };

    const titles = {
      error: "Error",
      info: "Information",
      warning: "Warning",
      success: "Success",
    };

    return (
      <Alert 
        variant={variant} 
        aria-labelledby="alert-title"
        aria-describedby={showDescription ? "alert-description" : undefined}
      >
        {icons[variant]}
        <AlertTitle id="alert-title">{titles[variant]}</AlertTitle>
        {showDescription && <AlertDescription id="alert-description">{description}</AlertDescription>}
      </Alert>
    );
  },
  args: {
    variant: "info",
    description: "This is an info alert. Click to find out more.",
    showDescription: true,
  },
};

export const Error = { ...BaseAlert, args: { ...BaseAlert.args, variant: "error", description: "Your session has expired. Please log in again." } };
export const Information = { ...BaseAlert, args: { ...BaseAlert.args, variant: "info" } };
export const Warning = { ...BaseAlert, args: { ...BaseAlert.args, variant: "warning", description: "This is a warning alert. Please be cautious." } };
export const Success = { ...BaseAlert, args: { ...BaseAlert.args, variant: "success", description: "This is a success alert. Everything went well!" } };

// Description Only Alert Story
export const DescriptionOnly: Story = {
  render: ({ variant, description }) => (
    <Alert variant={variant} aria-describedby="description-only">
      <AlertDescription id="description-only">{description}</AlertDescription>
    </Alert>
  ),
  args: {
    variant: "info",
    description: "This is a description-only alert.",
  },
};

// Alert with Action Story
export const AlertWithAction: Story = {
  render: ({ variant, showDescription }) => {
    const icons = {
      error: <AlertSquare className="w-5 h-5" aria-hidden="true" />,
      info: <InfoCircle className="w-5 h-5" aria-hidden="true" />,
      warning: <AlertTriangle className="w-5 h-5" aria-hidden="true" />,
      success: <CheckCircle className="w-5 h-5" aria-hidden="true" />,
    };

    const titles = {
      error: "Error",
      info: "Information",
      warning: "Warning",
      success: "Success",
    };

    return (
      <Alert 
        variant={variant} 
        aria-labelledby="action-title"
        aria-describedby={showDescription ? "action-description" : undefined}
      >
        {icons[variant]}
        <AlertTitle id="action-title">{titles[variant]}</AlertTitle>
        {showDescription && (
          <AlertDescription id="action-description">
            For more detailed information{" "}
            <Button variant="link" className="h-auto p-0 font-normal underline">
              click here
            </Button>
          </AlertDescription>
        )}
      </Alert>
    );
  },
  args: {
    variant: "info",
    showDescription: true,
  },
};

// Accessibility Story
export const Accessibility: Story = {
  ...BaseAlert,
  args: { ...BaseAlert.args, variant: "error" },
  parameters: {
    docs: {
      description: {
        story: `
The Alert component incorporates several ARIA attributes and accessibility features to enhance usability for all users:

1. Dynamic Roles:
   - \`role="alert"\` for Error and Warning alerts (more urgent).
   - \`role="status"\` for Information and Success alerts (less urgent).

2. Live Regions:
   - \`aria-live="assertive"\` for Error and Warning alerts (announced immediately).
   - \`aria-live="polite"\` for Information and Success alerts (announced when the user is idle).

3. Labelling and Descriptions:
   - \`aria-labelledby\`: Associates the AlertTitle with the Alert component.
   - \`aria-describedby\`: Associates the AlertDescription with the Alert component.

4. Icon Handling:
   - \`aria-hidden="true"\`: Applied to decorative icons to prevent screen readers from announcing them.

5. Keyboard Interaction:
   - \`tabIndex={0}\`: Makes the alert focusable for keyboard navigation.

6. Semantic Structure:
   - \`AlertTitle\` uses an \`<h5>\` tag for proper heading hierarchy.
   - \`AlertDescription\` provides additional context.

7. Color Contrast:
   - Ensure that text and background colors meet WCAG 2.1 Level AA contrast ratios.

8. Action Links:
   - Use \`<Button variant="link">\` for action links to ensure proper keyboard interaction and focus styles.

Example usage:

\`\`\`jsx
<Alert 
  variant="error" 
  aria-labelledby="error-title"
  aria-describedby="error-description"
>
  <AlertOctagon className="w-5 h-5" aria-hidden="true" />
  <AlertTitle id="error-title">Error</AlertTitle>
  <AlertDescription id="error-description">
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
\`\`\`

Remember to test the component with various assistive technologies and ensure it works well across different devices and screen sizes.
        `,
      },
    },
  },
};