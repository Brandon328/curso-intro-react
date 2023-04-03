import React from 'react';
import { TodoContext } from '../TodoContext';
import completedIcon from '../../img/completed-icon.svg';
import { BsTrash3Fill, BsFillCheckCircleFill } from "react-icons/bs";
import './TodoItem.css';

function TodoItem(props) {
  const {
    toggleCheckTodo,
    deleteTodo
  } = React.useContext(TodoContext);
  return (
    <li>
      <button
        type='button'
        data-todo-index={props.todoIndex}
        onClick={toggleCheckTodo}
        className={
          props.completed
            ? 'todo-item__icon todo-item__icon--completed'
            : 'todo-item__icon todo-item__icon--todo'
        }
      >
        {
          props.completed && <BsFillCheckCircleFill />
        }
      </button>
      <span>{props.text}</span>
      <button
        className='delete-todo-btn'
        data-todo-index={props.todoIndex}
        onClick={deleteTodo}
      >
        <BsTrash3Fill />
      </button>
    </li>
  )
}

export { TodoItem };