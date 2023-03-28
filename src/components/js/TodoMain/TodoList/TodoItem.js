import React from 'react';
import completedIcon from '../../../../img/completed-icon.svg';

function TodoItem(props) {
  return (
    <li>
      {
        props.completed
          ? <div><img src={completedIcon} alt="completed icon" /></div>
          : <div></div>
      }
      <span>{props.text}</span>
    </li>
  )
}

export { TodoItem };