import React from 'react';
import {LanguageProvider} from './src/contexts/languageContext';
import {ThemeProvider} from './src/contexts/themeContext';
// import {NativeRouter, Route, Routes} from 'react-router-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationConfig from './src/configs/navigation.route';
import routes from './src/configs/routes';
import {StatusBar} from 'react-native';

// const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NavigationContainer>
          <StatusBar hidden />
          <Stack.Navigator initialRouteName={routes.home}>
            {navigationConfig.map((config, index) => (
              <Stack.Screen
                key={index}
                name={config.name}
                component={config.element}
                options={{headerShown: false}}
              />
            ))}
          </Stack.Navigator>
          {/* <Tab.Navigator screenOptions={({route}) => ({})}>
            <Tab.Screen component={HomeScreen} name="Home" />
            <Tab.Screen component={SignInScreen} name="SignInScreen" />
          </Tab.Navigator> */}
        </NavigationContainer>
      </LanguageProvider>
    </ThemeProvider>
  );
}
