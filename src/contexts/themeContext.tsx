import {createContext, ReactNode, useState} from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  currentTheme: JSON;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  currentTheme: JSON.parse('{}' as string) as JSON,
});

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
