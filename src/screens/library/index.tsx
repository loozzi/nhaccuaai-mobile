import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HeaderComp from '../../components/layout/header';
import ListVerticalComp from '../../components/layout/list-vertical';
import routes from '../../configs/routes';
import useLanguage from '../../hook/useLanguage';
import {NavigationProps} from '../../models/navigation';
import {PreviewModel} from '../../models/preview';

export default function LibraryScreen() {
  const {t} = useLanguage();
  const navigation = useNavigation<NavigationProps>();
  const [data, setData] = useState<PreviewModel[]>([]);

  const handleGoToDetail = (item: PreviewModel) => {
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
          onRemove={(item: PreviewModel) => {
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
