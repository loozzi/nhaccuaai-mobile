import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderComp from '../../components/layout/header';
import useLanguage from '../../hook/useLanguage';

export default function HomeScreen() {
  const navigation: {push: any} = useNavigation();
  const {t} = useLanguage();

  return (
    <View style={styles.container}>
      <HeaderComp title={t.home} />
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
