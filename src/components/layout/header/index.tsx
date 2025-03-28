import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../configs/routes';
import Icon from '@react-native-vector-icons/ionicons';

interface HeaderCompProps {
  style?: any;
  title: string;
  leftSide?: any;
  rightSide?: any;
}

export default function HeaderComp(props: HeaderCompProps) {
  const {style, title, leftSide, rightSide} = props;
  const navigation: {push: any} = useNavigation();

  return (
    <View style={style}>
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <TouchableOpacity onPress={() => navigation.push(routes.auth.signin)}>
            <Icon name="person-circle-outline" size={32} color="#000" />
          </TouchableOpacity>
          {leftSide}
          <View style={styles.center}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View style={styles.rightSide}>{rightSide}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  center: {},
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
