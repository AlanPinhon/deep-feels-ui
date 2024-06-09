import React from 'react';
import { IconProps } from './IconTypes';

export const ArrowRightIcon = ({style, size, stroke}:IconProps) => {

  return (
    <svg data-icon='arrow-right' style={style} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Arrow / Chevron_Right">
        <path
          id="Vector"
          d="M9 5L16 12L9 19" 
          stroke={stroke} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}