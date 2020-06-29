import update from 'react-addons-update';
import {
  TOGGLE_SONG_PLAY,
  PLAY_A_SONG,
  UPDATE_VOLUME,
  TOGGLE_REPEAT,
} from '../actions/actionTypes';
import { djonga } from '../../utils/mock/songs';

const INITIAL_STATE = {
  currentSong: {
    ...djonga[0],
    isPlaying: false,
  },
  controls: {
    repeat: false,
    volume: 1,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SONG_PLAY:
      return update(state, {
        currentSong: {
          isPlaying: { $set: !state.currentSong.isPlaying },
        },
      });
    case PLAY_A_SONG:
      return update(state, {
        currentSong: { $set: action.payload },
      });
    case UPDATE_VOLUME:
      return update(state, {
        controls: {
          volume: { $set: action.payload },
        },
      });
    case TOGGLE_REPEAT:
      return update(state, {
        controls: {
          repeat: { $set: !state.controls.repeat },
        },
      });
    default:
      return state;
  }
};
