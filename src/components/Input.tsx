import React, { ChangeEvent } from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { font, fontSizes, fontWeights, spaces } from '../theme/index';
import { IconName } from '../assets/Icons/IconTypes';
import { Icon } from './Icon';
import { setThemeColor } from '../theme/setThemeColor';

export type InputProps = {
  className?: string;
  withIcon?: IconName;
  placeholder?: string;
  type: 'text' | 'password' | 'email';
  value: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 348px;
  padding: ${spaces.md};
  color: ${({theme}) => setThemeColor(theme, colors.neutralColors.white, colors.purple[500])};
  background-color: ${({theme}) => setThemeColor(theme, colors.lightPurple[700], colors.neutralColors.white)};
  border: 1px solid ${({theme}) => setThemeColor(theme, colors.neutralColors.white, colors.lightPurple[700])};
  border-radius: ${spaces.xs};
  filter: drop-shadow(2px 2px 4px ${colors.neutralColors.shadow});

  &.error {
    border-color: ${({theme}) => setThemeColor(theme, colors.red[300], colors.red[500])};
  }

  &.success {
    border-color: ${({theme}) => setThemeColor(theme, colors.green[300], colors.green[500])};
  }
`

const StyledInput = styled.input<InputProps>`
  width: 21.75rem;
  font-family: ${font.sans};
  font-size: ${fontSizes.p_sm};
  letter-spacing: .025rem;
  font-weight: ${fontWeights.light};
  color: ${({theme}) => setThemeColor(theme, colors.neutralColors.white, colors.purple[500])};
  background-color: ${({theme}) => setThemeColor(theme, colors.lightPurple[700], colors.neutralColors.white)};
  border: none;
  border-radius: ${spaces.xs};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({theme}) => setThemeColor(theme, colors.lightPurple[500], colors.lightPurple[300])};
  }
`

export const Input = ({className, withIcon, placeholder, style, type, value, onChange}:InputProps) => {
  const theme = useTheme();
 
  return (
    <ContainerInput style={style} theme={theme} className={className}>
      <StyledInput
        type={type} 
        placeholder={placeholder}
        theme={theme} 
        value={value} 
        onChange={onChange}
      />
      {withIcon && <Icon name={withIcon} size='sm' stroke={setThemeColor(theme, colors.neutralColors.white, colors.purple[500])}/>}
    </ContainerInput>
  )
}