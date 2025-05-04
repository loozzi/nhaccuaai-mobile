import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {useAppDispatch, useAppSelector} from '../../../app/hook';
import {playerActions, selectPlayer} from '../../../hook/player/player.slice';
import {useTrackProgressUpdater} from '../../../services/trackPlayer.service';

interface StackPlayerProps {
  style?: any;
}

export default function StackPlayer(props: StackPlayerProps) {
  const dispatch = useAppDispatch();
  useTrackProgressUpdater();

  const {style} = props;

  const player = useAppSelector(selectPlayer);

  const handlePlayPauseToggle = () => {
    if (player.currentTrack) {
      if (player.isPlaying) {
        // Pause the track
        dispatch(playerActions.pauseTrack());
      } else {
        // Play the track
        dispatch(playerActions.resumeTrack());
      }
    } else {
      console.log('No track available to play');
    }
  };

  const handleAddToFavorites = () => {
    // Add to favorites logic here
    console.log('Add to favorites');
  };

  return (
    <View style={style}>
      <View style={styles.container}>
        <View
          style={{
            ...styles.progress,
            width: `${Math.ceil(
              (player.currentTime / player.duration) * 100000,
            )}%`,
          }}>
          {/* Progress Bar */}
        </View>
        <View style={styles.left}>
          <Image
            source={{uri: player.currentTrack?.image}}
            style={styles.img}
          />
        </View>
        <View style={styles.center}>
          <Text style={styles.name}>{player.currentTrack?.name}</Text>
          <Text style={styles.artist}>
            {player.currentTrack?.artists.map(e => e.name).join(' - ')}
          </Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={handleAddToFavorites}>
            <Icon
              // name={isFavorite ? 'add-circle' : 'add-circle-outline'}
              name="add-circle-outline"
              size={28}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(playerActions.prevTrack())}>
            <Icon name="play-skip-back" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPauseToggle}>
            <Icon
              name={player.isPlaying ? 'pause' : 'play'}
              size={28}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(playerActions.nextTrack())}>
            <Icon name="play-skip-forward" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: 'gray',
    marginHorizontal: 8,
    borderRadius: 4,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    overflow: 'hidden',
    opacity: 0.9,
  },
  left: {},
  progress: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: 'tomato',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  name: {
    color: '#fff',
    fontWeight: '700',
  },
  artist: {
    color: 'rgba(255, 255, 255,0.6)',
  },
  right: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
});
