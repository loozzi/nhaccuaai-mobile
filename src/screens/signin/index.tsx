import {View, Text} from 'react-native';
import React from 'react';
import useLanguage from '../../hook/useLanguage';

export default function SignInScreen() {
  const {t} = useLanguage();

  return (
    <View>
      <Text>{t.title}</Text>
    </View>
  );
}
