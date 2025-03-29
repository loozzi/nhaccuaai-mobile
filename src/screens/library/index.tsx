import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComp from '../../components/layout/header';
import useLanguage from '../../hook/useLanguage';
import {useNavigation} from '@react-navigation/native';
import {PreviewCartModel} from '../../models/preview';
import ListVerticalComp from '../../components/layout/list-vertical';

export default function LibraryScreen() {
  const {t} = useLanguage();
  const navigation: {push: any} = useNavigation();
  const [data, setData] = useState<PreviewCartModel[]>([
    {
      id: 1,
      name: 'Die for You',
      artist: 'The Weeknd',
      image:
        'https://avatar-ex-swe.nixcdn.com/song/2021/11/26/4/a/f/f/1637909633351_640.jpg',
      permalink: 'https://example.com/die-for-you',
      type: 'playlist',
      duration: 200,
    },
  ]);

  return (
    <View style={styles.container}>
      <HeaderComp title={t.library} />
      <ScrollView>
        <ListVerticalComp
          title={t.playlist}
          data={data}
          size="large"
          onPress={(item: PreviewCartModel) => {
            navigation.push('Playlist', {item});
          }}
          onRemove={(item: PreviewCartModel) => {
            setData(data.filter(i => i.id !== item.id));
          }}
        />
        <View style={{marginBottom: 64}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {},
});
