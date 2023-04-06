import React from 'react';
import './ClearCompletedBtn.css';

function ClearCompletedBtn({ clearCompleted }) {
  return (
    <button type="button" onClick={clearCompleted}>Clear completed</button>
  )
}

export { ClearCompletedBtn };