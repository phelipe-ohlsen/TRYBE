import React, { Component } from 'react';
import PropTypes from 'prop-types'

class InputTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTodo: '',
      selectedTask: '',
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value })
  }

  addItem(value, callback) {
    this.setState({ textTodo: '' })
    callback(value)
  }

  render() {
    const { addTodo, removeTask, isRmvDisabled } = this.props;
    const { textTodo } = this.state;

    return (
      <div className="InputTodo">
        <label htmlFor="inputTodo">Tarefa:</label>
        <input
          id="inputTodo"
          data-testid="input-text"
          type="text"
          value={textTodo}
          onChange={(e) => this.changeTextTodo(e.target.value)}
        />
        <input data-testid="id-add" id="btnAdd" type="button" value="Adicionar" onClick={() => this.addItem(textTodo,addTodo)} />
        <input data-testid="id-remove" id="btnRmv" type="button" value="Remover" onClick={ removeTask } disabled={ (isRmvDisabled) ? true : false } />
      </div>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
