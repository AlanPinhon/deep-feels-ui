import React from 'react';
import { IconProps } from './IconTypes';

export const ArrowLeftIcon = ({size, stroke}:IconProps) => {

  return (
    <svg data-icon='arrow-left' width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Arrow / Chevron_Left">
        <path 
          id="Vector" 
          d="M15 19L8 12L15 5" 
          stroke={stroke} 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}