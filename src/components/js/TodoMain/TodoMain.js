import React from 'react';
import { TodoMainHeader } from './TodoMainHeader/TodoMainHeader';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoList/TodoItem';
import { AddTodoBtn } from './AddTodoBtn';
import { TodoInput } from './TodoInput';
import { TodosLeftBtn } from './TodoMainHeader/TodosLeftBtn';
import { ClearCompletedBtn } from './TodoMainHeader/ClearCompletedBtn';
import '../../css/TodoMain.css';

const defaultTodos = [
  {
    text: 'Cortar Cebolla',
    completed: true
  },
  {
    text: 'Tomar el curso de intro a React',
    completed: true
  },
  {
    text: 'Llorar con la llorona',
    completed: false
  },
  {
    text: 'Cortar Cebolla',
    completed: true
  },
  {
    text: 'Tomar el curso de intro a React',
    completed: false
  },
  {
    text: 'Llorar con la llorona',
    completed: false
  },
  {
    text: 'Cortar Cebolla',
    completed: true
  },
  {
    text: 'Tomar el curso de intro a React',
    completed: false
  },
  {
    text: 'Llorar con la llorona',
    completed: false
  },
]
function TodoMain() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = todos.filter(todo => !todo.completed).length;

  const toggleCheckTodo = (event) => {
    const todoIndex = event.target.getAttribute('data-todo-index');
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }
  const clearCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  }
  const deleteTodo = (event) => {
    const todoIndex = event.target.getAttribute('data-todo-index');
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  // const addTodo = (event) => {
  //   event.preventDefault();

  // }

  return (
    <main>
      <TodoInput />
      <TodoMainHeader>
        <TodosLeftBtn completed={completedTodos} pending={pendingTodos} />
        {completedTodos > 0 && <ClearCompletedBtn clearCompleted={clearCompleted} />}
      </TodoMainHeader>
      <TodoList>
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