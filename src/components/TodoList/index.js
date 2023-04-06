import React from 'react';
import { TodoLoader } from '../TodoLoader';
import './TodoList.css';

function TodoList({
  loading,
  error,
  todos,
  children
}) {

  return (
    <ul className='todo-main__todo-list'>
      {loading && <TodoLoader />}
      {error && <p>error</p>}
      {(!loading && todos.length == 0) && <p className='todo-main__todo-list__info'>Add your next TODO</p>}
      {children}
    </ul>
  )
}

export { TodoList };