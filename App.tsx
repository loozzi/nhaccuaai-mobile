import {View, Text} from 'react-native';
import React from 'react';
import {ThemeProvider} from './src/contexts/themeContext';
import {LanguageProvider} from './src/contexts/languageContext';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Text>Hello World</Text>
      </LanguageProvider>
    </ThemeProvider>
  );
}
