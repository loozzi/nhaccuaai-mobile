import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {PreviewModel} from '../../../models/preview';
import Icon from '@react-native-vector-icons/ionicons';
import useLanguage from '../../../hook/useLanguage';
import useTheme from '../../../hook/useTheme';

interface ItemVerticalCompProps {
  data: PreviewModel;
  style?: any;
  size?: 'small' | 'medium' | 'large';
  onPress?: (item: PreviewModel) => void;
  onRemove?: (item: PreviewModel) => void;
  showRemove?: boolean;
}

export default function ItemVerticalComp(props: ItemVerticalCompProps) {
  const {data, style, size, onPress, onRemove, showRemove} = props;
  const {currentTheme} = useTheme();
  const styles = createStyles(size || 'small', currentTheme);
  const {t} = useLanguage();

  const handlePressRemove = () => {
    if (onRemove) {
      onRemove(data);
    }
  };
  const handlePress = () => {
    if (onPress) {
      onPress(data);
    }
  };

  return (
    <View style={style}>
      <TouchableOpacity style={styles.controller} onPress={handlePress}>
        <Image
          source={{uri: data.image}}
          style={{
            ...styles.image,
            borderRadius: data.type === 'artist' ? 60 : 8,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>
            {data.name}
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            {t[data.type]} -{' '}
            {data.type !== 'artist' &&
              data.artists.map(item => item.name).join(', ')}
          </Text>
        </View>
        {showRemove && (
          <TouchableOpacity onPress={handlePressRemove} style={styles.remove}>
            <Icon name="close" size={24} color="gray" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (size: 'small' | 'medium' | 'large', theme: any) =>
  StyleSheet.create({
    controller: {
      flexDirection: 'row',
      paddingVertical: 8,
      paddingHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: size === 'small' ? 40 : size === 'medium' ? 50 : 60,
      height: size === 'small' ? 40 : size === 'medium' ? 50 : 60,
      borderRadius: 8,
      marginRight: 12,
    },
    info: {
      flex: 1,
    },
    artist: {
      fontSize: 14,
      color: theme.gray,
    },
    name: {
      fontSize: 16,
      fontWeight: theme.fontWeight,
      color: theme.text,
    },
    remove: {},
  });
