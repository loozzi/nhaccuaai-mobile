import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {PreviewCartModel} from '../../../models/preview';
import Icon from '@react-native-vector-icons/ionicons';

type SizeType = 'small' | 'medium' | 'large';

interface ItemCartPreviewCompProps {
  style?: any;
  data: PreviewCartModel;
  size?: SizeType;
}

export default function ItemCartPreviewComp(props: ItemCartPreviewCompProps) {
  const {style, data, size} = props;

  const styles = createStyles(
    size === 'large' ? 200 : size === 'medium' ? 150 : 100,
  );
  return (
    <View style={style}>
      <TouchableOpacity style={styles.container}>
        <Image source={{uri: data.image}} style={styles.image} />
        <Icon
          style={styles.playIcon}
          name="play-circle"
          size={24}
          color={'#fff'}
        />
        <View style={{marginTop: 8}}>
          <Text style={styles.title} numberOfLines={1}>
            {data.name}
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            {data.artist}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (size: number) =>
  StyleSheet.create({
    container: {
      width: size,
    },
    image: {
      width: size,
      height: size,
      borderRadius: 8,
      objectFit: 'cover',
      overflow: 'hidden',
    },
    playIcon: {
      position: 'absolute',
      top: 8,
      right: 8,
      zIndex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
    },
    artist: {
      fontSize: 14,
      color: '#666',
    },
  });
