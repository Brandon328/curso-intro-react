import React from 'react';
import { TodoContext } from '../TodoContext';
import './ClearCompletedBtn.css';

function ClearCompletedBtn() {
  const { clearCompleted } = React.useContext(TodoContext);
  return (
    <button type="button" onClick={clearCompleted}>Clear completed</button>
  )
}

export { ClearCompletedBtn };