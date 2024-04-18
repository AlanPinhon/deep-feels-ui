import React, { ChangeEvent } from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';

export type SearchInputProps = {
  placeholder?: string;
  value: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

export const StyledSearchInput = styled.input<SearchInputProps>`
  width: 348px;
  padding: 12px;
  color: ${props =>  (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple.p_500 };
  background-color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple.lp_700 : colors.neutralColors.white };
  border: none;
  border-radius: 8px;
  filter: drop-shadow(2px 2px 4px ${colors.neutralColors.shadow});

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple.lp_500 : colors.lightPurple.lp_300 };
  }
`

export const SearchInput = ({placeholder, value, onChange}:SearchInputProps) => {
  const theme = useTheme();

  return (
    <StyledSearchInput 
      placeholder={placeholder}
      theme={theme} 
      value={value} 
      onChange={onChange}
    />
  )
}