import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormEntregador from './FormEntregador';

test('deve cadastrar entregador com dados válidos', () => {
  const { getByPlaceholderText, getByText } = render(<FormEntregador />);
  
  fireEvent.change(getByPlaceholderText('Nome'), { target: { value: 'John Doe' } });
  fireEvent.change(getByPlaceholderText('CPF'), { target: { value: '12345678910' } });
  fireEvent.click(getByText('Cadastrar'));

  expect(getByText('Cadastro realizado com sucesso!')).toBeInTheDocument();
});

test('deve mostrar erro se CPF já cadastrado', () => {
  const { getByPlaceholderText, getByText } = render(<FormEntregador />);
  
  fireEvent.change(getByPlaceholderText('Nome'), { target: { value: 'John Doe' } });
  fireEvent.change(getByPlaceholderText('CPF'), { target: { value: '12345678909' } }); // CPF duplicado
  fireEvent.click(getByText('Cadastrar'));

  expect(getByText('CPF já cadastrado')).toBeInTheDocument();
});

test('deve mostrar erro se campos obrigatórios estiverem vazios', () => {
  const { getByText } = render(<FormEntregador />);
  
  fireEvent.click(getByText('Cadastrar'));

  expect(getByText('Todos os campos são obrigatórios')).toBeInTheDocument();
});