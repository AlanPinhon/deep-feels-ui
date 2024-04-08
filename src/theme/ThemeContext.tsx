import React, { createContext, useContext } from 'react';
import { darkTheme, lightTheme } from './theme';

export type ThemeColorProps = {
  theme: typeof lightTheme | typeof darkTheme;
}

export const ThemeContext = createContext<ThemeColorProps>({
  theme: lightTheme
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
  const isDarkTheme = false;
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{theme}}>
      {children}
    </ThemeContext.Provider>
  )
}