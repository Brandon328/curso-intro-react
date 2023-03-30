import React from 'react';
import './TodoList.css';

function TodoList(props) {
  return (
    <ul className='todo-main__todo-list'>
      {props.children}
    </ul>
  )
}

export { TodoList };