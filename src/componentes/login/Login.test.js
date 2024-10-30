import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

test('deve fazer login com credenciais válidas', () => {
  const setIsAuthenticated = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <Login setIsAuthenticated={setIsAuthenticated} />
  );

  fireEvent.change(getByPlaceholderText('Usuário'), { target: { value: 'testuser' } });
  fireEvent.change(getByPlaceholderText('Senha'), { target: { value: 'password' } });
  fireEvent.click(getByText('Login'));

  expect(localStorage.getItem('token')).toBe('fake-token');
  expect(setIsAuthenticated).toHaveBeenCalledWith(true);
});

test('deve mostrar erro com credenciais inválidas', () => {
  const setIsAuthenticated = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <Login setIsAuthenticated={setIsAuthenticated} />
  );

  fireEvent.change(getByPlaceholderText('Usuário'), { target: { value: 'wronguser' } });
  fireEvent.change(getByPlaceholderText('Senha'), { target: { value: 'wrongpassword' } });
  fireEvent.click(getByText('Login'));

  expect(localStorage.getItem('token')).toBeNull();
});