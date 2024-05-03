import { iconSizes } from '../../theme/index';

export type IconProps = {
  size: keyof typeof iconSizes;
  background?: boolean;
}

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