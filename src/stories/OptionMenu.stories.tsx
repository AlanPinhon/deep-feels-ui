import { Meta, StoryObj } from '@storybook/react';
import { OptionMenu, OptionMenuProps } from '../components/OptionMenu';

const meta:Meta <typeof OptionMenu> = {
  component: OptionMenu,
};

export default meta;

type Story = StoryObj<OptionMenuProps>;

export const Arrow : Story = {
  args: {
    type: 'arrow',
    icon: 'UserIcon',
    children: 'Option Arrow Menu'
  }
}

export const Check : Story = {
  args: {
    type: 'check',
    icon: 'LightIcon', 
    children: 'Option Check Menu',
    isChecked: true
  }
}