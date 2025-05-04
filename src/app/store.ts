import {combineReducers, configureStore} from '@reduxjs/toolkit';
import playerReducer from '../hook/player/player.slice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.saga';

const rootReducer = combineReducers({
  player: playerReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: true}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
