// import './App.css';
import React from 'react';
import { TodoHeader } from './components/js/TodoHeader';
import { TodoMain } from './components/js/TodoMain/TodoMain';

// Componente
function App() {
  // React solo nos permite enviar una sola etiqueta
  return (
    // React.Fragment es una etiqueta invisible para evitar los div's innecesarios
    <React.Fragment>
      <TodoHeader />
      <TodoMain />
    </React.Fragment>
  );
}

export default App;
