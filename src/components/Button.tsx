import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled, { DefaultTheme } from 'styled-components';
import { colors } from '../theme/colors';
import { font, fontSizes, fontWeights, spaces } from '../theme/index';
import { setThemeColor } from '../theme/setThemeColor';

export type ButtonProps = {
  children: React.ReactNode,
  onClick: () => void,
  variant: 'primary' | 'error' ,
  disabled?: boolean,
}

const baseStyle = `
  font-family: ${font.sans};
  font-size: ${fontSizes.p_lg};
  font-weight: ${fontWeights.bold};
  border-radius: ${spaces.sm};
  padding: ${spaces.md} ${spaces.lg};
  cursor: pointer;
  transition: .15s ease-in-out;
  border: none;
`;

const primaryStyles = (theme: DefaultTheme) => `
  background-color: ${setThemeColor(theme, colors.lightPurple[600], colors.purple[500])};
  color: ${ colors.neutralColors.white };

  &:hover {
    background-color: ${setThemeColor(theme, colors.lightPurple[400], colors.purple[700])};
  };
`;

const errorStyles = (theme: DefaultTheme) => `
  background-color: ${colors.neutralColors.transparent};
  color: ${setThemeColor(theme, colors.red[300], colors.red[500])};
  border: 1px solid ${setThemeColor(theme, colors.red[300], colors.red[500])};

  &:hover {
    background-color: ${setThemeColor(theme, colors.red[300], colors.red[500])};
    color: ${colors.neutralColors.white};
  };
`;

const disabledStyles = (theme: DefaultTheme) => `
  &:disabled {
    background-color: ${setThemeColor(theme, colors.purple[700], colors.lightPurple[200])};
    color: ${setThemeColor(theme, colors.purple[500], colors.neutralColors.white)};
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  ${baseStyle}
  ${props => (props.variant === 'primary') && primaryStyles(props.theme)}
  ${props => (props.variant === 'error') && errorStyles(props.theme)}
  ${props => props.disabled && disabledStyles(props.theme)}
`;

export const Button = ({children, onClick, variant, disabled}:ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledButton theme={theme} onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  )
}