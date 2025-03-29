import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {PreviewCartModel} from '../../../models/preview';
import ItemCartPreviewComp from './item';

type SizeType = 'small' | 'medium' | 'large';

interface ListHorizontalCompProps {
  title: string;
  style?: any;
  data: PreviewCartModel[];
  size?: SizeType;
}

export default function ListHorizontalComp(props: ListHorizontalCompProps) {
  const {title, style, data, size} = props;
  return (
    <View style={style}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.list}>
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <ItemCartPreviewComp
                data={item}
                style={{marginRight: 16, marginLeft: index === 0 ? 16 : 0}}
                size={size}
              />
            )}
            horizontal={true}
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
    fontSize: 24,
    fontWeight: '500',
  },
  list: {
    marginTop: 4,
  },
});
