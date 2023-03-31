import React from 'react';
import { useLocalStorage } from './userLocalStorage';

// Es un objeto
const TodoContext = React.createContext();

function UseModal(openModal) {
  const modal = document.querySelector('.todo-input-container');
  if (openModal)
    modal.classList.remove('inactive');
  else
    modal.classList.add('inactive');
}

function TodoProvider(props) {
  const [openModal, setOpenModal] = React.useState(false);
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
  const addTodo = (event) => {
    event.preventDefault();
    console.log('hola');
  }
  const toggleModal = () => {
    const open = openModal;
    setOpenModal(!open);
    UseModal(!open);
  }

  return (
    <TodoContext.Provider value={{
      todos,
      saveTodos,
      loading,
      error,
      completedTodos,
      pendingTodos,
      toggleCheckTodo,
      clearCompleted,
      deleteTodo,
      addTodo,
      toggleModal,
      openModal
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };