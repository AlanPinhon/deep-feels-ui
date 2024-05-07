import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../components/Icon';
import { IconProps } from '../assets/Icons/IconTypes';

const meta:Meta <typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const XSmall: Story = {
  args: {
    name: 'HomeIcon',
    size: 'xs'
  }
}

export const Small: Story = {
  args: {
    name: 'CompassIcon',
    size: 'sm'
  }
}

export const Medium: Story = {
  args: {
    name: 'SettingsIcon',
    size: 'md'
  }
}

export const Large: Story = {
  args: {
    name: 'SearchIcon',
    size: 'lg'
  }
}

export const XLarge: Story = {
  args: {
    name: 'HeartIcon',
    size: 'xl'
  }
}