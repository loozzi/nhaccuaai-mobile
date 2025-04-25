import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {PreviewModel} from '../../../models/preview';
import Icon from '@react-native-vector-icons/ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../configs/navigation.route';
import routes from '../../../configs/routes';

type SizeType = 'small' | 'medium' | 'large';

interface ItemCartPreviewCompProps {
  style?: any;
  data: PreviewModel;
  size?: SizeType;
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function ItemCartPreviewComp(props: ItemCartPreviewCompProps) {
  const {style, data, size} = props;
  const styles = createStyles(
    size === 'large' ? 200 : size === 'medium' ? 150 : 100,
  );
  const navigation = useNavigation<NavigationProps>();

  const handleGoToDetail = () => {
    navigation.push(routes.detail, {
      id: data.id,
      permalink: data.permalink,
      type: data.type,
    });
  };

  return (
    <View style={style}>
      <TouchableOpacity style={styles.container} onPress={handleGoToDetail}>
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
            {data.artist.name}
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
