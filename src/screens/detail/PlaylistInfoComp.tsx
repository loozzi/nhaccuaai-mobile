import Icon from '@react-native-vector-icons/ionicons';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Playlist} from '../../models/playlist';
import ActionButton from './ActionButton';

interface PlaylistInfoCompProps {
  data: Playlist;
  style?: any;
}

export default function PlaylistInfoComp(props: PlaylistInfoCompProps) {
  const {data, style} = props;

  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleDownloadToggle = () => {
    setIsDownloaded(!isDownloaded);
  };

  return (
    <View style={style}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.info}>
        <TouchableOpacity style={styles.author}>
          <Image
            source={{uri: data.image}}
            style={styles.authorImage}
            resizeMode="cover"
          />
          <Text style={styles.authorName}>{data.author.name}</Text>
        </TouchableOpacity>
        <Text style={styles.description}></Text>
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
