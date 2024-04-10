import { Meta, StoryObj } from '@storybook/react';
import { InputForm, InputFormProps } from '../components/InputForm';

const meta:Meta <typeof InputForm> = {
  component: InputForm,
};

export default meta;

type Story = StoryObj<InputFormProps>;

export const Text: Story = {
  args: {
    children: 'Name',
    type: 'text',
    placeholder: 'Gerald Bostock',
  }
}

export const Password: Story = {
  args: {
    children: 'Password',
    type: 'password',
    placeholder: 'Password',
  }
}

export const Email: Story = {
  args: {
    children: 'Email',
    type: 'email',
    placeholder: 'email@domain.com',
  }
}