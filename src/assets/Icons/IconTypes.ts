import { iconSizes } from '../../theme/index';

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

export type IconProps = {
  name: IconName;
  size: keyof typeof iconSizes;
  background?: boolean;
  selected?: boolean;
  fill?: boolean;
  styleVariant?: boolean;
  onClick?: () => void;
}