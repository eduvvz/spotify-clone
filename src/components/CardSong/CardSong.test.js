import React from 'react';
import { render } from '@testing-library/react';
import CardSong from './index';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { screen, fireEvent } from '@testing-library/dom';
import { djonga } from '../../utils/mock/songs';

const songMock = djonga[0];

describe('CardSong testes', () => {
  test('Deve exibir o nome da música', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CardSong song={songMock} />
      </Provider>
    );

    expect(getByTestId('cardsong-name').innerHTML.includes(songMock.name)).toBe(
      true
    );
  });

  test('Deve exibir o artista da música', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CardSong song={songMock} />
      </Provider>
    );

    const artistsName = songMock.artists[0];

    expect(getByTestId('cardsong-artist').innerHTML.includes(artistsName)).toBe(
      true
    );
  });

  test('Deve exibir a imagem da música', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CardSong song={songMock} />
      </Provider>
    );

    expect(getByTestId('cardsong-image').getAttribute('src')).toBe(songMock.image);
  });
});
