// import './App.css';
import React from 'react';
import { TodoHeader } from '../TodoHeader';
import { TodoMain } from '../TodoMain';

// Componente
function App() {
  // React solo nos permite enviar una sola etiqueta
  return (
    // <React.Fragment/> y <></> son etiquetas invisible para evitar los div's innecesarios
    <>
      <TodoHeader />
      <TodoMain />
    </>
  );
}

export default App;
