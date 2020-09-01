import React from 'react';
import { render } from '@testing-library/react';
import HearthLikedSong from './index';
import { screen } from '@testing-library/dom';

describe('HearthLikedSong testes', () => {
  test('Deve mostrar o ícone de "Favorite" caso a prop liked seja true', () => {
    const { queryByTestId } = render(
      <HearthLikedSong liked />
    );

    const regexToQuery = /hearthlikedsong-icon-favorite/i

    expect(!!queryByTestId(regexToQuery)).toBe(true);
  });

  test('Deve mostrar o ícone de "Favorite Border" caso a prop liked seja false', () => {
    const { queryByTestId } = render(
      <HearthLikedSong liked={false} />
    );

    const regexToQuery = /hearthlikedsong-icon-favoriteborder/i

    expect(!!queryByTestId(regexToQuery)).toBe(true);
  });
});