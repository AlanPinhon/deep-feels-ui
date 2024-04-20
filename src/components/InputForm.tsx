import React, { ChangeEvent } from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { Icon, IconName } from './Icon';

export type InputFormProps = {
  withIcon?: IconName;
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  value: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

export const StyledInputForm = styled.input<InputFormProps>`
  width: 348px;
  padding: 12px;
  margin-top: 8px;
  color: ${props =>  (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple.p_500 };
  background-color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple.lp_700 : colors.neutralColors.white };
  border: 1px solid ${props => (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.lightPurple.lp_700 };
  border-radius: 4px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple.lp_500 : colors.lightPurple.lp_300 };
  }

  &.error {
    border-color: ${props => (props.theme.theme === 'dark') ? colors.red.r_300 : colors.red.r_500 };
  }

  &.success {
    border-color: ${props => (props.theme.theme === 'dark') ? colors.green.g_300 : colors.green.g_500 };
  }
`

export const InputForm = ({placeholder, type, value, onChange, withIcon }:InputFormProps) => {
  const theme = useTheme();

  return (
    <>
      <StyledInputForm
      theme={theme}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      />
      {(withIcon) && <Icon name={withIcon}/>}
    </>
  )
}