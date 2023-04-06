import React from 'react';
import './TodoMain.css';

function TodoMain({ children }) {
  return (
    <main>
      {children}
    </main>
  )
}

export { TodoMain };