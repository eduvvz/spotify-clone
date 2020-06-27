const INITIAL_STATE = {
  currentSong: {
    name: 'Estilo Cachorro',
    artists: ['Racionais Mc', 'Mano Brown'],
    image:
      'https://upload.wikimedia.org/wikipedia/pt/6/62/Nada_como_um_dia_após_o_outro_dia.jpg',
    duration: 2,
    isPlayng: false,
    liked: true,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
