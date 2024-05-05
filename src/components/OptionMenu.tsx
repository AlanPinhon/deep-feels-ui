import React, { Children } from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { colors } from '../theme/colors';
import { font, fontSizes, fontWeights, spaces } from '../theme/index';
import { Icon } from './Icon';
import { IconName } from '../assets/Icons/IconTypes';

export type OptionMenuProps = {
  icon: IconName;
  isChecked: boolean;
  children: React.ReactNode;
  type: 'arrow' | 'check'
}

const Container = styled.div`
  width: 19.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spaces.sm} ${spaces.lg};
`

const OptionText = styled.p`
  width: 12.75rem;
  color: ${props => (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]};
  font-family: ${font.sans};
  font-size: ${fontSizes.p_sm};
  font-weight: ${fontWeights.light};
`

export const OptionMenu = ({children, icon, isChecked, type}:OptionMenuProps) => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <Icon name={icon} size='lg' background/>
        <OptionText>{children}</OptionText>
      {
        (type === 'arrow')
          ? <Icon name='ArrowRightIcon' size='lg'/>
          : <Icon name={(isChecked) ? 'RadioFill' : 'RadioUnchecked'} size='lg'/>
      }
    </Container>
  )
}