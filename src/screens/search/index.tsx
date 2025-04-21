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
import {PreviewCartModel} from '../../models/preview';
import routes from '../../configs/routes';
import {NavigationProps} from '../../models/navigation';
import {useAppDispatch} from '../../app/hook';
import {playerActions} from '../../hook/player/player.slice';

export default function SearchScreen() {
  const dispatch = useAppDispatch();

  const {t} = useLanguage();
  const navigation = useNavigation<NavigationProps>();
  const [search, setSearch] = useState<string>('');
  const [data, setData] = useState<PreviewCartModel[]>([
    {
      id: 1,
      name: 'Die for You',
      artist: 'The Weeknd',
      image:
        'https://avatar-ex-swe.nixcdn.com/song/2021/11/26/4/a/f/f/1637909633351_640.jpg',
      permalink: 'https://example.com/die-for-you',
      type: 'song',
      duration: 200,
    },
    {
      id: 2,
      name: 'Blinding Lights',
      artist: 'The Weeknd',
      image:
        'https://i1.sndcdn.com/artworks-Eke4dWZTIrXCkXPW-hX2ihg-t500x500.jpg',
      permalink: 'https://example.com/blinding-lights',
      type: 'song',
      duration: 180,
    },
    {
      id: 3,
      name: 'Save Your Tears',
      artist: 'The Weeknd',
      image:
        'https://avatar-ex-swe.nixcdn.com/song/2021/04/23/2/f/5/3/1619153014739_640.jpg',
      permalink: 'https://example.com/save-your-tears',
      type: 'song',
      duration: 210,
    },
    {
      id: 4,
      name: 'Take My Breath',
      artist: 'The Weeknd',
      image:
        'https://i1.sndcdn.com/artworks-RapCTPAQ0nGTcJJV-vHI1NA-t500x500.jpg',
      permalink: 'https://example.com/take-my-breath',
      type: 'song',
      duration: 240,
    },
    {
      id: 5,
      name: 'Heartless',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/7/78/The_Weeknd_-_Heartless.png',
      permalink: 'https://example.com/heartless',
      type: 'song',
      duration: 220,
    },
    {
      id: 6,
      name: 'In Your Eyes',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/4/4e/The_Weeknd_-_In_Your_Eyes.png',
      permalink: 'https://example.com/in-your-eyes',
      type: 'song',
      duration: 230,
    },
    {
      id: 7,
      name: 'Starboy',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/a/a0/The_Weeknd_-_Starboy.png',
      permalink: 'https://example.com/starboy',
      type: 'song',
      duration: 250,
    },
    {
      id: 8,
      name: 'I Feel It Coming',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/8/8e/The_Weeknd_-_I_Feel_It_Coming.png',
      permalink: 'https://example.com/i-feel-it-coming',
      type: 'song',
      duration: 260,
    },
    {
      id: 9,
      name: 'Call Out My Name',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/3/3b/The_Weeknd_-_Call_Out_My_Name.png',
      permalink: 'https://example.com/call-out-my-name',
      type: 'song',
      duration: 210,
    },
    {
      id: 10,
      name: 'Can’t Feel My Face',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Weeknd_-_Can%27t_Feel_My_Face.png',
      permalink: 'https://example.com/cant-feel-my-face',
      type: 'song',
      duration: 200,
    },
    {
      id: 11,
      name: 'The Hills',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Weeknd_-_The_Hills.png',
      permalink: 'https://example.com/the-hills',
      type: 'song',
      duration: 220,
    },
    {
      id: 12,
      name: 'Earned It',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/6/6b/The_Weeknd_-_Earned_It.png',
      permalink: 'https://example.com/earned-it',
      type: 'song',
      duration: 240,
    },
    {
      id: 13,
      name: 'Often',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/7/7f/The_Weeknd_-_Often.png',
      permalink: 'https://example.com/often',
      type: 'song',
      duration: 230,
    },
    {
      id: 14,
      name: 'Wicked Games',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/5/5e/The_Weeknd_-_Wicked_Games.png',
      permalink: 'https://example.com/wicked-games',
      type: 'song',
      duration: 300,
    },
    {
      id: 15,
      name: 'Pray For Me',
      artist: 'The Weeknd',
      image:
        'https://upload.wikimedia.org/wikipedia/en/6/6e/The_Weeknd_and_Kendrick_Lamar_-_Pray_for_Me.png',
      permalink: 'https://example.com/pray-for-me',
      type: 'song',
      duration: 210,
    },
  ]);

  const handleClearAllHistory = () => {
    setData([]);
  };

  const handleRemoveOne = (removeData: PreviewCartModel) => {
    const newData = data.filter(item => item.id !== removeData.id);
    setData(newData);
  };

  const handleGoToDetail = (item: PreviewCartModel) => {
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
      // Handle search logic here
    }, 500);

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
            marginBottom: 96,
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
