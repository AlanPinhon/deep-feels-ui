import React, { ChangeEvent } from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { font, fontSizes, fontWeights, spaces } from '../theme/index';
import { IconName } from '../assets/Icons/IconTypes';
import { Icon } from './Icon';

export type InputProps = {
  withIcon?: IconName;
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
  padding: ${spaces.md};
  color: ${props =>  (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500] };
  background-color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple[700] : colors.neutralColors.white };
  border: 1px solid ${props => (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.lightPurple[700] };
  border-radius: ${spaces.sm};
  filter: drop-shadow(2px 2px 4px ${colors.neutralColors.shadow});
`

export const StyledInput = styled.input<InputProps>`
  width: 21.75rem;
  font-family: ${font.sans};
  font-size: ${fontSizes.p_sm};
  font-weight: ${fontWeights.light};
  color: ${props =>  (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500] };
  background-color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple[700] : colors.neutralColors.white };
  border: none;
  border-radius: ${spaces.xs};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple[500] : colors.lightPurple[300] };
  }

  &.error {
    border-color: ${props => (props.theme.theme === 'dark') ? colors.red[300] : colors.red[500] };
  }

  &.success {
    border-color: ${props => (props.theme.theme === 'dark') ? colors.green[300] : colors.green[500] };
  }
`

export const Input = ({withIcon, placeholder, type, value, onChange}:InputProps) => {
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
      {withIcon && <Icon name={withIcon} size='sm'/>}
    </ContainerInput>
  )
}