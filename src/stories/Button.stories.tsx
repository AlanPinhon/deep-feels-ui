import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../components/Button';

const meta:Meta <typeof Button> = {
  component: Button,
}

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    onClick: () => alert('Hola'),
    variant: 'primary'
  }
}

export const Error: Story = {
  args: {
    children: 'Error',
    onClick: () => alert('Error'),
    variant: 'error'
  }
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: 'primary',
    disabled: true,
  }
}