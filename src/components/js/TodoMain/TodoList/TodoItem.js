import React from 'react';
import completedIcon from '../../../../img/completed-icon.svg';

function TodoItem(props) {
  return (
    <li>
      {
        props.completed
          ? <div className='todo-item__icon todo-item__icon--completed'><img src={completedIcon} alt="completed icon" /></div>
          : <div className='todo-item__icon todo-item__icon--todo'></div>
      }
      <span>{props.text}</span>
    </li>
  )
}

export { TodoItem };