import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '../components/Text';
import { colors } from '../theme/colors';

const meta:Meta <typeof Text> = {
  component: Text,
};

export default meta;

type Story = StoryObj<TextProps>;

export const Header1: Story = {
  args: {
    children: 'Header 1',
    color: colors.darkPurple[500],
    variant: 'h1'
  }
}

export const Header2: Story = {
  args: {
    children: 'Header 2',
    color: colors.darkPurple[500],
    variant: 'h2'
  }
}

export const Header3: Story = {
  args: {
    children: 'Header 3',
    color: colors.darkPurple[500],
    variant: 'h3'
  }
}

export const LargeParagraph: Story = {
  args: {
    children: 'Large Paragraph',
    color: colors.purple[500],
    variant: 'lg'
  }
}

export const MediumParagraph: Story = {
  args: {
    children: 'Medium Paragraph',
    color: colors.purple[500],
    variant: 'md'
  }
}

export const SmallParagraph: Story = {
  args: {
    children: 'Small Paragraph',
    color: colors.purple[500],
    variant: 'sm'
  }
}

export const ExtraSmallParagraph: Story = {
  args: {
    children: 'Extra Small Paragraph',
    color: colors.purple[500],
    variant: 'xs'
  }
}

export const Label: Story = {
  args: {
    children: 'Label Text',
    color: colors.purple[500],
    variant: 'label'
  }
}

export const Alert: Story = {
  args: {
    children: 'Alert Text',
    color: colors.purple[500],
    variant: 'alert'
  }
}