import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useTheme from '../../../hook/useTheme';

interface TextButtonCompProps {
  text: string;
  onPress: () => void;
  primary?: boolean;
  secondary?: boolean;
  style?: Object;
  fontSize?: number;
}

export default function TextButtonComp(props: TextButtonCompProps) {
  const {text, onPress, primary, secondary, fontSize, style} = props;
  const {currentTheme} = useTheme();
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            primary && {color: currentTheme.primary},
            secondary && {color: currentTheme.secondary},
            Boolean(fontSize) && {fontSize: fontSize},
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
