import {
  TOGGLE_SONG_PLAY,
  UPDATE_VOLUME,
  TOGGLE_REPEAT,
  TOGGLE_LARGE_IMAGE_SONG_SIDEBAR,
  PLAY_A_SONG,
} from './actionTypes';

export function toggleSongPlay() {
  return {
    type: TOGGLE_SONG_PLAY,
  };
}

export function playASong(payload) {
  return {
    type: PLAY_A_SONG,
    payload,
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

export function toggleLargeImageSongSidebar() {
  return {
    type: TOGGLE_LARGE_IMAGE_SONG_SIDEBAR,
  };
}
