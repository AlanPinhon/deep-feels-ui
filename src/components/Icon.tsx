import React from 'react';
import { iconSizes } from '../theme/index';
import { ArrowLeftIcon, CameraIcon, CheckIcon, CompassIcon, DarkIcon, ErrorIcon, HeartIcon, HomeIcon, LightIcon, LockIcon, MobileIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon, SearchIcon, SettingsIcon, ThemeIcon, UserIcon } from '../assets/Icons';

export type IconName = 
'ArrowLeftIcon' |
'CameraIcon' |
'CheckIcon' |
'CompassIcon' |
'DarkIcon' |
'ErrorIcon' |
'HeartIcon' |
'HomeIcon' |
'LightIcon' |
'LockIcon' |
'MobileIcon' |
'NextIcon' |
'PauseIcon' |
'PlayIcon' |
'PrevIcon' |
'SearchIcon' |
'SettingsIcon' |
'ThemeIcon' |
'UserIcon';

const Icons = {
  ArrowLeftIcon,
  CameraIcon,
  CheckIcon,
  CompassIcon,
  DarkIcon,
  ErrorIcon,
  HeartIcon,
  HomeIcon,
  LightIcon,
  LockIcon,
  MobileIcon,
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  SearchIcon,
  SettingsIcon,
  ThemeIcon,
  UserIcon
};

export const Icon = ({name}:{name : IconName}) => {
  const Component = Icons[name];
  return <Component size={iconSizes.sm}/>
}