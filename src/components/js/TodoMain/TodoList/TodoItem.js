import React from 'react';
import completedIcon from '../../../../img/completed-icon.svg';
import trashIcon from '../../../../img/trash-icon.svg';

function TodoItem(props) {

  return (
    <li>
      <button
        type='button'
        data-todo-index={props.todoIndex}
        onClick={props.toggleCheckTodo}
        className={
          props.completed
            ? 'todo-item__icon todo-item__icon--completed'
            : 'todo-item__icon todo-item__icon--todo'
        }
      >
        {
          props.completed && <img src={completedIcon} alt="completed icon" data-todo-index={props.todoIndex} />
        }
      </button>
      <span>{props.text}</span>
      <button
        className='delete-todo-btn'
        data-todo-index={props.todoIndex}
        onClick={props.deleteTodo}
      >
        <img src={trashIcon} alt="trash icon" />
      </button>
    </li>
  )
}

export { TodoItem };