import React, { Component } from 'react';

import Todo from './components/Todo'
import AddTodo from './components/AddTodo';


class App extends Component {
  
  state = {
    todos: [
      { id: 1, content: 'Assitir a LiveCoding do Marco' },
      { id: 2, content: 'estudar React' },
      { id: 3, content: 'Estudar Nodejs' }
    ]
  }
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    
    this.setState({
      todos
    })

  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todo  deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
