import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { ArrowLeftIcon, ArrowRightIcon, CameraIcon, CheckIcon, CompassIcon, DarkIcon, ErrorIcon, HeartIcon, HomeIcon, LightIcon, LockIcon, MobileIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon, RadioFill, RadioUnchecked, SearchIcon, SettingsIcon, ThemeIcon, UserIcon } from '../assets/Icons';
import { IconProps, IconName } from '../assets/Icons/IconTypes';
import { iconSizes } from '../theme/index';

const Icons = {
  ArrowLeftIcon,
  ArrowRightIcon,
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
  RadioFill,
  RadioUnchecked,
  SearchIcon,
  SettingsIcon,
  ThemeIcon,
  UserIcon
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${props => (props.theme.theme === 'dark' ? colors.lightPurple[700] : colors.lightPurple[200] )};
`

export const Icon = ({name, size, background, selected, fill, styleVariant, onClick}:IconProps) => {
  const theme = useTheme();
  const Component = Icons[name];

  if(background) return (
    <Background theme={theme}>
      <Component 
        name={name} 
        fill={fill} 
        selected={selected}
        styleVariant={styleVariant} 
        size={(iconSizes[size as string])}
        onClick={onClick}
      />
    </Background>
  )
  
  return <Component 
    name={name} 
    fill={fill} 
    selected={selected}
    styleVariant={styleVariant} 
    size={(iconSizes[size as string])}
    onClick={onClick}
  />
}