import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { font, fontSizes, fontWeights, spaces } from '../theme/index';
import { IconName } from '../assets/Icons/IconTypes';
import { Icon } from './Icon';

export type AlertProps = {
  withIcon?: IconName;
  children: React.ReactNode;
  type?: 'success' | 'error';
}

export const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: center;
  width: 9.875rem;
  padding: ${spaces.md} ${spaces.lg};
  border-radius: ${spaces.md};
  background-color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple[700] : colors.neutralColors.white};
  filter: drop-shadow(2px 2px 4px ${colors.neutralColors.shadow});
`

export const StyledMsgAlert = styled.p<AlertProps>`
  margin: 0;
  font-family: ${font.sans};
  font-size: ${fontSizes.alert};
  font-weight: ${fontWeights.book};
  padding-left: ${spaces.md};
  color: ${props => (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]};
`

export const Alert = ({children, type, withIcon}:AlertProps) => {
  const theme = useTheme();

  return (
    <StyledAlert theme= {theme} type={type}>
      <Icon name={withIcon} size='lg'/>
      <StyledMsgAlert theme={theme}>{children}</StyledMsgAlert>
    </StyledAlert>
  )
}