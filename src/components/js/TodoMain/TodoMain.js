import React from 'react';
import { TodoMainHeader } from './TodoMainHeader/TodoMainHeader';
import { TodoList } from './TodoList/TodoList';
import { AddTodoBtn } from './AddTodoBtn';

function TodoMain() {
  return (
    <main>
      <TodoMainHeader />
      <TodoList />
      <AddTodoBtn />
    </main>
  )
}

export { TodoMain };