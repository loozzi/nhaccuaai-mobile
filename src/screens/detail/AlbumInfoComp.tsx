import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Album} from '../../models/album';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../models/navigation';
import routes from '../../configs/routes';
import ActionButton from './ActionButton';
import Icon from '@react-native-vector-icons/ionicons';

interface AlbumInfoCompProps {
  data: Album;
  style?: any;
}

export default function AlbumInfoComp(props: AlbumInfoCompProps) {
  const {data, style} = props;
  const navigation = useNavigation<NavigationProps>();

  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleDownloadToggle = () => {
    setIsDownloaded(!isDownloaded);
  };

  const goToArtist = () => {
    navigation.push(routes.detail, {
      id: data.artists[0].id,
      permalink: data.artists[0].permalink,
      type: 'artist',
    });
  };

  useEffect(() => {
    console.log('AlbumInfoComp', data);
  }, [data]);

  return (
    <View style={style}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.info}>
        <TouchableOpacity style={styles.author} onPress={goToArtist}>
          <Image
            source={{uri: data.artists[0].image}}
            style={styles.authorImage}
            resizeMode="cover"
          />
          <Text style={styles.authorName}>{data.artists[0].name}</Text>
        </TouchableOpacity>
      </View>
      <ActionButton
        data={data.tracks}
        action={
          <>
            <TouchableOpacity
              style={styles.button}
              onPress={handleFavoriteToggle}>
              <Icon
                name={isFavorite ? 'add-circle' : 'add-circle-outline'}
                size={24}
                color="#000"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleDownloadToggle}>
              <Icon
                name={
                  isDownloaded
                    ? 'arrow-down-circle'
                    : 'arrow-down-circle-outline'
                }
                size={24}
                color="#000"
              />
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

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
  button: {},
});
