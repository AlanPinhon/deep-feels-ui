import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';

export type ButtonProps = {
  children: React.ReactNode,
  onClick: () => void,
  variant: 'primary' | 'error' ,
  disabled?: boolean,
}

export const StyledButton = styled.button<ButtonProps>`
  font-size: 17px;
  font-weight: bold;
  border-radius: 8px;
  padding: .75rem 1rem;
  cursor: pointer;
  transition: .15s ease-in-out;

  ${props => {
    if (props.variant === 'primary') return `
    background-color: ${(props.theme.theme === 'dark') ? colors.lightPurple.lp_600 : colors.purple.p_500};
    color: ${ colors.neutralColors.white };
    border: none;

    &:hover {
      background-color: ${(props.theme.theme === 'dark') ? colors.lightPurple.lp_400 : colors.purple.p_700};
    };
    `
  }}

  ${props => {
    if (props.variant === 'error') return `
    background-color: ${colors.neutralColors.white};
    color: ${(props.theme.theme === 'dark') ? colors.red.r_300 : colors.red.r_500};
    border: 1px solid ${(props.theme.theme === 'dark') ? colors.red.r_300 : colors.red.r_500};

    &:hover {
      background-color: ${(props.theme.theme === 'dark') ? colors.red.r_300 : colors.red.r_500};
      color: ${colors.neutralColors.white};
    };
    `
  }}  

  &:disabled {
    background-color: ${props => (props.theme.theme === 'dark') ? colors.purple.p_700 : colors.lightPurple.lp_200 };
    color: ${props => (props.theme.theme === 'dark') ? colors.purple.p_500 : colors.neutralColors.white };
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