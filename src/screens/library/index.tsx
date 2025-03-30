import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HeaderComp from '../../components/layout/header';
import ListVerticalComp from '../../components/layout/list-vertical';
import routes from '../../configs/routes';
import useLanguage from '../../hook/useLanguage';
import {NavigationProps} from '../../models/navigation';
import {PreviewCartModel} from '../../models/preview';

export default function LibraryScreen() {
  const {t} = useLanguage();
  const navigation = useNavigation<NavigationProps>();
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

  const handleGoToDetail = (item: PreviewCartModel) => {
    navigation.push(routes.detail, {
      id: item.id,
      permalink: item.permalink,
    });
  };

  return (
    <View style={styles.container}>
      <HeaderComp title={t.library} />
      <ScrollView>
        <ListVerticalComp
          title={t.playlist}
          data={data}
          size="large"
          onPress={handleGoToDetail}
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
