import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import routes from '../../configs/routes';

export default function HomeScreen() {
  const navigation: {push: any} = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.push(routes.auth.signin);
        }}>
        <Text>Go to sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.push(routes.auth.signup);
        }}>
        <Text>Go to sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
