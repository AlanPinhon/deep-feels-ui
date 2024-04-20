import React, { ChangeEvent } from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { SearchIcon } from '../assets/Icons';

export type InputProps = {
  icon?: boolean;
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  value: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 348px;
  padding: 12px;
  color: ${props =>  (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple.p_500 };
  background-color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple.lp_700 : colors.neutralColors.white };
  border: 1px solid ${props => (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.lightPurple.lp_700 };
  border-radius: 8px;
  filter: drop-shadow(2px 2px 4px ${colors.neutralColors.shadow});
`

export const StyledInput = styled.input<InputProps>`
  width: 348px;
  color: ${props =>  (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple.p_500 };
  background-color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple.lp_700 : colors.neutralColors.white };
  border: none;
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

export const Input = ({icon, placeholder, type, value, onChange}:InputProps) => {
  const theme = useTheme();
 
  return (
    <ContainerInput theme={theme}>
      <StyledInput
        type={type} 
        placeholder={placeholder}
        theme={theme} 
        value={value} 
        onChange={onChange}
      />
      {icon && <SearchIcon size={16}/>}
    </ContainerInput>
  )
}