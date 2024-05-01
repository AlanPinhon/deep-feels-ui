import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme/colors';
import { IconProps } from './IconTypes';

export const CompassIcon = ({size}:IconProps) => {
  const theme = useTheme();

  return (
    <svg data-icon='compass' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Navigation / Compass">
        <g id="Vector">
          <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" 
            stroke={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10.5 10.5L16 8L13.5 13.5L8 16L10.5 10.5Z" 
            stroke={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  )
}