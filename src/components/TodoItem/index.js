import React from 'react';
import { BsTrash3Fill, BsFillCheckCircleFill } from "react-icons/bs";
import './TodoItem.css';

function TodoItem({
  toggleCheckTodo,
  deleteTodo,
  todoIndex,
  completed,
  text
}) {

  return (
    <li>
      <button
        type='button'
        data-todo-index={todoIndex}
        onClick={toggleCheckTodo}
        className={
          completed
            ? 'todo-item__icon todo-item__icon--completed'
            : 'todo-item__icon todo-item__icon--todo'
        }
      >
        {
          completed && <BsFillCheckCircleFill />
        }
      </button>
      <span>{text}</span>
      <button
        className='delete-todo-btn'
        data-todo-index={todoIndex}
        onClick={deleteTodo}
      >
        <BsTrash3Fill />
      </button>
    </li>
  )
}

export { TodoItem };