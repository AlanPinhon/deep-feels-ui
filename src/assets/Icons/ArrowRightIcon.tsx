import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme/colors';
import { IconProps } from './IconTypes';

export const ArrowRightIcon = ({size}:IconProps) => {
  const theme = useTheme();

  return (
    <svg data-icon='arrow-right' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Arrow / Chevron_Right">
        <path
          id="Vector"
          d="M9 5L16 12L9 19" 
          stroke={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}