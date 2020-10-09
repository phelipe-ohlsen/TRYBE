import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectedTaskIndex: undefined,
      isRmvDisabled: true,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTask = this.selectTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  selectTask(task) {
    this.setState({
      selectedTaskIndex: task,
      isRmvDisabled: false,
    })
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTask() {
    this.setState(({ listTodo, selectedTaskIndex }) => {
      return {
        listTodo: listTodo.filter((_,index) => index !== selectedTaskIndex),
        selectedTaskIndex: undefined,
        isRmvDisabled: true,
      }
    });
  }

  render() {
    const { listTodo, isRmvDisabled } = this.state;
    
    return (
      <div className="App">
        <InputTodo
          addTodo={ (todo) => this.addTodo(todo) }
          removeTask={ this.removeTask }
          isRmvDisabled={ isRmvDisabled }
        />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1} onClick={ () => { this.selectTask(index) } } >
                  <Item content={todo} />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
