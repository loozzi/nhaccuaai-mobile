import Icon from '@react-native-vector-icons/ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import useLanguage from '../hook/useLanguage';
import CreateScreen from '../screens/create';
import HomeStack from './HomeStack';
import LibrartStack from './LibraryStack';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const {t} = useLanguage();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#ffffff',
        tabBarIcon: ({focused, color, size}) => {
          let iconName: any = 'home';

          if (route.name === t.home) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === t.search) {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === t.library) {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === t.create) {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
      })}>
      <Tab.Screen
        component={HomeStack}
        name={t.home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={SearchStack}
        name={t.search}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={LibrartStack}
        name={t.library}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={CreateScreen}
        name={t.create}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
