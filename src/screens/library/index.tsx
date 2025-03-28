import {View, Text} from 'react-native';
import React from 'react';
import HeaderComp from '../../components/layout/header';
import useLanguage from '../../hook/useLanguage';
import {useNavigation} from '@react-navigation/native';

export default function LibraryScreen() {
  const {t} = useLanguage();
  const navigation: {push: any} = useNavigation();
  return (
    <View>
      <HeaderComp title={t.library} />
    </View>
  );
}
