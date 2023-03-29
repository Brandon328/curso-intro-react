import React from 'react';
import { TodoMainHeader } from './TodoMainHeader/TodoMainHeader';
import { TodoList } from './TodoList/TodoList';
import { AddTodoBtn } from './AddTodoBtn';
import { TodoInput } from './TodoInput';
import '../../css/TodoMain.css';

function TodoMain() {
  return (
    <main>
      <TodoInput />
      <TodoMainHeader />
      <TodoList />
      <AddTodoBtn />
    </main>
  )
}

export { TodoMain };