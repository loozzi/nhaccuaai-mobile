import Icon from '@react-native-vector-icons/ionicons';
import {
  Link,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ListVerticalComp from '../../components/layout/list-vertical';
import {RootStackParamList} from '../../configs/navigation.route';
import routes from '../../configs/routes';
import useLanguage from '../../hook/useLanguage';
import {NavigationProps} from '../../models/navigation';
import {Playlist} from '../../models/playlist';
import {PreviewModel} from '../../models/preview';
import PlaylistActionButton from './ActionButton';
import {Album} from '../../models/album';
import trackService from '../../services/track.service';
import albumService from '../../services/album.service';
import {Artist} from '../../models/artist';
import artistService from '../../services/artist.service';
import PlaylistInfoComp from './PlaylistInfoComp';
import AlbumInfoComp from './AlbumInfoComp';
import ArtistInfoComp from './ArtistInfoComp';

type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof routes.DetailScreen
>;

export default function DetailScreen() {
  const {t} = useLanguage();
  const route = useRoute<DetailScreenRouteProp>();
  const {id, permalink, type} = route.params;
  const navigation = useNavigation<NavigationProps>();

  const [data, setData] = useState<Album | Artist | Playlist | undefined>(
    undefined,
  );

  const [name, setName] = useState<string>('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleShare = () => {};

  // TODO: Handle type = single;
  useEffect(() => {
    console.log('Fetching data for type:', type);
    if (type === 'track') {
      trackService.getTrackByPermalink(permalink ?? '').then(res => {
        albumService.getAlbum(res.album_id ?? 0).then(album_res => {
          setData(album_res);
        });
      });
    } else if (type === 'playlist') {
    } else if (type === 'artist') {
      console.log('Fetching data for artist:', id);
      artistService.getArtist(id).then(res => {
        setData(res);
      });
    } else {
      albumService.getAlbum(id).then(res => {
        setData(res);
      });
    }
    // Fetch data using id and permalink
  }, [id, permalink, type]);

  useEffect(() => {
    setName(data?.name ?? '');
    console.log('Data fetched:', data);
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBack} onPress={handleGoBack}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.name}>{name ? name : ''}</Text>
        <TouchableOpacity style={styles.share} onPress={handleShare}>
          <Icon name="share-social-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {data && (
        <ScrollView>
          {(type === 'album' || type === 'single' || type === 'track') && (
            <AlbumInfoComp data={data as Album} />
          )}
          {type === 'artist' && <ArtistInfoComp data={data as Artist} />}
          {type === 'playlist' && <PlaylistInfoComp data={data as Playlist} />}
          <View style={styles.listTracks}>
            {/* List tracks */}
            <ListVerticalComp
              data={data.tracks}
              title={t.tracks}
              size="small"
              showRemove={type === 'playlist' ? true : false}
            />
          </View>
          <View style={{paddingBottom: 120}} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  goBack: {},
  share: {},
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
  info: {},
  actionButton: {
    paddingHorizontal: 16,
  },
  listTracks: {},
});
