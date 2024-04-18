import { Meta, StoryObj } from '@storybook/react';
import { SearchInput, SearchInputProps } from '../components/SearchInput';

const meta:Meta <typeof SearchInput> = {
  component: SearchInput,
};

export default meta;

type Story = StoryObj<SearchInputProps>;

export const Main: Story = {
  args: {
    placeholder: 'Buscar'
  }
}