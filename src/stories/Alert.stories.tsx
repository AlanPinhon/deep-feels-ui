import { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertProps } from '../components/Alert';

const meta:Meta <typeof Alert> = {
  component: Alert,
};

export default meta;

type Story = StoryObj<AlertProps>;

export const Success: Story = {
  args: {
    children: '¡Email enviado!',
    type: 'success',
    withIcon: 'CheckIcon'
  }
}

export const Error: Story = {
  args: {
    children: 'Ocurrió un error',
    type: 'success',
    withIcon: 'ErrorIcon'
  }
}