import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {PreviewCartModel} from '../../../models/preview';
import ItemVerticalComp from './item';

type SizeType = 'small' | 'medium' | 'large';

interface ListVerticalCompProps {
  title: string;
  style?: any;
  data: PreviewCartModel[];
  size?: SizeType;
  onPress?: (item: PreviewCartModel) => void;
  onRemove?: (item: PreviewCartModel) => void;
  showRemove?: boolean;
}

export default function ListVerticalComp(props: ListVerticalCompProps) {
  const {title, style, data, size, onPress, onRemove, showRemove} = props;
  return (
    <View style={style}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
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

const styles = StyleSheet.create({
  container: {},
  title: {
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: '500',
  },
  list: {
    marginTop: 4,
  },
});
