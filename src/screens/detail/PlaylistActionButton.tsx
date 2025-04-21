import Icon from '@react-native-vector-icons/ionicons';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import useLanguage from '../../hook/useLanguage';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {
  playerActions,
  selectIsPlaying,
  selectIsShuffle,
} from '../../hook/player/player.slice';
import {Track} from '../../models/track';

interface PlaylistActionButtonProps {
  style?: any;
  data: Track[];
}

export default function PlaylistActionButton(props: PlaylistActionButtonProps) {
  const {style, data} = props;
  const {t} = useLanguage();
  const dispatch = useAppDispatch();

  // Player State
  const isPlaying = useAppSelector(selectIsPlaying);
  const isShuffle = useAppSelector(selectIsShuffle);

  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleDownloadToggle = () => {
    setIsDownloaded(!isDownloaded);
  };

  const handleShuffleToggle = () => {
    dispatch(playerActions.setShuffle(!isShuffle));
  };

  const handlePlayPauseToggle = () => {
    if (isPlaying) {
      dispatch(playerActions.pauseTrack());
    } else if (isShuffle) {
      dispatch(playerActions.playTrack(data[0]));
    } else {
      const currentTrack = data[0];
      dispatch(playerActions.playTrack(data[0]));
      dispatch(
        playerActions.setNextTrack(data.filter(e => e.id !== currentTrack.id)),
      );
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.left}>
        <TouchableOpacity style={styles.button} onPress={handleFavoriteToggle}>
          <Icon
            name={isFavorite ? 'add-circle' : 'add-circle-outline'}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleDownloadToggle}>
          <Icon
            name={
              isDownloaded ? 'arrow-down-circle' : 'arrow-down-circle-outline'
            }
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.button} onPress={handleShuffleToggle}>
          <Icon name="shuffle" size={32} color={isShuffle ? 'green' : 'gray'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePlayPauseToggle}>
          <Icon
            name={isPlaying ? 'pause-circle' : 'play-circle'}
            size={56}
            color="#000"
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
