import {View, Text} from 'react-native';
import React from 'react';
import {Link} from 'react-router-native';
import routes from '../../configs/routes';

export default function HomeScreen() {
  return (
    <View style={{margin: 20}}>
      <Text>HomeScreen</Text>
      <Link to={routes.auth.signin}>
        <Text>Go to Sign In</Text>
      </Link>
    </View>
  );
}
