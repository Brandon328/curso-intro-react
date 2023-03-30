import React from 'react';
import './TodoList.css';

function TodoList(props) {
  return (
    <ul className='todo-main__todo-list'>
      {props.loading && <p className='todo-main__todo-list__info'>Loading...</p>}
      {props.error && <p>props.error</p>}
      {(!props.loading && props.todos.length == 0) && <p className='todo-main__todo-list__info'>Add your next TODO</p>}
      {props.children}
    </ul>
  )
}

export { TodoList };