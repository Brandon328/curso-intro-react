import React from 'react';
import './TodoList.css';

function TodoList(props) {

  return (
    <ul className='todo-main__todo-list'>
      {props.loading && props.onLoading()}
      {props.error && props.onError()}
      {(!props.loading && props.todos.length === 0) && props.onEmpty()}
      {!props.loading && props.todos.map(props.render)}
    </ul>
  )
}

export { TodoList };