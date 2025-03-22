import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useTheme from '../../../hook/useTheme';

interface ButtonCompProps {
  text: string;
  leftIcon?: any;
  rightIcon?: any;
  primary?: boolean;
  secondary?: boolean;
  style?: Object;
  onPress?: () => void;
  fullWidth?: boolean;
}

export default function ButtonComp(props: ButtonCompProps) {
  const {
    text,
    leftIcon,
    rightIcon,
    primary,
    secondary,
    style,
    onPress,
    fullWidth,
  } = props;
  const {currentTheme} = useTheme();
  const styles = createStyles(currentTheme);

  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.button,
            fullWidth && {width: '100%'},
            primary && {backgroundColor: currentTheme.primary},
            secondary && {backgroundColor: currentTheme.secondary},
          ]}>
          {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
          <Text style={styles.text}>{text}</Text>
          {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (theme: any) =>
  StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      borderRadius: 32,
      backgroundColor: theme.primary,
    },
    text: {
      color: theme.lightText,
      fontSize: 16,
      fontWeight: 'bold',
    },
    icon: {
      marginHorizontal: 5,
    },
  });
