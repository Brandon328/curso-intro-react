import React from 'react';

function ClearCompletedBtn({ clearCompleted }) {
  return (
    <button type="button" onClick={clearCompleted}>Clear completed</button>
  )
}

export { ClearCompletedBtn };