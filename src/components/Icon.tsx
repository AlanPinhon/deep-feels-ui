import React from 'react';
import { ArrowLeftIcon, CameraIcon, CheckIcon, CompassIcon, DarkIcon, ErrorIcon, HeartIcon, HomeIcon, LightIcon, LockIcon, MobileIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon, SearchIcon, SettingsIcon, ThemeIcon, UserIcon } from '../assets/Icons';
import { IconProps, IconName } from '../assets/Icons/IconTypes';
import { iconSizes } from '../theme/index';

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

export const Icon = ({name, size}:{name : IconName; size: IconProps['size']}) => {
  const Component = Icons[name];
  return <Component size={(iconSizes[size as string])}/>
}