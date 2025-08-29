import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MultipleSelector from '@/components/ui/multiple-selector';

const meta: Meta<typeof MultipleSelector> = {
  title: 'Components/MultipleSelector',
  component: MultipleSelector,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    creatable: { control: 'boolean' },
    maxSelected: { control: 'number' },
    hidePlaceholderWhenSelected: { control: 'boolean' },
    hideClearAllButton: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '400px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MultipleSelector>;

const defaultOptions = [
  { value: 'NBN', label: 'NBN' },
  { value: 'eSIM', label: 'eSIM' },
  { value: 'Modems', label: 'Modems'},
  { value: 'SIM card', label: 'SIM card' },
  { value: 'Devices', label: 'Devices' },
];

export const Default: Story = {
  args: {
    placeholder: 'Select product...',
    defaultOptions: defaultOptions,
  },
};

export const WithMaxSelected: Story = {
  args: {
    ...Default.args,
    maxSelected: 3,
    onMaxSelected: (maxLimit) => alert(`You can only select up to ${maxLimit} items`),
  },
};

export const Creatable: Story = {
  args: {
    ...Default.args,
    creatable: true,
  },
};

export const Grouped: Story = {
  args: {
    ...Default.args,
    groupBy: 'category',
    defaultOptions: [
      { value: 'NBN', label: 'NBN', category: 'Fruits' },
      { value: 'eSIM', label: 'eSIM', category: 'Fruits' },
      { value: 'carrot', label: 'Carrot', category: 'Vegetables' },
      { value: 'broccoli', label: 'Broccoli', category: 'Vegetables' },
    ],
  },
};

export const WithSearch: Story = {
  args: {
    ...Default.args,
    onSearch: async (searchTerm) => {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 500));
      return defaultOptions.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    loadingIndicator: <div>Loading...</div>,
    emptyIndicator: <div>No results found</div>,
  },
};

export const Accessibility: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: `
The MultipleSelector component incorporates several accessibility features:

1. The main container has \`role="combobox"\` to indicate it's a combo box.
2. The \`aria-expanded\` attribute indicates whether the dropdown is open or closed.
3. The \`aria-haspopup="listbox"\` attribute indicates that the combobox has a popup listbox.
4. The \`aria-owns\` attribute associates the combobox with its popup listbox.
5. The input field has \`aria-autocomplete="list"\` to indicate it has autocomplete suggestions.
6. The \`aria-controls\` attribute on the input associates it with the listbox.
7. The listbox has \`role="listbox"\` and \`aria-multiselectable="true"\` to indicate it's a multi-select listbox.
8. Each option in the listbox has \`role="option"\` and \`aria-selected\` to indicate its selection state.
9. The "Clear all" button has an \`aria-label\` for screen readers.
10. The loading indicator has \`role="status"\` and \`aria-live="polite"\` for dynamic content updates.

These features ensure that the component is navigable and understandable for users of assistive technologies.

Usage example:

\`\`\`jsx
import MultipleSelector from './multiple-selector';

export function FruitSelector() {
  const [selectedFruits, setSelectedFruits] = React.useState([]);
  
  return (
    <MultipleSelector
      placeholder="Select fruits..."
      defaultOptions={[
        { value: 'NBN', label: 'NBN' },
        { value: 'eSIM', label: 'eSIM' },
        { value: 'Modems', label: 'Modems' },
      ]}
      value={selectedFruits}
      onChange={setSelectedFruits}
      maxSelected={3}
      onMaxSelected={(max) => alert(\`You can only select up to \${max} fruits\`)}
    />
  );
}
\`\`\`
        `,
      },
    },
  },
};