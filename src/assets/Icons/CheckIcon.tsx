import React from 'react';
import { IconProps } from './IconTypes';

export const CheckIcon = ({style, size, stroke}:IconProps) => {

  return (
    <svg data-icon='check' style={style} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Warning / Circle_Check">
        <path 
          id="Vector" 
          d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" 
          stroke={stroke} 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}