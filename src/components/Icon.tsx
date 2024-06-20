import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import styled, { DefaultTheme } from 'styled-components';
import { colors } from '../theme/colors';
import { ArrowLeftIcon, ArrowRightIcon, CameraIcon, CheckIcon, CompassIcon, DarkIcon, ErrorIcon, HeartIcon, HomeIcon, LightIcon, LockIcon, MobileIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon, RadioFill, RadioUnchecked, SearchIcon, SettingsIcon, ThemeIcon, UserIcon } from '../assets/Icons';
import { IconProps } from '../assets/Icons/IconTypes';
import { iconSizes } from '../theme/index';
import { setThemeColor } from '../theme/setThemeColor';

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
  background-color: ${({theme}) => setThemeColor(theme, colors.lightPurple[700], colors.lightPurple[200])};
`

export const Icon = ({name, size, background, fill, stroke, style}:IconProps) => {
  const theme = useTheme();
  const Component = Icons[name];

  const dynamicStroke = stroke ? stroke : setThemeColor(theme, colors.neutralColors.white, colors.purple[500]);

  if(background) return (
    <Background style={style} data-testid='background-icon' theme={theme}>
      <Component 
        name={name} 
        fill={fill}
        stroke={dynamicStroke} 
        size={(iconSizes[size as string])}
      />
    </Background>
  )
  
  return <Component 
    style={style}
    name={name} 
    fill={fill}
    stroke={dynamicStroke}
    size={(iconSizes[size as string])}
  />
}