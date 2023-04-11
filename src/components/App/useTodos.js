import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function UseModal(openModal) {
  const modal = document.querySelector('.todo-input-container');
  if (openModal)
    modal.classList.remove('inactive');
  else
    modal.classList.add('inactive');
}

function FindTodoIndex(element) {
  let todoIndex = element.getAttribute('data-todo-index')
  while (!todoIndex) {
    element = element.parentNode;
    todoIndex = element.getAttribute('data-todo-index');
  }
  return todoIndex;
}

function useTodos() {
  const [openModal, setOpenModal] = React.useState(false);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    synchronizeItem
  } = useLocalStorage('TODOS_V1', []);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = todos.filter(todo => !todo.completed).length;

  const toggleCheckTodo = (event) => {
    let todoIndex = FindTodoIndex(event.target);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }
  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    saveTodos(newTodos);
  }
  const deleteTodo = (event) => {
    const todoIndex = FindTodoIndex(event.target);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  const addTodo = (event, text, setTodoText) => {
    if (text !== '') {
      event.preventDefault();
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false
      })
      saveTodos(newTodos);
      setTodoText('');
      toggleModal();
    }
  }
  const toggleModal = () => {
    const open = openModal;
    setOpenModal(!open);
    UseModal(!open);
  }

  return ({
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
    openModal,
    synchronizeItem
  })
}

export { useTodos };