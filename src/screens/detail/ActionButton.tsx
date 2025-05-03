import Icon from '@react-native-vector-icons/ionicons';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {
  playerActions,
  selectIsPlaying,
  selectIsShuffle,
} from '../../hook/player/player.slice';
import useLanguage from '../../hook/useLanguage';
import {PreviewModel} from '../../models/preview';
import useTheme from '../../hook/useTheme';

interface ActionButtonProps {
  style?: any;
  data: PreviewModel[];
  action: any;
}

export default function ActionButton(props: ActionButtonProps) {
  const {style, data, action} = props;
  const {currentTheme} = useTheme();
  const {t} = useLanguage();
  const dispatch = useAppDispatch();

  // Player State
  const isPlaying = useAppSelector(selectIsPlaying);
  const isShuffle = useAppSelector(selectIsShuffle);

  const handleShuffleToggle = () => {
    dispatch(playerActions.setShuffle(!isShuffle));
  };

  const handlePlayPauseToggle = () => {
    if (data) {
      if (isPlaying) {
        dispatch(playerActions.pauseTrack());
      } else if (isShuffle) {
        console.log(data[0]);
        dispatch(playerActions.playTrack(data[0]));
      } else {
        const currentTrack = data[0];
        console.log(currentTrack);
        dispatch(playerActions.playTrack(data[0]));
        dispatch(
          playerActions.setNextTrack(
            data.filter(e => e.id !== currentTrack.id),
          ),
        );
      }
    } else {
      console.log('No track available to play');
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.left}>{action}</View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.button} onPress={handleShuffleToggle}>
          <Icon name="shuffle" size={32} color={isShuffle ? 'green' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePlayPauseToggle}>
          <Icon
            name={isPlaying ? 'pause-circle' : 'play-circle'}
            size={56}
            color={currentTheme.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  button: {},
});
