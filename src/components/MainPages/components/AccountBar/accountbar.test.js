import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import AccountBar from './index';
import { Provider } from 'react-redux';
import store from '../../../../redux/store';
import { screen, fireEvent } from '@testing-library/dom';

describe('AccountBar testes', () => {
  test('não deve mostrar o popover inicialmente.', () => {
    const { queryByTestId, container } = render(
      <Provider store={store}>
        <AccountBar positionScroll={0} />
      </Provider>
    );

    expect(queryByTestId(/accountbar-paper-account-options/i)).toBeNull();
  });

  test('deve mostrar o popover assim que o botão profile é clicado.', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <AccountBar positionScroll={0} />
      </Provider>
    );

    const btnProfile = screen.getByTestId('accountbar-btn-profile');
    fireEvent.click(btnProfile);

    expect(!!queryByTestId(/accountbar-paper-account-options/i)).toBe(true);
  });

  test('Deve mostrar o fundo transparente antes de 40px rolados pelo scroll', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <AccountBar positionScroll={0} />
      </Provider>
    );

    const accountBar = screen.getByTestId('accountbar-container');
    const styles = window.getComputedStyle(accountBar);
    
    expect(styles.backgroundColor).toBe('rgba(4, 4, 4, 0)');;
  });

  test('Deve mostrar o fundo com cor depois de 40px rolados pelo scroll', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <AccountBar positionScroll={50} />
      </Provider>
    );

    const accountBar = screen.getByTestId('accountbar-container');
    const styles = window.getComputedStyle(accountBar);
    
    expect(styles.backgroundColor).toBe('rgb(4, 4, 4)');;
  });
});
