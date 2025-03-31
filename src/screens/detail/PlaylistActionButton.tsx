import Icon from '@react-native-vector-icons/ionicons';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import useLanguage from '../../hook/useLanguage';

interface PlaylistActionButtonProps {
  style?: any;
  data: any;
}

export default function PlaylistActionButton(props: PlaylistActionButtonProps) {
  const {style} = props;
  const {t} = useLanguage();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(true);
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleDownloadToggle = () => {
    setIsDownloaded(!isDownloaded);
  };

  const handleShuffleToggle = () => {
    setIsShuffle(!isShuffle);
  };

  const handlePlayPauseToggle = () => {
    setIsPlaying(!isPlaying);
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
