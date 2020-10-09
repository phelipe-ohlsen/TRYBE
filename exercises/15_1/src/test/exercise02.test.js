import React from 'react';
import { render, fireEvent, cleanup, queryByText } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Input field test', () => {
  it('Adding multiple tasks in the application', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

    const { getByText, getByTestId } = render(<App />);
    const buttonAdd = getByTestId('id-add');
    const inputText = getByTestId('input-text');

    listTodo.forEach(task => {
      fireEvent.change(inputText, { target: { value: task } });
      fireEvent.click(buttonAdd);
      expect(inputText.value).toBe('');
      expect(getByText(task)).toBeInTheDocument();
    });
  })
});

describe('Item component test', () => {
  it('should render the string value passed as prop to the component', () => {
    const { getByText } = render(<Item content="code" />);
    expect(getByText('code')).toBeInTheDocument();
  })
})