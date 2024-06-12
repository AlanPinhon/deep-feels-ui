import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { setThemeColor } from '../theme/setThemeColor';

export type CheckboxProps = {
  checked?: boolean;
  id?:string;
  name?: string;
  onChange?: () => void;
  style?: React.CSSProperties;
}

const StyledCheckbox = styled.input<CheckboxProps>`
  display: none;
`

const CustomCheckbox = styled.span<CheckboxProps>`
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid ${({theme}) => setThemeColor(theme, colors.neutralColors.white, colors.purple[500])};
  background-color: ${colors.neutralColors.transparent};
  border-radius: 4px;
  margin-right: 8px; 
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    opacity: ${props => props.checked ? 1 : 0};
    left: 5px;
    top: 2px;
    width: 4px;
    height: 8px;
    border: solid ${({theme}) => setThemeColor(theme, colors.neutralColors.white, colors.purple[500])};
    border-width: 0 2px 2px 0;
    transform: ${props => props.checked ? 'rotate(45deg) scale(1, 1)' : 'rotate(15deg) scale(0, 0)'};
    transition: all 0.15s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  }
`

export const Checkbox = ({id, name, style, checked, onChange}:CheckboxProps) => {
  const theme = useTheme();

  return (
    <>
      <CustomCheckbox style={style} theme={theme} checked={checked}/>
      <StyledCheckbox id={id} name={name} onChange={onChange} checked={checked} type='checkbox'/>
    </>
  )
}