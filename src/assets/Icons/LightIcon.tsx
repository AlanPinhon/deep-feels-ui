import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme/colors';
import { IconProps } from './IconTypes';

export const LightIcon = ({size}:IconProps) => {
  const theme = useTheme();

  return (
    <svg data-icon='light' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Environment / Sun">
        <path 
          id="Vector" 
          d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" 
          stroke={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}