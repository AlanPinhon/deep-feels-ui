import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { colors } from '../theme/colors';
import { font, fontSizes, fontWeights, spaces } from '../theme/index';
import { Icon } from './Icon';
import { IconName } from '../assets/Icons/IconTypes';

export type OptionMenuProps = {
  icon?: IconName;
  checked?: boolean;
  children?: React.ReactNode;
  name?: string;
  type?: 'arrow' | 'check';
  onChange?: (arg:ChangeEvent<HTMLInputElement>) => void
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

const HiddenRadio = styled.input.attrs({type: 'radio'})`
  display: none;
`;

const CustomRadio = styled.span<OptionMenuProps>`
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border: 2px solid ${props => (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]};
    background: ${colors.neutralColors.transparent};
  }

  &:after {
    content: '';
    display: block;
    width: .5rem;
    height: .5rem;
    background: ${props => (props.theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]};
    position: absolute;
    border-radius: 50%;
    top: 6px;
    left: 6px;
    opacity: ${props => (props.checked) ? '1' : '0'};
    transform: ${props => (props.checked) ? 'scale(1, 1)' : 'scale(0, 0)'};
    transition: all 0.25s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  }
`;

export const OptionMenu = ({children, icon, checked, name, type, onChange}:OptionMenuProps) => {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <Icon name={icon} size='lg' background stroke={colors.purple[500]}/>
        <OptionText>{children}</OptionText>
      {
        (type === 'arrow')
          ? <Icon name='ArrowRightIcon' size='lg' stroke={colors.purple[500]}/>
          : <CustomRadio theme={theme} checked={checked}>
              <HiddenRadio name={name} onChange={onChange} checked={checked} />
            </CustomRadio>
      }
    </Container>
  )
}