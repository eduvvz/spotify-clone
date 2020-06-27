import update from 'react-addons-update';
import { TOGGLE_SONG_PLAY } from '../actions/actionTypes';
import { racionaisMC } from '../../mock/songs';

const INITIAL_STATE = {
  currentSong: {
    name: 'Estilo Cachorro',
    artists: ['Racionais Mc', 'Mano Brown'],
    image:
      'https://upload.wikimedia.org/wikipedia/pt/6/62/Nada_como_um_dia_após_o_outro_dia.jpg',
    url: racionaisMC.estiloCachorro,
    duration: 2,
    isPlaying: false,
    liked: true,
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
    default:
      return state;
  }
};
