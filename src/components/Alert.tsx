import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled, { DefaultTheme } from 'styled-components';
import { colors } from '../theme/colors';
import { spaces } from '../theme/index';
import { IconName } from '../assets/Icons/IconTypes';
import { Icon } from './Icon';
import { Text } from './Text';

export type AlertProps = {
  icon?: 'CheckIcon' | 'ErrorIcon';
  children: React.ReactNode;
  type?: 'success' | 'error';
}

const setCheckStyles = (theme: DefaultTheme) => `
  ${(theme.theme === 'dark') ? colors.green[300] : colors.green[500]}
`;

const setErrorStyles = (theme: DefaultTheme) => `
  ${(theme.theme === 'dark') ? colors.red[300] : colors.red[500]}
`;

export const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: center;
  width: 9.875rem;
  padding: ${spaces.md} ${spaces.lg};
  border-radius: ${spaces.md};
  background-color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple[700] : colors.neutralColors.white};
  filter: drop-shadow(2px 2px 4px ${colors.neutralColors.shadow});
`

export const Alert = ({children, type, icon}:AlertProps) => {
  const theme = useTheme();

  return (
    <StyledAlert role='alert' theme={theme} type={type}>
      <Icon name={icon}  size='lg'  stroke={(icon === 'ErrorIcon') ? setErrorStyles(theme) : setCheckStyles(theme)}/>
      <Text 
        margin='0 0 0 .5rem'
        variant='alert'
        color={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]}>
        {children}
      </Text>
    </StyledAlert>
  )
}