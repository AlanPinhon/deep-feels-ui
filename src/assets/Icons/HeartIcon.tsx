import React from 'react';
import { IconProps } from './IconTypes';

export const HeartIcon = ({style, size, fill, stroke}:IconProps) => {

  return (
    <svg data-icon='heart' style={style} width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g id="Interface / Heart_01">
        <path 
          id="Vector" 
          d="M12 7.69431C10 2.99988 3 3.49988 3 9.49991C3 15.4999 12 20.5001 12 20.5001C12 20.5001 21 15.4999 21 9.49991C21 3.49988 14 2.99988 12 7.69431Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}