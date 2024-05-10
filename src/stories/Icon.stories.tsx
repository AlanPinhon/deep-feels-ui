import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../components/Icon';
import { IconProps } from '../assets/Icons/IconTypes';
import { colors } from '../theme/colors';

const meta:Meta <typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<IconProps>;

export const XSmall: Story = {
  args: {
    name: 'HomeIcon',
    size: 'xs',
    stroke: colors.purple[500]
  }
}

export const Small: Story = {
  args: {
    name: 'CompassIcon',
    size: 'sm',
    stroke: colors.purple[500]
  }
}

export const Medium: Story = {
  args: {
    name: 'SettingsIcon',
    size: 'md',
    stroke: colors.purple[500]
  }
}

export const Large: Story = {
  args: {
    name: 'SearchIcon',
    size: 'lg',
    stroke: colors.purple[500]
  }
}

export const XLarge: Story = {
  args: {
    name: 'HeartIcon',
    size: 'xl',
    stroke: colors.purple[500],
    fill: "none"
  }
}