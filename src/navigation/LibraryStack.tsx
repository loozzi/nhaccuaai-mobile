import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import routes from '../configs/routes';
import DetailScreen from '../screens/detail';
import LibraryScreen from '../screens/library';

export default function LibrartStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.library}
        component={LibraryScreen}
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
