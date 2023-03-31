import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoLeftSpan.css';

function TodosLeftSpan() {
  const { completedTodos, pendingTodos } = useContext(TodoContext);
  return (
    <span>{pendingTodos} todos left {completedTodos > 0 && '/ ' + completedTodos + ' completed'}</span>
  )
}

export { TodosLeftSpan };