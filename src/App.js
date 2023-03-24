// import './App.css';
import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';

const todos = [
  {
    text: 'Cortar Cebolla',
    completed: false
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

// Componente
function App() {
  // React solo nos permite enviar una sola etiqueta
  return (
    // React.Fragment es una etiqueta invisible para evitar los div's innecesarios
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {
          todos.map((todo, index) => (
            <TodoItem key={index} text={todo.text} />
          ))
        }
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
