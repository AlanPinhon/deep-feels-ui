import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { colors } from '../../theme/colors';
import { IconProps } from './IconTypes';

export const ThemeIcon = ({size}:IconProps) => {
  const theme = useTheme();

  return (
    <svg id='theme-icon' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Edit / Swatches_Palette">
        <path 
          id="Vector" 
          d="M6.5 21H20.4706C20.763 21 21.0002 20.7631 21.0002 20.4707L21 14.5293M7.98047 20.6713L20.6421 14.7671C20.9071 14.6435 21.0217 14.3285 20.8981 14.0635L18.3872 8.6792C18.2636 8.41421 17.9486 8.29914 17.6836 8.42271L12.0303 11.0591M9.88182 18.4048C9.38152 20.2719 7.46235 21.38 5.59521 20.8797C3.72808 20.3794 2.61982 18.4604 3.12011 16.5933L6.73596 3.09863C6.81163 2.81621 7.10168 2.64855 7.3841 2.72422L13.1231 4.26171C13.4055 4.33738 13.5731 4.6276 13.4974 4.91002L9.88182 18.4048ZM6.5 17.6001H6.502L6.50195 17.6021L6.5 17.6021V17.6001Z" 
          stroke={(theme.theme === 'dark') ? colors.neutralColors.white : colors.purple[500]} 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}