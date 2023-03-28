import React from 'react';
import { TodosLeftBtn } from './TodosLeftBtn';
import { ClearCompletedBtn } from './ClearCompletedBtn';

function TodoMainHeader() {
  return (
    <section className='todo-main__header'>
      <TodosLeftBtn />
      <ClearCompletedBtn />
    </section>
  )
}

export { TodoMainHeader };