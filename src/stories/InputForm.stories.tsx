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
    errorText: 'Enter a valid name'
  }
}

export const Password: Story = {
  args: {
    children: 'Password',
    type: 'password',
    placeholder: 'Password',
    errorText: 'Password must be between 7 and 20 characters'
  }
}

export const Email: Story = {
  args: {
    children: 'Email',
    type: 'email',
    placeholder: 'email@domain.com',
    errorText: 'Enter a valid email'
  }
}