import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import { ArrowLeftIcon, ArrowRightIcon, CameraIcon, CheckIcon, CompassIcon, DarkIcon, ErrorIcon, HeartIcon, HomeIcon, LightIcon, LockIcon, MobileIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon, RadioFill, RadioUnchecked, SearchIcon, SettingsIcon, ThemeIcon, UserIcon } from '../assets/Icons';
import { IconProps } from '../assets/Icons/IconTypes';
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

export const Icon = ({name, size, background, fill, stroke, style}:IconProps) => {
  const theme = useTheme();
  const Component = Icons[name];

  if(background) return (
    <Background style={style} data-testid='background-icon' theme={theme}>
      <Component 
        name={name} 
        fill={fill}
        stroke={stroke} 
        size={(iconSizes[size as string])}
      />
    </Background>
  )
  
  return <Component 
    style={style}
    name={name} 
    fill={fill}
    stroke={stroke}
    size={(iconSizes[size as string])}
  />
}