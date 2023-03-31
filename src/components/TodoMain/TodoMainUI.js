import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoMainHeader } from '../TodoMainHeader';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { AddTodoBtn } from '../AddTodoBtn';
import { TodoInput } from '../TodoInput';
import { TodosLeftSpan } from '../TodoLeftSpan';
import { ClearCompletedBtn } from '../ClearCompletedBtn';

function TodoMainUI() {
  const {
    todos,
    completedTodos
  } = React.useContext(TodoContext);

  return (
    <main>
      <TodoInput />
      <TodoMainHeader>
        <TodosLeftSpan />
        {completedTodos > 0 && <ClearCompletedBtn />}
      </TodoMainHeader>
      <TodoList>
        {
          todos.map((todo, index) =>
            <TodoItem
              key={index}
              todoIndex={index}
              text={todo.text}
              completed={todo.completed}
            />
          )
        }
      </TodoList>
      <AddTodoBtn />
    </main>
  )
}

export { TodoMainUI };