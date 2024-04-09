import { Meta, StoryObj } from '@storybook/react';
import { InputForm, InputFormProps } from '../components/InputForm';

const meta:Meta <typeof InputForm> = {
  component: InputForm,
};

export default meta;

type Story = StoryObj<InputFormProps>;

export const Primary: Story = {
  args: {
    children: 'Name',
    variant: 'primary',
    placeholder: 'Input',
  }
}

export const Error: Story = {
  args: {
    children: 'Name',
    variant: 'error',
    placeholder: 'Input',
  }
}

export const Success: Story = {
  args: {
    children: 'Name',
    variant: 'success',
    placeholder: 'Input',
  }
}