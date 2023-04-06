import React from 'react';

// Components
import { TodoHeader } from '../TodoHeader';
import { TodoMain } from '../TodoMain';
import { TodoMainHeader } from '../TodoMainHeader';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { AddTodoBtn } from '../AddTodoBtn';
import { TodoInput } from '../TodoInput';
import { TodosLeftSpan } from '../TodoLeftSpan';
import { ClearCompletedBtn } from '../ClearCompletedBtn';

// Custom hooks
import { useTodoHeader } from './useTodoHeader';
import { useTodos } from './useTodos';


// Componente
function App() {
  const [greeting, currentDate] = useTodoHeader();
  const {
    completedTodos,
    todos,
    addTodo,
    pendingTodos,
    clearCompleted,
    loading,
    error,
    toggleCheckTodo,
    deleteTodo,
    toggleModal,
    openModal
  } = useTodos();

  // React solo nos permite enviar una sola etiqueta
  return (
    // <React.Fragment/> y <></> son etiquetas invisible para evitar los div's innecesarios
    <>
      <TodoHeader>
        <h1>TODO</h1>
        <h3>{greeting}</h3>
        <span>{currentDate}</span>
      </TodoHeader>
      <TodoMain>
        <TodoInput addTodo={addTodo} />
        <TodoMainHeader>
          <TodosLeftSpan completedTodos={completedTodos} pendingTodos={pendingTodos} />
          {completedTodos > 0 && <ClearCompletedBtn clearCompleted={clearCompleted} />}
        </TodoMainHeader>
        <TodoList
          loading={loading}
          error={error}
          todos={todos}>
          {
            todos.map((todo, index) =>
              <TodoItem
                key={index}
                todoIndex={index}
                text={todo.text}
                completed={todo.completed}
                toggleCheckTodo={toggleCheckTodo}
                deleteTodo={deleteTodo}
              />
            )
          }
        </TodoList>
        <AddTodoBtn toggleModal={toggleModal} openModal={openModal} />
      </TodoMain>
    </>
  );
}

export default App;