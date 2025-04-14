import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  publicNavigationConfig,
  privateNavigationConfig,
  NavigationConfig,
} from '../configs/navigation.route';

interface AuthNavigatorProps {
  Stack: any;
}

export default function AuthNavigator(props: AuthNavigatorProps) {
  const {Stack} = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navigationConfig, setNavigationConfig] = useState<NavigationConfig[]>(
    publicNavigationConfig,
  );

  useEffect(() => {
    if (isLoggedIn) {
      setNavigationConfig([
        ...privateNavigationConfig,
        ...publicNavigationConfig,
      ]);
    } else {
      setNavigationConfig(publicNavigationConfig);
    }
  }, [isLoggedIn]);

  return (
    <Stack.Navigator>
      {navigationConfig.map((config, index) => (
        <Stack.Screen
          key={index}
          name={config.name}
          component={config.element}
          options={{...config.options, headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
}
