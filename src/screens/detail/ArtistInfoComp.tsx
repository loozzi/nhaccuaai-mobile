import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Artist} from '../../models/artist';
import useLanguage from '../../hook/useLanguage';
import ActionButton from './ActionButton';

interface ArtistInfoCompProps {
  data: Artist;
  style?: any;
}

export default function ArtistInfoComp(props: ArtistInfoCompProps) {
  const {data, style} = props;
  const {t} = useLanguage();

  const handleFollowToggle = () => {
    // Logic to follow/unfollow the artist
  };

  return (
    <View style={style}>
      <View style={styles.info}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.overlay}></View>
        <Text style={styles.authorName}>{data.name}</Text>
      </View>
      <ActionButton
        data={data.tracks}
        action={
          <>
            <TouchableOpacity
              style={styles.followButton}
              onPress={handleFollowToggle}>
              <Text style={styles.followButtonText}>{t.follow}</Text>
            </TouchableOpacity>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 240,
    objectFit: 'cover',
    alignSelf: 'center',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    height: 240,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  authorName: {
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 4,
    left: 16,
    fontSize: 40,
    width: '100%',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    paddingLeft: 16,
    color: '#333',
  },
  followButton: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: 4,
  },
  followButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
