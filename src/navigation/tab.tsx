import Icon from '@react-native-vector-icons/ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import useLanguage from '../hook/useLanguage';
import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import LibraryScreen from '../screens/library';
import CreateScreen from '../screens/create';

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
            iconName = focused ? 'library' : 'library-outline';
          } else if (route.name === t.create) {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
      })}>
      <Tab.Screen
        component={HomeScreen}
        name={t.home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={SearchScreen}
        name={t.search}
        options={{headerShown: false}}
      />
      <Tab.Screen
        component={LibraryScreen}
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
    bottom: 16,
    marginHorizontal: 16,
    elevation: 0,
    backgroundColor: '#194868',
    borderRadius: 16,
    opacity: 0.8,
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
