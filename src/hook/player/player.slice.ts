import {createSlice} from '@reduxjs/toolkit';
import {PlayerState} from './player.types';
import {
  playTrack,
  pauseTrack,
  resumeTrack,
  nextTrack,
  prevTrack,
  seekTrack,
  setVolume,
  setMuted,
  setShuffle,
  setRepeat,
  setNextTrack,
} from './player.reducer';

const initialState: PlayerState = {
  isPlaying: false,
  isShuffle: false,
  isRepeat: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  muted: false,
  currentTrack: undefined,
  prevTrack: [],
  nextTrack: [],
};

export const playerSlice = createSlice({
  initialState,
  name: 'player',
  reducers: {
    playTrack,
    pauseTrack,
    resumeTrack,
    nextTrack,
    prevTrack,
    seekTrack,
    setVolume,
    setMuted,
    setShuffle,
    setRepeat,
    setNextTrack,
  },
});

export const playerActions = playerSlice.actions;

// Selections
export const selectPlayer = (state: {player: PlayerState}) => state.player;
export const selectIsPlaying = (state: {player: PlayerState}) =>
  state.player.isPlaying;
export const selectIsShuffle = (state: {player: PlayerState}) =>
  state.player.isShuffle;
export const selectCurrentTime = (state: {player: PlayerState}) =>
  state.player.currentTime;
export const selectDuration = (state: {player: PlayerState}) =>
  state.player.duration;
export const selectVolume = (state: {player: PlayerState}) =>
  state.player.volume;
export const selectMuted = (state: {player: PlayerState}) => state.player.muted;
export const selectCurrentTrack = (state: {player: PlayerState}) =>
  state.player.currentTrack;
export const selectPrevTrack = (state: {player: PlayerState}) =>
  state.player.prevTrack;
export const selectNextTrack = (state: {player: PlayerState}) =>
  state.player.nextTrack;

const playerReducer = playerSlice.reducer;
export default playerReducer;
