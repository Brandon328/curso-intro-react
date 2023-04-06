import React from 'react';
import './TodoInput.css';
import { MdSend } from "react-icons/md";

function TodoInput({ addTodo }) {
  const [todoText, setTodoText] = React.useState('');
  const onChange = (event) => {
    setTodoText(event.target.value);
  }
  return (
    <div className='todo-input-container inactive'>
      {<form className='todo-input'>
        <input type="text" placeholder="TODO" onChange={onChange} value={todoText} required />
        <button type="submit" onClick={(event) => addTodo(event, todoText, setTodoText)}>
          <MdSend />
        </button>
      </form>}
    </div>
  );
}

export { TodoInput };