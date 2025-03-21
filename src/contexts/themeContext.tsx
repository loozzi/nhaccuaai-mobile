import {createContext, ReactNode, useState} from 'react';

const ThemeContext = createContext({});

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const {children} = props;
  const [theme, setTheme] = useState<string>('light');

  const themes: Record<string, JSON> = {
    light: require('../themes/lightTheme').default,
  };

  return (
    <ThemeContext.Provider
      value={{theme, setTheme, currentTheme: themes[theme]}}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};
