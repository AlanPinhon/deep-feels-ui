import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { font, fontSizes, fontWeights, spaces } from '../theme/index';
import { IconName } from '../assets/Icons/IconTypes';
import { Icon } from './Icon';

export type CheckboxProps = {
  icon: IconName;
  children: React.ReactNode;
}

const Container = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CheckboxText = styled.p`
  margin-left: ${spaces.md};
  font-family: ${font.sans};
  font-size: ${fontSizes.p_sm};
  font-weight: ${fontWeights.book};
  color: ${props => (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]};
`

export const Checkbox = ({icon, children}:CheckboxProps) => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <Icon name={icon} size='lg' stroke={colors.purple[500]} />
      <CheckboxText theme={theme}>{children}</CheckboxText>
    </Container>
  )
}