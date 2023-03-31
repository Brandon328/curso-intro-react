import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoList.css';

function TodoList(props) {
  const {
    loading,
    error,
    todos
  } = React.useContext(TodoContext);
  return (
    <ul className='todo-main__todo-list'>
      {loading && <p className='todo-main__todo-list__info'>Loading...</p>}
      {error && <p>error</p>}
      {(!loading && todos.length == 0) && <p className='todo-main__todo-list__info'>Add your next TODO</p>}
      {props.children}
    </ul>
  )
}

export { TodoList };