import {Track} from '../../models/track';

export interface PlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  muted: boolean;
  currentTrack: Track | undefined;
  prevTrack: Track[];
  nextTrack: Track[];
}

export interface PlayerAction<T> {
  type: string;
  payload?: T;
}
