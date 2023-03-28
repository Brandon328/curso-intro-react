import React from 'react';
import { TodoItem } from './TodoItem';

const todos = [
  {
    text: 'Cortar Cebolla',
    completed: true
  },
  {
    text: 'Tomar el curso de intro a React',
    completed: false
  },
  {
    text: 'Llorar con la llorona',
    completed: false
  },
]

function TodoList() {
  return (
    <ul>
      {
        todos.map((todo, index) =>
          <TodoItem key={index} text={todo.text} completed={todo.completed} />
        )
      }
    </ul>
  )
}

export { TodoList };