import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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

export default function HomeScreen() {
  const navigation: {push: any} = useNavigation();
  const {t} = useLanguage();
  const [popular, setPopular] = useState<PreviewCartModel[]>([
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
  ]);
  const [trending, setTrending] = useState<PreviewCartModel[]>([
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
  ]);

  return (
    <ScrollView style={styles.container}>
      <HeaderComp title={t.home} />
      <ListHorizontalComp title={t.popular} data={popular} />
      <ListHorizontalComp title={t.trending} data={trending} size="medium" />
      <ListHorizontalComp title={t.trending} data={trending} size="large" />
      <ListHorizontalComp title={t.popular} data={popular} />
      <View style={{height: 64}}>{/* Padding bottom */}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
