import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComp from '../../components/layout/header';
import useLanguage from '../../hook/useLanguage';
import ListHorizontalComp from '../../components/layout/list-horizontal';
import {PreviewCartModel} from '../../models/preview';
import trackService from '../../services/track.service';
import {PaginatedResponse} from '../../models/utils';

export default function HomeScreen() {
  const navigation: {push: any} = useNavigation();
  const {t} = useLanguage();
  const [popular, setPopular] = useState<PreviewCartModel[]>([]);
  const [trending, setTrending] = useState<PreviewCartModel[]>([]);

  useEffect(() => {
    trackService
      .getTracks(10, 1)
      .then((res: PaginatedResponse<PreviewCartModel>) => {
        setTrending(res.items);
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
        <View style={{height: 64}}>{/* Padding bottom */}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
