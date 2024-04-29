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

export const StyledButton = styled.button<ButtonProps>`
  font-family: ${font.sans};
  font-size: ${fontSizes.p_lg};
  font-weight: ${fontWeights.bold};
  border-radius: ${spaces.sm};
  padding: ${spaces.md} ${spaces.lg};
  cursor: pointer;
  transition: .15s ease-in-out;

  ${props => {
    if (props.variant === 'primary') return `
    background-color: ${(props.theme.theme === 'dark') ? colors.lightPurple[600] : colors.purple[500]};
    color: ${ colors.neutralColors.white };
    border: none;

    &:hover {
      background-color: ${(props.theme.theme === 'dark') ? colors.lightPurple[400] : colors.purple[700]};
    };
    `
  }}

  ${props => {
    if (props.variant === 'error') return `
    background-color: ${colors.neutralColors.white};
    color: ${(props.theme.theme === 'dark') ? colors.red[300] : colors.red[500]};
    border: 1px solid ${(props.theme.theme === 'dark') ? colors.red[300] : colors.red[500]};

    &:hover {
      background-color: ${(props.theme.theme === 'dark') ? colors.red[300] : colors.red[500]};
      color: ${colors.neutralColors.white};
    };
    `
  }}  

  &:disabled {
    background-color: ${props => (props.theme.theme === 'dark') ? colors.purple[700] : colors.lightPurple[200] };
    color: ${props => (props.theme.theme === 'dark') ? colors.purple[500] : colors.neutralColors.white };
    cursor: not-allowed;
  }  
`

export const Button = ({children, onClick, variant, disabled}:ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledButton theme={theme} onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  )
}