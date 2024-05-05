import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme/colors';
import { IconProps } from './IconTypes';

export const RadioFill = ({size}:IconProps) => {
  const theme = useTheme();

  return (
    <svg data-icon='radio-fill' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Interface / Radio_Fill">
        <g id="Vector">
          <path 
            d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" 
            stroke={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" 
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