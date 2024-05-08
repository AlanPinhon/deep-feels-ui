import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { spaces } from '../theme/index';
import { colors } from '../theme/colors';
import { Icon } from './Icon';

const StyledNavbar = styled.nav`
  width: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spaces.md} 4rem;

  background-color: ${props => (props.theme.theme === 'dark') ? colors.lightPurple[700] : colors.lightPurple[200]};
`

export const Navbar = () => {
  const theme = useTheme();
  return (
    <StyledNavbar theme={theme}>
      <Icon name='HomeIcon' size='lg' selected />
      <Icon name='CompassIcon' size='lg' />
      <Icon name='HeartIcon' size='lg' />
      <Icon name='SettingsIcon' size='lg' />
    </StyledNavbar>
  )
}