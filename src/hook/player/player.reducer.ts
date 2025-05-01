import {PreviewModel} from '../../models/preview';
import {Track} from '../../models/track';
import {PlayerState} from './player.types';
import {PayloadAction} from '@reduxjs/toolkit';

export const playTrack = (
  state: PlayerState,
  actions: PayloadAction<PreviewModel>,
) => {
  state.isPlaying = true;
  state.currentTime = 0;
  state.duration = actions.payload?.duration || 0;
  state.currentTrack = actions.payload;
  state.prevTrack.push(state.currentTrack as PreviewModel);
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
    state.prevTrack.push(state.currentTrack as PreviewModel);
    state.currentTrack = state.nextTrack.shift() as PreviewModel;
    state.duration = state.currentTrack.duration!;
  }
};

export const prevTrack = (state: PlayerState) => {
  if (state.prevTrack.length > 0) {
    state.isPlaying = true;
    state.currentTime = 0;
    state.nextTrack.unshift(state.currentTrack as PreviewModel);
    state.currentTrack = state.prevTrack.pop() as PreviewModel;
    state.duration = state.currentTrack.duration!;
  } else {
    state.isPlaying = true;
    state.currentTime = 0;
  }
};

export const setNextTrack = (
  state: PlayerState,
  actions: PayloadAction<PreviewModel[]>,
) => {
  state.nextTrack = [...actions.payload];
};

export const seekTrack = (
  state: PlayerState,
  actions: PayloadAction<number>,
) => {
  state.currentTime = actions.payload || 0;
};

export const setVolume = (
  state: PlayerState,
  actions: PayloadAction<number>,
) => {
  state.volume = actions.payload || 1;
};

export const setMuted = (
  state: PlayerState,
  actions: PayloadAction<boolean>,
) => {
  state.muted = actions.payload || false;
};

export const setShuffle = (
  state: PlayerState,
  actions: PayloadAction<boolean>,
) => {
  state.isShuffle = actions.payload || false;
};

export const setRepeat = (
  state: PlayerState,
  actions: PayloadAction<boolean>,
) => {
  state.isRepeat = actions.payload || false;
};
