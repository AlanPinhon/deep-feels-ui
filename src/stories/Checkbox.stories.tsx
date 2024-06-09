import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../components/Checkbox';

const meta:Meta <typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Unchecked: Story = {
  args: {
    checked: false,
    style: {
      "margin" : "0 2rem"
    }
  }
}

export const Checked: Story = {
  args: {
    checked: true,
    style: {
      "margin" : "0 2rem"
    }
  }
}