import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled, { DefaultTheme } from 'styled-components';
import { colors } from '../theme/colors';
import { spaces } from '../theme/index';
import { IconName } from '../assets/Icons/IconTypes';
import { Icon } from './Icon';
import { Text } from './Text';
import { setThemeColor } from '../theme/setThemeColor';

export type AlertProps = {
  className?: string;
  icon?: Extract<IconName, 'CheckIcon' | 'ErrorIcon'>;
  children: React.ReactNode;
  type: 'success' | 'error';
  style?: React.CSSProperties;
}

const setCheckColor = (theme: DefaultTheme) => setThemeColor(theme, colors.green[300], colors.green[500]);

const setErrorColor = (theme: DefaultTheme) => setThemeColor(theme, colors.red[300], colors.red[500]);

const setTextColor = (theme: DefaultTheme) => setThemeColor(theme, colors.neutralColors.white, colors.purple[500]);

const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: center;
  width: 9.875rem;
  padding: ${spaces.md} ${spaces.lg};
  border-radius: ${spaces.md};
  background-color: ${({theme}) => setThemeColor(theme, colors.lightPurple[700], colors.neutralColors.white)};
  filter: drop-shadow(2px 2px 4px ${colors.neutralColors.shadow});
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &.active {
    opacity: 1;
  }
`

export const Alert = ({children, style, type, icon, className = 'active'}:AlertProps) => {
  const theme = useTheme();  

  return (
    <StyledAlert style={style} role='alert' theme={theme} type={type} className={className}>
      <Icon name={icon} size='lg' stroke={(icon === 'ErrorIcon') ? setErrorColor(theme) : setCheckColor(theme)}/>
      <Text variant='alert' color={setTextColor(theme)} style={{ marginLeft: '.5rem' }}>
        {children}
      </Text>
    </StyledAlert>
  )
}