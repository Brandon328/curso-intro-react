import React from 'react';
import './TodoLeftSpan.css';

function TodosLeftSpan({ completedTodos, pendingTodos }) {
  return (
    <span>{pendingTodos} todos left {completedTodos > 0 && '/ ' + completedTodos + ' completed'}</span>
  )
}

export { TodosLeftSpan };