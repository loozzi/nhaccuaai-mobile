import {useEffect} from 'react';
import TrackPlayer, {Capability, Event} from 'react-native-track-player';
import {store} from '../app/store';
import {playerActions} from '../hook/player/player.slice';
import {useAppDispatch} from '../app/hook';

export const setupTrackPlayer = async () => {
  console.log('TrackPlayer setup complete');
  TrackPlayer.reset();

  TrackPlayer.updateOptions({
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.SeekTo,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
    notificationCapabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.SeekTo,
    ],
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    store.dispatch(playerActions.resumeTrack());
  });

  TrackPlayer.addEventListener(Event.RemotePause, () => {
    store.dispatch(playerActions.pauseTrack());
  });

  TrackPlayer.addEventListener(Event.RemoteNext, async () => {
    store.dispatch(playerActions.nextTrack());
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, async () => {
    const progress = await TrackPlayer.getProgress();
    if (progress.position < 10) {
      store.dispatch(playerActions.prevTrack());
    } else {
      await TrackPlayer.seekTo(0);
    }
    await TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.PlaybackQueueEnded, async ({position}) => {
    // Auto-next khi hết bài
    store.dispatch(playerActions.nextTrack());
  });

  // Track change listener
  //   TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async data => {
  //     const {nextTrack} = data;
  //     if (nextTrack !== null) {
  //       const track = await TrackPlayer.getTrack(nextTrack);
  //       //   console.log('Track changed to:', track);
  //       // store.dispatch(setCurrentTrack(track));
  //     }
  //   });

  TrackPlayer.addEventListener(Event.RemoteSeek, async data => {
    const {position} = data;
    store.dispatch(playerActions.seekTrack(position));
  });

  TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, async event => {
    const {position} = event;
    store.dispatch(playerActions.seekTrack(position * 1000));
  });
};

// hooks/useTrackProgressUpdater.ts

export const useTrackProgressUpdater = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const interval = setInterval(async () => {
      const {position} = await TrackPlayer.getProgress();
      dispatch(playerActions.setCurrentTime(position));
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);
};
