import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComp from '../../components/layout/header';
import useLanguage from '../../hook/useLanguage';
import {useNavigation} from '@react-navigation/native';
import SearchComp from './search';
import ListVerticalComp from '../../components/layout/list-vertical';
import {PreviewModel} from '../../models/preview';
import routes from '../../configs/routes';
import {NavigationProps} from '../../models/navigation';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {playerActions, selectIsPlaying} from '../../hook/player/player.slice';
import trackService from '../../services/track.service';
import {PaginatedResponse} from '../../models/utils';

export default function SearchScreen() {
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector(selectIsPlaying);

  const {t} = useLanguage();
  const navigation = useNavigation<NavigationProps>();
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<PreviewModel[]>([]);

  const handleClearAllHistory = () => {
    setData([]);
  };

  const handleRemoveOne = (removeData: PreviewModel) => {
    const newData = data.filter(item => item.id !== removeData.id);
    setData(newData);
  };

  const handleGoToDetail = (item: PreviewModel) => {
    if (item.type === 'track') {
      // TODO: Call API and set playtrack
      // dispatch(playerActions.playTrack(track: Track));
    } else
      navigation.push(routes.detail, {
        id: item.id,
        permalink: item.permalink,
      });
  };

  useEffect(() => {
    const bounceSearch = setTimeout(() => {
      console.log('search', search);
      trackService
        .getTracks(10, 1, search)
        .then((res: PaginatedResponse<PreviewModel>) => {
          setData(res.items);
        });
    }, 200);

    return () => {
      clearTimeout(bounceSearch);
    };
  }, [search]);

  return (
    <View style={styles.container}>
      <HeaderComp title={t.search} />
      <SearchComp search={search} setSearch={setSearch} />
      <ScrollView style={styles.scrollView}>
        <ListVerticalComp
          title={t.recentsSearch}
          data={data}
          size="medium"
          showRemove={true}
          onRemove={handleRemoveOne}
          onPress={handleGoToDetail}
        />
        {data.length > 0 && (
          <TouchableOpacity
            style={styles.clearAll}
            onPress={handleClearAllHistory}>
            <Text style={styles.clearAllText}>{t.clearSearch}</Text>
          </TouchableOpacity>
        )}
        {data.length === 0 && (
          <Text style={styles.empty}>{t.recentsSearchEmpty}</Text>
        )}
        <View
          style={{
            marginBottom: 156,
          }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: 42,
    paddingTop: 8,
  },
  clearAll: {
    marginTop: 8,
    padding: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 32,
  },
  clearAllText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  empty: {
    alignSelf: 'center',
  },
});
