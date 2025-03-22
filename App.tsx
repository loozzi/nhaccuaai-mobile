import {View, Text} from 'react-native';
import React from 'react';
import {ThemeProvider} from './src/contexts/themeContext';
import {LanguageProvider} from './src/contexts/languageContext';
import {NativeRouter, Route, Routes} from 'react-router-native';
import navigationConfig from './src/configs/navigation.route';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NativeRouter>
          <Routes>
            {navigationConfig.map((config, index) => (
              <Route
                key={index}
                path={config.link}
                element={<config.element />}
              />
            ))}
            <Route
              path="/"
              element={
                <View>
                  <Text>Home</Text>
                </View>
              }
            />
          </Routes>
        </NativeRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
