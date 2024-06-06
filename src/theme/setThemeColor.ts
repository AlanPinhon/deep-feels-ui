import { DefaultTheme } from 'styled-components';

export const setThemeColor = (theme : DefaultTheme, darkColor: string, lightColor: string) => `
  ${(theme.theme === 'dark') ? darkColor : lightColor}
`;