import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { colors } from '../theme/colors';
import { fontSizes, fontWeights, font } from '../theme/index';

export type TextProps = {
  children: React.ReactNode;
  color: string;
  variant: keyof typeof fontSizes;
  weight: keyof typeof fontWeights;
}

const StyledText = styled.p<TextProps>`
  color: ${props => (props.theme.theme === 'dark') ? colors.neutralColors.white : props.color};
  font-family: ${font.sans};
  font-size: ${props => props.variant};
  font-weight: ${props => props.weight};
`

export const Text = ({ children, color, variant, weight}:TextProps) => {
  const theme = useTheme();

  return (
    <StyledText
      theme={theme}
      color={color}
      variant={fontSizes[variant as string]}
      weight={fontWeights[weight as string]}
    >
      {children}
    </StyledText>
  )
}