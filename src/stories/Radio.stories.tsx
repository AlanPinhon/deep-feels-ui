import { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioProps } from '../components/Radio';

const meta:Meta <typeof Radio> = {
  component: Radio,
};

export default meta;

type Story = StoryObj<RadioProps>;

export const Unchecked : Story = {
  args: {
    checked: false,
    style: {
      "margin" : "0 3rem"
    }    
  }
}

export const Checked : Story = {
  args: {
    checked: true,
      style: {
        "margin" : "0 3rem"
      }
  }
}