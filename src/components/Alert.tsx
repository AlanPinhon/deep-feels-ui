import React, { useEffect, useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { spaces } from '../theme/index';
import { IconName } from '../assets/Icons/IconTypes';
import { Icon } from './Icon';
import { Text } from './Text';
import { setThemeColor } from '../theme/setThemeColor';

export type AlertProps = {
  icon?: Extract<IconName, 'CheckIcon' | 'ErrorIcon'>;
  children: React.ReactNode;
  type: 'success' | 'error';
  style?: React.CSSProperties;
  mounted?: boolean;
}

const StyledAlert = styled.div<AlertProps>`
  display: flex;
  align-items: center;
  width: 9.875rem;
  padding: ${spaces.md} ${spaces.lg};
  border-radius: ${spaces.md};
  background-color: ${({theme}) => setThemeColor(theme, colors.lightPurple[700], colors.neutralColors.white)};
  filter: drop-shadow(2px 2px 4px ${colors.neutralColors.shadow});
`

export const Alert = ({children, style, type, icon, mounted}:AlertProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if(mounted) {
      setIsMounted(true);
      setTimeout(() => setIsMounted(false), 3000);
    }
  }, [mounted]);

  const iconColor = (icon === 'ErrorIcon')
    ? setThemeColor(theme, colors.red[300], colors.red[500])
    : setThemeColor(theme, colors.green[300], colors.green[500]); 

  if(!isMounted) return null;

  return (
    <StyledAlert style={style} role='alert' theme={theme} type={type}>
      <Icon name={icon} size='sm' stroke={iconColor}/>
      <Text variant='alert' color={colors.purple[500]} style={{ marginLeft: '.5rem' }}>
        {children}
      </Text>
    </StyledAlert>
  );
}