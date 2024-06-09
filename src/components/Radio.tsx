import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';
import { colors } from '../theme/colors';
import { setThemeColor } from '../theme/setThemeColor';

export type RadioProps = {
  id?: string;
  checked?: boolean;
  name?: string;
  onChange?: (arg:ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const HiddenRadio = styled.input.attrs({type: 'radio'})`
  opacity: 0;
  position: absolute;
  z-index: -10;
`;

const CustomRadio = styled.span<RadioProps>`
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border: 2px solid ${({theme}) => setThemeColor(theme, colors.neutralColors.white, colors.purple[500])};
    background: ${colors.neutralColors.transparent};
  }

  &:after {
    content: '';
    display: block;
    width: .5rem;
    height: .5rem;
    background: ${({theme}) => setThemeColor(theme, colors.neutralColors.white, colors.purple[500])};
    position: absolute;
    border-radius: 50%;
    top: 6px;
    left: 6px;
    opacity: ${props => props.checked ? '1' : '0'};
    transform: ${props => props.checked ? 'scale(1, 1)' : 'scale(0, 0)'};
    transition: all 0.25s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  }
`;

export const Radio = ({id, checked, name, style, onChange}:RadioProps) => {
  const theme = useTheme();

  return (
    <CustomRadio style={style} theme={theme} checked={checked}>
      <HiddenRadio id={id} name={name} onChange={onChange} checked={checked} />
    </CustomRadio>
  )
}