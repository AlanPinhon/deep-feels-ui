import React, { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  useDeviceTheme: boolean;
  setUseDeviceTheme: Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: '' ,
  setTheme: () => {} ,
  useDeviceTheme: false,
  setUseDeviceTheme: () => {}
}) ;

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {

  const prefersDarkThemeMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || (prefersDarkThemeMode ? 'dark' : 'light'));
  const [useDeviceTheme, setUseDeviceTheme] = useState<boolean>(localStorage.getItem('useDeviceTheme') === 'true');

  useEffect(() => {
    if (useDeviceTheme) {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        const newTheme = query.matches ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      };

      query.addEventListener('change', handleChange);
      handleChange();

      return () => {
        query.removeEventListener('change', handleChange);
      };
    }
  }, [useDeviceTheme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme, useDeviceTheme, setUseDeviceTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}