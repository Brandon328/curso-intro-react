import React from 'react';
import './TodoInput.css';
import sendIcon from '../../img/send-icon.svg';

function TodoInput() {
  return (
    <div className='todo-input-container inactive'>
      <form className='todo-input'>
        <input type="text" placeholder="TODO" />
        <button type="submit">
          <img src={sendIcon} alt="send icon" />
        </button>
      </form>
    </div>
  );
}

export { TodoInput };