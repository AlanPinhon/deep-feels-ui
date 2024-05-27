import { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioProps } from '../components/Radio';

const meta:Meta <typeof Radio> = {
  component: Radio,
};

export default meta;

type Story = StoryObj<RadioProps>;

export const Unchecked : Story = {
  args: {
    checked: false
  }
}

export const Checked : Story = {
  args: {
    checked: true
  }
}