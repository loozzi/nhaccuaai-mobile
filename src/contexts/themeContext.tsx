import {createContext, ReactNode, useState} from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  currentTheme: Record<string, string>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  currentTheme: {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const {children} = props;
  const [theme, setTheme] = useState<string>('light');

  const themes: Record<string, Record<string, string>> = {
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
