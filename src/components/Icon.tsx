import React from 'react';
import { EyeIcon, SearchIcon } from '../icons/';

export type IconName =
  'SearchIcon' |
  'EyeIcon';

const Icons = { EyeIcon, SearchIcon };

export const Icon = ({ name }: { name: IconName }) => {
  const Component = Icons[name];
  return <Component />
};
