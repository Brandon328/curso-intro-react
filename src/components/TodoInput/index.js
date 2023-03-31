import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoInput.css';
import sendIcon from '../../img/send-icon.svg';

function TodoInput() {
  const { addTodo } = React.useContext(TodoContext);
  return (
    <div className='todo-input-container inactive'>
      <form className='todo-input'>
        <input type="text" placeholder="TODO" />
        <button type="submit" onClick={addTodo}>
          <img src={sendIcon} alt="send icon" />
        </button>
      </form>
    </div>
  );
}

export { TodoInput };