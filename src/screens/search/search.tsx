import Icon from '@react-native-vector-icons/ionicons';
import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import useLanguage from '../../hook/useLanguage';

interface SearchCompProps {
  search: string;
  setSearch: (search: string) => void;
  style?: any;
}

export default function SearchComp(props: SearchCompProps) {
  const {style, search, setSearch} = props;
  const {t} = useLanguage();

  return (
    <View style={style}>
      <View style={styles.container}>
        <TextInput
          placeholder={t.searchPlaceholder}
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
        <Icon name="search" size={20} color="#000" style={styles.icon} />
        <TouchableOpacity
          onPress={() => setSearch('')}
          style={styles.iconClear}>
          {search.length > 0 && <Icon name="close" size={20} color="#000" />}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    position: 'relative',
    color: '#000',
  },
  input: {
    paddingHorizontal: 16,
    paddingLeft: 42,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    height: 48,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    position: 'absolute',
    left: 16,
    top: 16,
    padding: 8,
  },
  iconClear: {
    position: 'absolute',
    right: 16,
    top: 16,
    padding: 8,
    zIndex: 1,
  },
});
