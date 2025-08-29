import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ColorTokensDocumentation } from './ColorTokensDocumentation';

export default {
  title: 'Tokens/Color Tokens',
  component: ColorTokensDocumentation,
} as Meta;

const Template: Story = () => <ColorTokensDocumentation />;

export const Default = Template.bind({});