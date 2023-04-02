import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoInput.css';
import sendIcon from '../../img/send-icon.svg';

function TodoInput() {
  const { addTodo } = React.useContext(TodoContext);
  const [todoText, setTodoText] = React.useState('');
  const onChange = (event) => {
    setTodoText(event.target.value);
  }
  return (
    <div className='todo-input-container inactive'>
      <form className='todo-input'>
        <input type="text" placeholder="TODO" onChange={onChange} value={todoText} />
        <button type="submit" onClick={(event) => addTodo(event, todoText, setTodoText)}>
          <img src={sendIcon} alt="send icon" />
        </button>
      </form>
    </div>
  );
}

export { TodoInput };