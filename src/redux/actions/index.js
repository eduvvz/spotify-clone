import { TOGGLE_SONG_PLAY, UPDATE_VOLUME, TOGGLE_REPEAT } from './actionTypes';

export function toggleSongPlay() {
  return {
    type: TOGGLE_SONG_PLAY,
  };
}

export function updateVolume(payload) {
  return {
    type: UPDATE_VOLUME,
    payload,
  };
}

export function toggleRepeat() {
  return {
    type: TOGGLE_REPEAT,
  };
}
