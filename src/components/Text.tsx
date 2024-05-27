import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { colors } from '../theme/colors';
import { fontSizes, fontWeights, font } from '../theme/index';

export type TextProps = {
  children: React.ReactNode;
  color?: string;
  htmlFor?: string;
  variant?: keyof typeof variantStyles;
}

const element = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  lg: "p",
  md: "p",
  sm: "p",
  xs: "p",
  label: "label",
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
  color: ${(({theme, color}) => (theme.theme === 'dark') ? colors.neutralColors.white : color)};
  ${({ variant }) => variant && variantStyles[variant]}
`

export const Text = ({children, color, htmlFor, variant}:TextProps) => {
  const theme = useTheme();
  const tagName = element[variant];

  return (
   <StyledText as={tagName} htmlFor={htmlFor} theme={theme} color={color} variant={variant}>
      {children}
   </StyledText>
  )
}