import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {PreviewModel} from '../../../models/preview';
import Icon from '@react-native-vector-icons/ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../configs/navigation.route';
import routes from '../../../configs/routes';
import useTheme from '../../../hook/useTheme';

type SizeType = 'small' | 'medium' | 'large';

interface ItemCartPreviewCompProps {
  style?: any;
  data: PreviewModel;
  size?: SizeType;
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function ItemCartPreviewComp(props: ItemCartPreviewCompProps) {
  const {style, data, size} = props;
  const {currentTheme} = useTheme();
  const styles = createStyles(
    size === 'large' ? 200 : size === 'medium' ? 150 : 100,
    currentTheme,
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
        <Image
          source={{uri: data.image}}
          style={{
            ...styles.image,
            borderRadius: data.type === 'artist' ? 60 : 8,
          }}
        />
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
          {data.type !== 'artist' && (
            <Text
              style={styles.artist}
              numberOfLines={size === 'large' ? 2 : 1}>
              {data.artists.map(item => item.name).join(', ')}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (size: number, theme: any) =>
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
      color: theme.text,
    },
    artist: {
      fontSize: 14,
      color: theme.gray,
    },
  });
