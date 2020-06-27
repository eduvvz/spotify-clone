import update from 'react-addons-update';
import {
  TOGGLE_SONG_PLAY,
  UPDATE_VOLUME,
  TOGGLE_REPEAT,
} from '../actions/actionTypes';
import { racionaisMC } from '../../mock/songs';

const INITIAL_STATE = {
  currentSong: {
    ...racionaisMC[0],
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
