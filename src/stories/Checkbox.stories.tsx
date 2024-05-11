import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from '../components/Checkbox';

const meta:Meta <typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Checked : Story = {
  args: {
    children: 'Remind me',
    icon: 'CheckboxCheckIcon',
  }
}

export const Unchecked : Story = {
  args: {
    children: 'Remind me',
    icon: 'CheckboxUncheckedIcon',
  }
}