import React from 'react';
import { SearchIcon } from '../assets/Icons';

export type IconName = 'SearchIcon';

const Icons = { SearchIcon };

export const Icon = ({name}:{name : IconName}) => {
  const Component = Icons[name];
  return <Component size={16}/>
}