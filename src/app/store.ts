import {combineReducers, configureStore} from '@reduxjs/toolkit';
import playerReducer from '../hook/player/player.slice';

const rootReducer = combineReducers({
  player: playerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
