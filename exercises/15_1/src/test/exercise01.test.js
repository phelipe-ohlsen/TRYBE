import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Testando o botão de adicionar', () => {
  it('Verifica se o botão é renderizado', () => {
    const { getByTestId } = render(<App />);
    const buttonAdd = getByTestId('id-add');

    expect(buttonAdd).toBeInTheDocument();
  });
  
  it('Verifica se o botão contém o texto "Adicionar"', () => {
    const { getByTestId } = render(<App />);
    const buttonAdd = getByTestId('id-add');

    expect(buttonAdd.value).toBe('Adicionar');
  });

  it('Ao clicar no botão, a tarefa digitada pelo o usuário precisa ser salva.', () => {
    const { queryByText, getByTestId } = render(<App />);
    const buttonAdd = getByTestId('id-add');
    const inputText = getByTestId('input-text');
    const mockTask = 'sleep';

    fireEvent.change(inputText, { target: { value: mockTask } })
    fireEvent.click(buttonAdd);

    expect(queryByText(mockTask)).toBeInTheDocument();
    expect(inputText.value).toBe('');
  });
});
