import { iconSizes } from '../../theme/index';

export type IconProps = {
  size: keyof typeof iconSizes;
  background?: boolean;
}

export type IconName = 
'ArrowLeftIcon' |
'ArrowRightIcon' |
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
'RadioFill' |
'RadioUnchecked' |
'SearchIcon' |
'SettingsIcon' |
'ThemeIcon' |
'UserIcon';