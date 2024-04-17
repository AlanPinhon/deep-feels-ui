import React, { createContext, useContext } from 'react';

export const ThemeContext = createContext({ theme: 'light' });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
  const isDarkTheme = false;
  const theme = isDarkTheme ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{theme}}>
      {children}
    </ThemeContext.Provider>
  )
}