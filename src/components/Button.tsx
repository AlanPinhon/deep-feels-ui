import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { font, fontSizes, fontWeights, spaces } from '../theme/index';

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

const primaryStyles = (theme: any) => `
  background-color: ${(theme.theme === 'dark') ? colors.lightPurple[600] : colors.purple[500]};
  color: ${ colors.neutralColors.white };

  &:hover {
    background-color: ${(theme.theme === 'dark') ? colors.lightPurple[400] : colors.purple[700]};
  };
`;

const errorStyles = (theme: any) => `
  background-color: ${colors.neutralColors.white};
  color: ${(theme.theme === 'dark') ? colors.red[300] : colors.red[500]};
  border: 1px solid ${(theme.theme === 'dark') ? colors.red[300] : colors.red[500]};

  &:hover {
    background-color: ${(theme.theme === 'dark') ? colors.red[300] : colors.red[500]};
    color: ${colors.neutralColors.white};
  };
`;

const disabledStyles = (theme: any) => `
  &:disabled {
    background-color: ${(theme.theme === 'dark') ? colors.purple[700] : colors.lightPurple[200] };
    color: ${(theme.theme === 'dark') ? colors.purple[500] : colors.neutralColors.white };
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
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