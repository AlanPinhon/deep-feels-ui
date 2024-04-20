import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '../components/Input';

const meta:Meta <typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<InputProps>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Gerald Bostock',
  }
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
  }
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@domain.com',
  }
}

export const Icon: Story = {
  args: {
    icon: true,
    type: 'text',
    placeholder: 'Search',
  }
}