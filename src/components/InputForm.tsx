import React, { useState, ChangeEvent } from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';

export type InputFormProps = {
  children?: React.ReactNode;
  placeholder?: string;
  type?: 'text' | 'password' | 'email';
}

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export const StyledLabel = styled.label<InputFormProps>`
  color: ${props => props.theme.theme.inputForm.main.label_text_color};
  font-weight: bold;
`

export const StyledInputForm = styled.input<InputFormProps>`
  width: 348px;
  padding: 12px;
  margin-top: 8px;
  color: ${props => props.theme.theme.inputForm.main.text_color};
  background-color: ${props => props.theme.theme.inputForm.main.background};
  border: 1px solid ${props => props.theme.theme.inputForm.main.border};
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.theme.inputForm.main.placeholder_text};
  }

  &.error {
    border-color:${props => props.theme.theme.inputForm.error.border}
  }

  &.success {
    border-color:${props => props.theme.theme.inputForm.success.border}
  }
`

export const InputForm = ({children, placeholder, type}:InputFormProps) => {
  const theme = useTheme();
  const [value, setValue] = useState('');
  const [inputState, setInputState] = useState<'error' | 'success' | undefined>();

  const handleInputValue = ({target}:ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value;
    setValue(inputValue);
    const isValid = validateInput(inputValue, type);
    setInputState((!isValid) ? 'error' : 'success');
  }

  const validateInput = (inputValue:string, inputType:string) => {
    if(inputType === 'email') return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(inputValue);
    if(inputType === 'password') return /^.{7,20}$/.test(inputValue);
    if(inputType === 'text') return /^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(inputValue);
  }

  return (
    <InputContainer>
      <StyledLabel theme={theme}>{children}</StyledLabel>
      <StyledInputForm
        theme={theme}
        className={inputState || ''}
        onChange={handleInputValue}
        type={type}
        value={value}
        placeholder={placeholder}/>
    </InputContainer>
  )
}