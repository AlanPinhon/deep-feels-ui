import { Meta, StoryObj } from '@storybook/react';
import { InputForm, InputFormProps } from '../components/InputForm';

const meta:Meta <typeof InputForm> = {
  component: InputForm,
};

export default meta;

type Story = StoryObj<InputFormProps>;

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
    withIcon: "SearchIcon"
  }
}