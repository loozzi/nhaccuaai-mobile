import {PreviewModel} from '../../models/preview';
import {Track} from '../../models/track';

export interface PlayerState {
  isPlaying: boolean;
  isShuffle: boolean;
  isRepeat: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  muted: boolean;
  currentTrack: PreviewModel | undefined;
  prevTrack: PreviewModel[];
  nextTrack: PreviewModel[];
}
