import React from 'react';
import './TodoLeftSpan.css';

function TodosLeftSpan({ completed, pending }) {
  return (
    <span>{pending} todos left {completed > 0 && '/ ' + completed + ' completed'}</span>
  )
}

export { TodosLeftSpan };