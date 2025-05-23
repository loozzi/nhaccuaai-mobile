import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import routes from '../configs/routes';
import DetailScreen from '../screens/detail';
import HomeScreen from '../screens/home';

export default function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.detail}
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
