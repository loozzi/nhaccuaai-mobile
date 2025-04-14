import {Track} from '../../models/track';
import {PlayerAction, PlayerState} from './player.types';

export const playTrack = (state: PlayerState, actions: PlayerAction<Track>) => {
  state.isPlaying = true;
  state.currentTime = 0;
  state.duration = actions.payload?.duration || 0;
  state.currentTrack = actions.payload;
  state.prevTrack.push(state.currentTrack as Track);
};

export const pauseTrack = (state: PlayerState) => {
  state.isPlaying = false;
};

export const resumeTrack = (state: PlayerState) => {
  state.isPlaying = true;
};

export const nextTrack = (state: PlayerState) => {
  if (state.nextTrack.length > 0) {
    state.isPlaying = true;
    state.currentTime = 0;
    state.prevTrack.push(state.currentTrack as Track);
    state.currentTrack = state.nextTrack.shift() as Track;
    state.duration = state.currentTrack.duration;
  }
};

export const prevTrack = (state: PlayerState) => {
  if (state.prevTrack.length > 0) {
    state.isPlaying = true;
    state.currentTime = 0;
    state.nextTrack.unshift(state.currentTrack as Track);
    state.currentTrack = state.prevTrack.pop() as Track;
    state.duration = state.currentTrack.duration;
  } else {
    state.isPlaying = true;
    state.currentTime = 0;
  }
};

export const seekTrack = (
  state: PlayerState,
  actions: PlayerAction<number>,
) => {
  state.currentTime = actions.payload || 0;
};

export const setVolume = (
  state: PlayerState,
  actions: PlayerAction<number>,
) => {
  state.volume = actions.payload || 1;
};

export const setMuted = (
  state: PlayerState,
  actions: PlayerAction<boolean>,
) => {
  state.muted = actions.payload || false;
};
