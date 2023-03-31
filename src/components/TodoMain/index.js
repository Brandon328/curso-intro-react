import React from 'react';
import './TodoMain.css';
import { TodoProvider } from '../TodoContext';
import { TodoMainUI } from './TodoMainUI';

function TodoMain() {
  return (
    <TodoProvider>
      <TodoMainUI />
    </TodoProvider>
  )
}

export { TodoMain };