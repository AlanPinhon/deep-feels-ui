import React from 'react';
import { IconProps } from './IconTypes';

export const PlayIcon = ({style, size, stroke}:IconProps) => {

  return (
    <svg data-icon='play' style={style} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Media / Play_Circle">
        <g id="Vector">
          <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" 
            stroke={stroke} 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10 15V9L15 12L10 15Z" 
            stroke={stroke} 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  )
}