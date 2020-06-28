import update from 'react-addons-update';
import { TOGGLE_LARGE_IMAGE_SONG_SIDEBAR } from '../actions/actionTypes';

const INITIAL_STATE = {
  imageSongShowInSidebar: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_LARGE_IMAGE_SONG_SIDEBAR:
      return update(state, {
        imageSongShowInSidebar: { $set: !state.imageSongShowInSidebar },
      });
    default:
      return state;
  }
};
