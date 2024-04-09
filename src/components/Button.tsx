import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';

export type ButtonProps = {
  children: React.ReactNode,
  onClick: () => void,
  variant: 'primary' | 'error' | 'feelings',
  disabled?: boolean,
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => {
    if(props.variant === 'primary') return props.theme.theme.button.primary.background;
    if(props.variant === 'error') return props.theme.theme.button.danger.background;
    if(props.variant === 'feelings') return props.theme.theme.button.feelings.background;
  }};
  color: ${props => {
    if(props.variant === 'primary') return props.theme.theme.button.primary.text_color;
    if(props.variant === 'error') return props.theme.theme.button.danger.text_color;
    if(props.variant === 'feelings') return props.theme.theme.button.feelings.text_color;
  }};
  border: ${props => {
    if(props.variant === 'error') return `1px solid ${props.theme.theme.button.danger.border_color}`;
    return "none"
  }};
  font-size: 17px;
  font-weight: bold;
  border-radius: 8px;
  padding: .75rem 1rem;
  cursor: pointer;
  transition: .15s ease-in-out;

  &:hover {
    background-color: ${props => {
      if(props.variant === 'primary') return props.theme.theme.button.primary.hover;
      if(props.variant === 'error') return props.theme.theme.button.danger.hover;
      if(props.variant === 'feelings') return props.theme.theme.button.feelings.hover;
    }};
    color: ${props => {
      if(props.variant === 'error') return props.theme.theme.button.danger.text_color_hover;
    }};
  }

  &:disabled {
    background-color: ${props => {
      if(props.variant === 'primary') return props.theme.theme.button.disabled.background;
    }};
    color: ${props => {
      if(props.variant === 'primary') return props.theme.theme.button.disabled.text_color;
    }};
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