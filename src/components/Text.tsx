import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { colors } from '../theme/colors';
import { fontSizes, fontWeights, font } from '../theme/index';

export type TextProps = {
  children: React.ReactNode;
  color?: string;
  variant?: keyof typeof variantStyles;
  component?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLElement>;

const element = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  lg: "p",
  md: "p",
  sm: "p",
  xs: "p",
  label: "p",
  alert: "span",
}

const variantStyles = {
  h1: `
    font-size: ${fontSizes.h1};
    font-weight: ${fontWeights.bold};
  `,
  h2: `
    font-size: ${fontSizes.h2};
    font-weight: ${fontWeights.bold};
  `,
  h3: `
    font-size: ${fontSizes.h3};
    font-weight: ${fontWeights.bold};
  `,
  lg: `
    font-size: ${fontSizes.p_lg};
    font-weight: ${fontWeights.regular};
  `,
  md: `
    font-size: ${fontSizes.p_md};
    font-weight: ${fontWeights.light};
  `,
  sm: `
    font-size: ${fontSizes.p_sm};
    font-weight: ${fontWeights.light};
  `,
  xs: `
    font-size: ${fontSizes.p_xs};
    font-weight: ${fontWeights.light};
  `,
  label: `
    font-size: ${fontSizes.p_sm};
    font-weight: ${fontWeights.book};
  `,
  alert: `
    font-size: ${fontSizes.alert};
    font-weight: ${fontWeights.book};
  `,
}

const StyledText = styled.p<TextProps>`
  font-family: ${font.sans};
  color: ${(props => (props.theme.theme === 'dark') ? colors.neutralColors.white : props.color)};
  ${({ variant }) => variant && variantStyles[variant]}
`

export const Text = ({children, color, variant, component}:TextProps) => {
  const theme = useTheme();
  const tagName = component || element[variant];

  return (
   <StyledText as={tagName} theme={theme} color={color} variant={variant}>
      {children}
   </StyledText>
  )
}