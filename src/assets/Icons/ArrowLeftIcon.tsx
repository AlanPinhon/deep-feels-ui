import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme/colors';
import { IconProps } from './IconTypes';

export const ArrowLeftIcon = ({size}:IconProps) => {
  const theme = useTheme();

  return (
    <svg id='arrow-left' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Arrow / Chevron_Left">
        <path 
          id="Vector" 
          d="M15 19L8 12L15 5" 
          stroke={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}