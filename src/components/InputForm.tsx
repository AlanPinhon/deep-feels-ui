import React, { ChangeEvent } from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';

export type InputFormProps = {
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  value: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

export const StyledInputForm = styled.input<InputFormProps>`
  width: 348px;
  padding: 12px;
  margin-top: 8px;
  color: ${props => props.theme.theme.inputForm.textColor};
  background-color: ${props => props.theme.theme.inputForm.background};
  border: 1px solid ${props => props.theme.theme.inputForm.mainBorder};
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.theme.inputForm.placeholder};
  }

  &.error {
    border-color: ${props => props.theme.theme.inputForm.errorBorder};
  }

  &.success {
    border-color: ${props => props.theme.theme.inputForm.successBorder};
  }
`

export const InputForm = ({placeholder, type, value, onChange}:InputFormProps) => {
  const theme = useTheme();
 
  return (
    <StyledInputForm 
    theme={theme} 
    type={type} 
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    />
  )
}