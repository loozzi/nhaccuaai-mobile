import {PayloadAction} from '@reduxjs/toolkit';
import TrackPlayer from 'react-native-track-player';
import {call, select, takeLatest} from 'redux-saga/effects';
import {PreviewModel} from '../../models/preview';
import {Track, TrackPlayerModel} from '../../models/track';
import trackService from '../../services/track.service';
import {
  playerActions,
  selectCurrentTrack,
  selectPrevTrack,
} from './player.slice';

function* playTrack(actions: PayloadAction<PreviewModel>) {
  const trackDetail: Track = yield call(
    [trackService, trackService.getTrackByPermalink],
    actions.payload.permalink,
  );

  yield call(TrackPlayer.reset);

  if (trackDetail) {
    const track: TrackPlayerModel = {
      id: trackDetail.id,
      title: trackDetail.name,
      artist: trackDetail.artists
        ? trackDetail.artists.map((artist: any) => artist.name).join(', ')
        : 'Unknown',
      artwork: trackDetail.image || 'https://via.placeholder.com/150',
      url: trackService.getPlayUrl(trackDetail.permalink),
      duration: trackDetail.duration / 1000,
      album: trackDetail.album ? trackDetail.album.name : 'Unknown',
    };
    yield call(() => TrackPlayer.add(track));
    yield call(() => TrackPlayer.play());
  } else {
    console.error('Track not found');
  }
}

function* pauseTrack() {
  yield call(() => TrackPlayer.pause());
}

function* resumeTrack() {
  yield call(() => TrackPlayer.play());
}

function* setNextTrack(actions: PayloadAction<PreviewModel[]>) {
  console.log('Setting next track:', actions.payload);
}

function* fetchNextTrack() {
  const currentTrack: PreviewModel = yield select(selectCurrentTrack);

  yield call(playTrack, {
    type: playerActions.playTrack.type,
    payload: currentTrack,
  });
}

function* fetchPrevTrack() {
  const prevTrack: PreviewModel[] = yield select(selectPrevTrack);
  if (prevTrack.length > 0) {
    yield call(playTrack, {
      type: playerActions.playTrack.type,
      payload: prevTrack[prevTrack.length - 1],
    });
  } else {
    yield call(() => TrackPlayer.seekTo(0));
    yield call(TrackPlayer.play);
  }
}

function* seekTrack(actions: PayloadAction<number>) {
  const currentTrack: PreviewModel = yield select(selectCurrentTrack);
  if (currentTrack) {
    yield call(() => TrackPlayer.seekTo(actions.payload));
  } else {
    console.error('No track available to seek');
  }
}

export default function* playerSaga() {
  yield takeLatest(playerActions.playTrack.type, playTrack);
  yield takeLatest(playerActions.pauseTrack.type, pauseTrack);
  yield takeLatest(playerActions.resumeTrack.type, resumeTrack);
  // yield takeLatest(playerActions.setNextTrack.type, setNextTrack);
  yield takeLatest(playerActions.nextTrack.type, fetchNextTrack);
  yield takeLatest(playerActions.prevTrack.type, fetchPrevTrack);
  yield takeLatest(playerActions.seekTrack.type, seekTrack);
}
