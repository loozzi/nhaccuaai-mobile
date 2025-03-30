import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import routes from '../configs/routes';
import DetailScreen from '../screens/detail';
import SearchScreen from '../screens/search';

export default function SearchStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.search}
        component={SearchScreen}
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
