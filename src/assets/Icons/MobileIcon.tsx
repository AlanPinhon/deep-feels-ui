import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme/colors';
import { IconProps } from './IconTypes';

export const MobileIcon = ({size}:IconProps) => {
  const theme = useTheme();

  return (
    <svg data-icon='mobile' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="System / Mobile">
        <path 
          id="Vector" 
          d="M7 6.2002V17.8002C7 18.9203 7 19.4796 7.21799 19.9074C7.40973 20.2837 7.71547 20.5905 8.0918 20.7822C8.5192 21 9.07899 21 10.1969 21H13.8031C14.921 21 15.48 21 15.9074 20.7822C16.2837 20.5905 16.5905 20.2837 16.7822 19.9074C17 19.48 17 18.921 17 17.8031V6.19691C17 5.07899 17 4.5192 16.7822 4.0918C16.5905 3.71547 16.2837 3.40973 15.9074 3.21799C15.4796 3 14.9203 3 13.8002 3H10.2002C9.08009 3 8.51962 3 8.0918 3.21799C7.71547 3.40973 7.40973 3.71547 7.21799 4.0918C7 4.51962 7 5.08009 7 6.2002Z" 
          stroke={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}