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
import {PreviewCartModel} from '../../models/preview';
import PlaylistActionButton from './PlaylistActionButton';

type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof routes.DetailScreen
>;

export default function DetailScreen() {
  const {t} = useLanguage();
  const route = useRoute<DetailScreenRouteProp>();
  const {id, permalink, type} = route.params;
  const navigation = useNavigation<NavigationProps>();

  const [data, setData] = useState<Playlist>({
    id: 1,
    permalink: 'string',
    name: 'The Weeknd',
    description: 'The Weeknd playlist',
    image:
      'https://media.vov.vn/sites/default/files/styles/large/public/2021-03/the-weeknd-press-photo-2020-billboard-jgk-1548-1586968737-1024x677.jpg',
    num_tracks: 5,
    duration: 1200,
    tracks: [
      {
        id: 1,
        name: 'Die for You',
        image:
          'https://avatar-ex-swe.nixcdn.com/song/2021/11/26/4/a/f/f/1637909633351_640.jpg',
        permalink: 'https://example.com/die-for-you',
        type: 'song',
        duration: 200,
        artists: [
          {
            id: 1,
            name: 'The Weeknd',
            permalink: 'string',
          },
        ],
        release_date: '',
        file_url: '',
        track_number: 1,
      },
      {
        id: 2,
        name: 'Blinding Lights',
        artists: [
          {
            id: 1,
            name: 'The Weeknd',
            permalink: 'string',
          },
        ],
        image:
          'https://i1.sndcdn.com/artworks-Eke4dWZTIrXCkXPW-hX2ihg-t500x500.jpg',
        permalink: 'https://example.com/blinding-lights',
        type: 'song',
        duration: 180,
        release_date: '',
        file_url: '',
        track_number: 2,
      },
      {
        id: 3,
        name: 'Save Your Tears',
        artists: [
          {
            id: 1,
            name: 'The Weeknd',
            permalink: 'string',
          },
        ],
        image:
          'https://avatar-ex-swe.nixcdn.com/song/2021/04/23/2/f/5/3/1619153014739_640.jpg',
        permalink: 'https://example.com/save-your-tears',
        type: 'song',
        duration: 210,
        release_date: '',
        file_url: '',
        track_number: 3,
      },
      {
        id: 4,
        name: 'Take My Breath',
        artists: [
          {
            id: 1,
            name: 'The Weeknd',
            permalink: 'string',
          },
        ],
        image:
          'https://i1.sndcdn.com/artworks-RapCTPAQ0nGTcJJV-vHI1NA-t500x500.jpg',
        permalink: 'https://example.com/take-my-breath',
        type: 'song',
        duration: 240,
        release_date: '',
        file_url: '',
        track_number: 4,
      },
      {
        id: 5,
        name: 'Heartless',
        artists: [
          {
            id: 1,
            name: 'The Weeknd',
            permalink: 'string',
          },
        ],
        image:
          'https://upload.wikimedia.org/wikipedia/en/7/78/The_Weeknd_-_Heartless.png',
        permalink: 'https://example.com/heartless',
        type: 'song',
        duration: 220,
        release_date: '',
        file_url: '',
        track_number: 5,
      },
      {
        id: 6,
        name: 'Heartless',
        artists: [
          {
            id: 1,
            name: 'The Weeknd',
            permalink: 'string',
          },
        ],
        image:
          'https://upload.wikimedia.org/wikipedia/en/7/78/The_Weeknd_-_Heartless.png',
        permalink: 'https://example.com/heartless',
        type: 'song',
        duration: 220,
        release_date: '',
        file_url: '',
        track_number: 6,
      },
      {
        id: 7,
        name: 'Heartless',
        artists: [
          {
            id: 1,
            name: 'The Weeknd',
            permalink: 'string',
          },
        ],
        image:
          'https://upload.wikimedia.org/wikipedia/en/7/78/The_Weeknd_-_Heartless.png',
        permalink: 'https://example.com/heartless',
        type: 'song',
        duration: 220,
        release_date: '',
        file_url: '',
        track_number: 5,
      },
      {
        id: 8,
        name: 'Heartless',
        artists: [
          {
            id: 1,
            name: 'The Weeknd',
            permalink: 'string',
          },
        ],
        image:
          'https://upload.wikimedia.org/wikipedia/en/7/78/The_Weeknd_-_Heartless.png',
        permalink: 'https://example.com/heartless',
        type: 'song',
        duration: 220,
        release_date: '',
        file_url: '',
        track_number: 5,
      },
      {
        id: 9,
        name: 'Heartless',
        artists: [
          {
            id: 1,
            name: 'The Weeknd',
            permalink: 'string',
          },
        ],
        image:
          'https://upload.wikimedia.org/wikipedia/en/7/78/The_Weeknd_-_Heartless.png',
        permalink: 'https://example.com/heartless',
        type: 'song',
        duration: 220,
        release_date: '',
        file_url: '',
        track_number: 5,
      },
    ],
    author: {
      id: 1,
      name: 'NhacCuaAi',
      permalink: 'string',
      image:
        'https://media.vov.vn/sites/default/files/styles/large/public/2021-03/the-weeknd-press-photo-2020-billboard-jgk-1548-1586968737-1024x677.jpg',
    },
  });

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleShare = () => {};

  useEffect(() => {
    console.log('id', id);
    console.log('permalink', permalink);
    console.log('type', type);
    // Fetch data using id and permalink
  }, [id, permalink, type]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBack} onPress={handleGoBack}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.name}>{data.name}</Text>
        <TouchableOpacity style={styles.share} onPress={handleShare}>
          <Icon name="share-social-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.info}>
          <TouchableOpacity style={styles.author}>
            <Image
              source={{uri: data.author.image}}
              style={styles.authorImage}
              resizeMode="cover"
            />
            <Text style={styles.authorName}>{data.author.name}</Text>
          </TouchableOpacity>
          <Text style={styles.description}>{data.description}</Text>
          <TouchableOpacity>
            <Image />
            <Text></Text>
          </TouchableOpacity>
        </View>
        <PlaylistActionButton data={data} />
        <View style={styles.listTracks}>
          {/* List tracks */}
          <ListVerticalComp
            data={data.tracks as PreviewCartModel[]}
            title={t.tracks}
            size="small"
            showRemove
          />
        </View>
        <View style={{paddingBottom: 120}} />
      </ScrollView>
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
  image: {
    height: 200,
    aspectRatio: 1,
    objectFit: 'cover',
    borderRadius: 10,
    alignSelf: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 16,
  },
  authorImage: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 8,
  },
  authorName: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    paddingLeft: 16,
    color: '#333',
  },
  actionButton: {
    paddingHorizontal: 16,
  },
  listTracks: {},
});
