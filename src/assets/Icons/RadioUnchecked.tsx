import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme/colors';
import { IconProps } from './IconTypes';

export const RadioUnchecked = ({size}:IconProps) => {
  const theme = useTheme();

  return (
    <svg data-icon='radio-unchecked' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Interface / Radio_Unchecked">
        <path 
          id="Vector" 
          d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" 
          stroke={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}