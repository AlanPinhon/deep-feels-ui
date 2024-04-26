import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme/colors';
import { IconProps } from './IconProps';

export const PauseIcon = ({size}:IconProps) => {
  const theme = useTheme();

  return (
    <svg id='pause' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Media / Pause_Circle">
        <path 
          id="Vector" 
          d="M14 9V15M10 9V15M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" 
          stroke={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple.p_500} 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </g>
    </svg>
  )
}