import React, { useState } from 'react';
import { BsTrash3Fill, BsFillCheckCircleFill } from "react-icons/bs";
import { IoSave } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import './TodoItem.css';

function TodoItem({
  toggleCheckTodo,
  deleteTodo,
  todoIndex,
  completed,
  updateTodo,
  text
}) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const editTodo = e => {
    setEditing(true);
  }
  const cancelEdit = () => {
    setEditing(false);
  }

  return (
    <li>
      {
        editing ?
          <form
            className='editForm'
            data-todo-index={todoIndex}
            onSubmit={e => {
              e.preventDefault();
              updateTodo(e, newText);
              cancelEdit();
            }}>
            <button
              type='submit'
              data-todo-index={todoIndex}
              className='todo-btn'
            >
              <IoSave />
            </button>
            <input
              type="text"
              value={newText}
              onChange={e => setNewText(e.target.value)}
              focus="true"
            />
            <button
              onClick={cancelEdit}
              className='todo-btn'
            >
              <FcCancel />
            </button>
          </form>
          :
          <>
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

            <span
              onClick={editTodo}
            >
              {text}
            </span>

            <button
              className='todo-btn'
              data-todo-index={todoIndex}
              onClick={deleteTodo}
            >
              <BsTrash3Fill />
            </button>
          </>
      }
    </li>
  )
}

export { TodoItem };