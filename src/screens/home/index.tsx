import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HeaderComp from '../../components/layout/header';
import ListHorizontalComp from '../../components/layout/list-horizontal';
import useLanguage from '../../hook/useLanguage';
import {PreviewModel} from '../../models/preview';
import albumService from '../../services/album.service';
import trackService from '../../services/track.service';

export default function HomeScreen() {
  const navigation: {push: any} = useNavigation();
  const {t} = useLanguage();
  const [popular, setPopular] = useState<PreviewModel[]>([]);
  const [trending, setTrending] = useState<PreviewModel[]>([]);

  useEffect(() => {
    trackService.getTracks(10, 1).then(res => {
      setTrending(res.items);
    });

    albumService.getAlbums(10, 1).then(res => {
      setPopular(res.items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <HeaderComp title={t.home} />
      <ScrollView>
        <ListHorizontalComp title={t.popular} data={popular} />
        <ListHorizontalComp title={t.trending} data={trending} size="medium" />
        <ListHorizontalComp title={t.trending} data={trending} size="large" />
        <ListHorizontalComp title={t.popular} data={popular} />
        <View style={{height: 136}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
