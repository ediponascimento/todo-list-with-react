import React from 'react'

const Todo = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return(        
        <li onClick={() => { deleteTodo(todo.id) } } className="collection-item" key={todo.id}>{todo.content}</li>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  )

  return(
    <ul className="collection">
      { todoList }
    </ul>
  )
}

export default Todo;