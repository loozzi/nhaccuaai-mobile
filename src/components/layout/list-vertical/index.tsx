import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {PreviewModel} from '../../../models/preview';
import ItemVerticalComp from './item';
import {Track} from '../../../models/track';
import useTheme from '../../../hook/useTheme';

type SizeType = 'small' | 'medium' | 'large';

interface ListVerticalCompProps {
  title?: string;
  style?: any;
  data: PreviewModel[];
  size?: SizeType;
  onPress?: (item: PreviewModel) => void;
  onRemove?: (item: PreviewModel) => void;
  showRemove?: boolean;
}

export default function ListVerticalComp(props: ListVerticalCompProps) {
  const {title, style, data, size, onPress, onRemove, showRemove} = props;
  const {currentTheme} = useTheme();
  const styles = createStyles(currentTheme);

  return (
    <View style={style}>
      <View style={styles.container}>
        {title && <Text style={styles.title}>{title}</Text>}
        <View style={styles.list}>
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <ItemVerticalComp
                data={item}
                onPress={onPress}
                onRemove={onRemove}
                showRemove={showRemove}
                size={size}
                key={index}
              />
            )}
            horizontal={false}
            contentContainerStyle={{paddingVertical: 8}}
            style={{flexGrow: 0}}
            nestedScrollEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {},
    title: {
      paddingHorizontal: 16,
      fontSize: 20,
      fontWeight: theme.fontWeight,
      color: theme.text,
    },
    list: {
      marginTop: 4,
    },
  });
