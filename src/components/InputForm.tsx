import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';

export type InputFormProps = {
  children?: React.ReactNode;
  placeholder?: string;
  type?: string;
  variant: 'primary' | 'error' | 'success';
}

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label<InputFormProps>`
  color: ${props => props.theme.theme.inputForm.primary.label_text_color};
`

export const StyledInputForm = styled.input<InputFormProps>`
  width: 348px;
  padding: 12px;
  margin-top: 8px;
  color: ${props => props.theme.theme.inputForm.primary.text_color};
  background-color: ${props => props.theme.theme.inputForm.primary.background};
  border: 1px solid ${props => {
    if(props.variant === 'primary') return props.theme.theme.inputForm.primary.border
    if(props.variant === 'error') return props.theme.theme.inputForm.error.border;
    if(props.variant === 'success') return props.theme.theme.inputForm.success.border;
  }};
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.theme.inputForm.primary.placeholder_text};
  }
`


export const InputForm = ({children, variant, placeholder, type}:InputFormProps) => {
  const theme = useTheme();

  return (
    <InputContainer>
      <StyledLabel theme={theme} variant={variant}>{children}</StyledLabel>
      <StyledInputForm theme={theme} type={type} variant={variant} placeholder={placeholder}/>
    </InputContainer>
  )
}