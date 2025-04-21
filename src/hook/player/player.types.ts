import {Track} from '../../models/track';

export interface PlayerState {
  isPlaying: boolean;
  isShuffle: boolean;
  isRepeat: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  muted: boolean;
  currentTrack: Track | undefined;
  prevTrack: Track[];
  nextTrack: Track[];
}
