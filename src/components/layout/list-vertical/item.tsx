import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {PreviewCartModel} from '../../../models/preview';
import Icon from '@react-native-vector-icons/ionicons';
import useLanguage from '../../../hook/useLanguage';

interface ItemVerticalCompProps {
  data: PreviewCartModel;
  style?: any;
  size?: 'small' | 'medium' | 'large';
  onPress?: (item: PreviewCartModel) => void;
  onRemove?: (item: PreviewCartModel) => void;
  showRemove?: boolean;
}

export default function ItemVerticalComp(props: ItemVerticalCompProps) {
  const {data, style, size, onPress, onRemove, showRemove} = props;
  const styles = createStyles(size || 'small');
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
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>
            {data.name}
          </Text>
          <Text style={styles.artist} numberOfLines={1}>
            {t[data.type]} - {data.artist.name}
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

const createStyles = (size: 'small' | 'medium' | 'large') =>
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
    },
    name: {
      fontSize: 16,
      fontWeight: '500',
    },
    remove: {},
  });
