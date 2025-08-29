import React from 'react'
import { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Slider } from '@/components/ui/slider'
import { DualRangeSlider } from '@/components/ui/dual-range-slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: 'array' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    orientation: { control: 'radio', options: ['horizontal'] },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Slider {...args} />
    </div>
  ),
}

export const WithLabels: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 1,
  },
  render: (args) => (
    <div className="w-[300px]">
      <label htmlFor="slider-with-labels" className="text-sm font-medium">
        Volume
      </label>
      <Slider
        {...args}
        id="slider-with-labels"
        aria-label="Volume"
      />
      <div className="flex justify-between mt-1 text-xs text-gray-500 font-proxima-body">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  ),
}



const ControlledSliderWrapper: React.FC<{args: any}> = ({ args }) => {
  const [value, setValue] = React.useState(args.defaultValue)
  return (
    <div className="w-[300px]">
      <Slider
        {...args}
        value={value}
        onValueChange={setValue}
        aria-label="Controlled slider"
      />
      <p className="mt-2 text-sm font-proxima-regular">Current value: {value}</p>
    </div>
  )
}

export const ControlledSlider: StoryFn<typeof Slider> = (args) => <ControlledSliderWrapper args={args} />
ControlledSlider.args = {
  defaultValue: [50],
  min: 0,
  max: 100,
  step: 1,
}

// const DualRangeSliderWrapper: React.FC<{args: any}> = ({ args }) => {
//   const [values, setValues] = React.useState([25, 75])
  
//   return (
//     <div className="w-full px-10 space-y-5 font-proxima-regular">
//       <div>With Label</div>
//       <DualRangeSlider
//         label={(value) => `${value}`}
//         value={values}
//         onValueChange={setValues}
//         min={args.min}
//         max={args.max}
//         step={args.step}
//       />
//       <div>Without Label</div>
//       <DualRangeSlider 
//         value={values} 
//         onValueChange={setValues} 
//         min={args.min} 
//         max={args.max} 
//         step={args.step} 
//       />
//       <p className="mt-2 text-sm font-proxima-regular">Current values: {values[0]} - {values[1]}</p>
//     </div>
//   )
// }

// export const DualRange: StoryFn<typeof DualRangeSlider> = (args) => <DualRangeSliderWrapper args={args} />
// DualRange.args = {
//   min: 0,
//   max: 100,
//   step: 1,
// }

export const AccessibilityInfo: Story = {
  name: 'Accessibility',
  parameters: {
    docs: {
      description: {
        story: `

The Slider component includes the following accessibility features:

1. It uses the \`role="slider"\` attribute (provided by Radix UI) to indicate that it's a slider control.
2. It includes \`aria-valuemin\`, \`aria-valuemax\`, and \`aria-valuenow\` attributes (provided by Radix UI) to convey the slider's range and current value.
3. The thumb element has an \`aria-label\` to provide a description for screen readers.
4. It supports keyboard navigation:
   - Arrow keys to increase/decrease the value
   - Page Up/Page Down to increase/decrease by larger amounts
   - Home/End to set to min/max values

### Usage Example

Here's an example of how to use the Slider component with proper accessibility:

\`\`\`tsx
import React from 'react'
import { Slider } from './slider'

export function VolumeControl() {
  const [volume, setVolume] = React.useState([50])
  return (
    <div>
      <label htmlFor="volume-slider" className="text-sm font-medium">
        Volume
      </label>
      <Slider
        id="volume-slider"
        value={volume}
        onValueChange={setVolume}
        min={0}
        max={100}
        step={1}
        aria-label="Volume"
      />
      <p className="mt-2 text-sm">Current volume: {volume}%</p>
    </div>
  )
}
\`\`\`


        `,
      },
    },
  },
}