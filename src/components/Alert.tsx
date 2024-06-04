import React, { useEffect, useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled, { DefaultTheme } from 'styled-components';
import { colors } from '../theme/colors';
import { spaces } from '../theme/index';
import { IconName } from '../assets/Icons/IconTypes';
import { Icon } from './Icon';
import { Text } from './Text';

export type AlertProps = {
  duration: number;
  icon?: Extract<IconName, 'CheckIcon' | 'ErrorIcon'>;
  children: React.ReactNode;
  type: 'success' | 'error';
}

const setCheckColor = (theme: DefaultTheme) => `
  ${(theme.theme === 'dark') ? colors.green[300] : colors.green[500]}
`;

const setErrorColor = (theme: DefaultTheme) => `
  ${(theme.theme === 'dark') ? colors.red[300] : colors.red[500]}
`;

const setTextColor = (theme: DefaultTheme) => `
  ${(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]}
`;

export const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: center;
  width: 9.875rem;
  padding: ${spaces.md} ${spaces.lg};
  border-radius: ${spaces.md};
  background-color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple[700] : colors.neutralColors.white};
  filter: drop-shadow(2px 2px 4px ${colors.neutralColors.shadow});
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &.active {
    opacity: 1;
  }
`

export const Alert = ({children, type, icon, duration = 5000}:AlertProps) => {
  const theme = useTheme();

  const [className, setClassName] = useState('active');

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName('');
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);  

  return (
    <StyledAlert role='alert' theme={theme} type={type} duration={duration} className={className}>
      <Icon name={icon} size='lg' stroke={(icon === 'ErrorIcon') ? setErrorColor(theme) : setCheckColor(theme)}/>
      <Text variant='alert' color={setTextColor(theme)} style={{ marginLeft: '.5rem' }}>
        {children}
      </Text>
    </StyledAlert>
  )
}