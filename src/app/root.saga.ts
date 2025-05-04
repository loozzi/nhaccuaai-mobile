import {all} from 'redux-saga/effects';
import playerSaga from '../hook/player/player.saga';

export default function* rootSaga() {
  yield all([playerSaga()]);
}
