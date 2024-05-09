import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme/colors';
import { IconProps } from './IconTypes';

export const HeartIcon = ({size, fill, selected, styleVariant, onClick}:IconProps) => {
  const theme = useTheme();

  return (
    <svg data-icon='heart' width={size} height={size} onClick={onClick} viewBox="0 0 24 24" fill={(fill && styleVariant) ? colors.red[300] : "none"} xmlns="http://www.w3.org/2000/svg">
      <g id="Interface / Heart_01">
        <path 
          id="Vector" 
          d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z"
          stroke={
            (styleVariant)
              ? colors.red[700]
              : (selected)
                ? (theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]
                : colors.lightPurple[500]
          }
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}