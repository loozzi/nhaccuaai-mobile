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
import AsyncStorage from '@react-native-async-storage/async-storage';
import browseService from '../../services/browse.service';

export default function SearchScreen() {
  const dispatch = useAppDispatch();

  const {t} = useLanguage();
  const navigation = useNavigation<NavigationProps>();
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<PreviewModel[]>([]);
  const [histories, setHistories] = useState<PreviewModel[]>([]);
  const [pagination, setPagination] = useState<{page: number; limit: number}>({
    page: 1,
    limit: 10,
  });
  const [metaPagination, setMetaPagination] = useState<{
    page: number;
    limit: number;
    total: number;
  }>({
    page: 1,
    limit: 10,
    total: 0,
  });

  const handleClearAllHistory = () => {
    setHistories([]);
  };

  const handleRemoveOne = (removeData: PreviewModel) => {
    const newHistory = histories.filter(item => item.id !== removeData.id);
    setHistories(newHistory);
  };

  const handleGoToDetail = (item: PreviewModel) => {
    if (item.type === 'track') {
      dispatch(playerActions.playTrack(item));
    } else
      navigation.push(routes.detail, {
        type: item.type,
        id: item.id,
        permalink: item.permalink,
      });
    const newHistory = histories.filter(history => history.id !== item.id);
    newHistory.unshift(item);
    setHistories(newHistory);
  };

  const handleSeeMore = () => {
    setPagination(prev => ({...prev, page: prev.page + 1}));
  };

  useEffect(() => {
    AsyncStorage.getItem('histories').then(res => {
      if (res) {
        const histories = JSON.parse(res) as PreviewModel[];
        setHistories(histories);
      }
    });
  }, []);

  useEffect(() => {
    setSearch('');
    AsyncStorage.setItem('histories', JSON.stringify(histories));
  }, [histories]);

  useEffect(() => {
    const bounceSearch = setTimeout(() => {
      browseService
        .search(10, 1, search)
        .then((res: PaginatedResponse<PreviewModel>) => {
          setData(res.items);
          setMetaPagination(res.meta);
          setPagination({
            page: 1,
            limit: 10,
          });
        });
    }, 200);

    return () => {
      clearTimeout(bounceSearch);
    };
  }, [search]);

  useEffect(() => {
    if (pagination.page > 1) {
      browseService
        .search(pagination.limit, pagination.page, search)
        .then((res: PaginatedResponse<PreviewModel>) => {
          setData(prev => [...prev, ...res.items]);
          setMetaPagination(res.meta);
        });
    }
  }, [pagination.page]);

  return (
    <View style={styles.container}>
      <HeaderComp title={t.search} />
      <SearchComp search={search} setSearch={setSearch} />
      <ScrollView style={styles.scrollView}>
        {search === '' && (
          <ListVerticalComp
            title={t.recentsSearch}
            data={histories}
            size="medium"
            showRemove={true}
            onRemove={handleRemoveOne}
            onPress={handleGoToDetail}
          />
        )}
        {search.length > 0 && (
          <ListVerticalComp
            title={t.searchResult}
            data={data}
            size="medium"
            onPress={handleGoToDetail}
            showRemove={false}
          />
        )}
        {histories.length > 0 && search === '' && (
          <TouchableOpacity
            style={styles.clearAll}
            onPress={handleClearAllHistory}>
            <Text style={styles.clearAllText}>{t.clearSearch}</Text>
          </TouchableOpacity>
        )}
        {histories.length === 0 && search === '' && (
          <Text style={styles.empty}>{t.recentsSearchEmpty}</Text>
        )}
        {search !== '' && data.length < metaPagination.total && (
          <View style={styles.seeMoreContainer}>
            <TouchableOpacity style={styles.seeMoreBtn} onPress={handleSeeMore}>
              <Text style={styles.seeMoreText}>{t.seeMore}</Text>
            </TouchableOpacity>
          </View>
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
    color: '#333',
  },
  seeMoreContainer: {},
  seeMoreBtn: {
    padding: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 32,
  },
  seeMoreText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
