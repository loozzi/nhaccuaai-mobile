import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import useLanguage from '../../hook/useLanguage';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../configs/navigation.route';
import routes from '../../configs/routes';

type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof routes.DetailScreen
>;

export default function DetailScreen() {
  const {t} = useLanguage();
  const route = useRoute<DetailScreenRouteProp>();
  const {id, permalink} = route.params;

  useEffect(() => {
    console.log('id', id);
    console.log('permalink', permalink);
    // Fetch data using id and permalink
  }, [id, permalink]);

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
}
