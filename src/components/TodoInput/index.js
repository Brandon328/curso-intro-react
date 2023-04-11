import React from 'react';
import './TodoInput.css';
import { MdSend } from "react-icons/md";

function TodoInput({ addTodo, loading }) {
  const [todoText, setTodoText] = React.useState('');
  const onChange = (event) => {
    setTodoText(event.target.value);
  }
  return (
    <div className='todo-input-container inactive'>
      {<form className='todo-input'>
        <input
          type="text"
          placeholder="TODO"
          onChange={onChange}
          value={todoText}
          disabled={loading}
          required
        />
        <button
          type="submit"
          disabled={loading}
          onClick={(event) => addTodo(event, todoText, setTodoText)}
        >
          <MdSend />
        </button>
      </form>}
    </div>
  );
}

export { TodoInput };