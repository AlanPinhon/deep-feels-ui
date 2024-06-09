import React, { ChangeEvent } from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { setThemeColor } from '../theme/setThemeColor';
import { Text } from './Text';

export type CheckboxProps = {
  checked?: boolean;
  onChange?: (arg:ChangeEvent<HTMLInputElement>) => void
  style?: React.CSSProperties;
}

const Container = styled.div<CheckboxProps>`
  display: flex;
  align-items: center;
  width: 6rem;
`

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

export const Checkbox = ({style, checked, onChange}:CheckboxProps) => {
  const theme = useTheme();

  return (
    <Container style={style}>
      <CustomCheckbox theme={theme} checked={checked}>
        <StyledCheckbox onChange={onChange} type='checkbox'/>
      </CustomCheckbox>
      <Text color={setThemeColor(theme, colors.neutralColors.white, colors.purple[500])} variant='label'>Remind me</Text>
    </Container>
  )
}