import React from 'react';
import { TodoMainHeader } from '../TodoMainHeader';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { AddTodoBtn } from '../AddTodoBtn';
import { TodoInput } from '../TodoInput';
import { TodosLeftSpan } from '../TodoLeftSpan';
import { ClearCompletedBtn } from '../ClearCompletedBtn';
import './TodoMain.css';

// Custom hook. Debemos usar la palabra 'use' al inicio del custom hook
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // React ejecuta el useEffect luego del render de React, pero antes del render en el navegador.
  // En cambio, React ejecuta el useLayoutEffect luego del render de React y del render en el navegador.
  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem;
        setItem(() => {
          const localStorageItem = localStorage.getItem(itemName);
          if (localStorageItem) {
            parsedItem = JSON.parse(localStorageItem);
          }
          else {
            parsedItem = initialValue;
            localStorage.setItem(itemName, JSON.stringify(parsedItem));
          }
        }, 1500);
        setItem(parsedItem);
        setLoading(false);
      }
      catch (err) {
        setError(err);
      }
    }, 1500)
  }, []);

  function saveItem(newItem) {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }
    catch (err) {
      setError(err);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

function TodoMain() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = todos.filter(todo => !todo.completed).length;

  const toggleCheckTodo = (event) => {
    const todoIndex = event.target.getAttribute('data-todo-index');
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }
  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    saveTodos(newTodos);
  }
  const deleteTodo = (event) => {
    const todoIndex = event.target.getAttribute('data-todo-index');
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  // const addTodo = (event) => {
  //   event.preventDefault();

  // }

  return (
    <main>
      <TodoInput />
      <TodoMainHeader>
        <TodosLeftSpan completed={completedTodos} pending={pendingTodos} />
        {completedTodos > 0 && <ClearCompletedBtn clearCompleted={clearCompleted} />}
      </TodoMainHeader>
      <TodoList
        loading={loading}
        error={error}
        todos={todos}
      >
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
      <AddTodoBtn />
    </main>
  )
}

export { TodoMain };