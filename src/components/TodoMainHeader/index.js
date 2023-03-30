import React from 'react';
import './TodoMainHeader.css';

function TodoMainHeader(props) {
  return (
    <section className='todo-main__header'>
      {props.children}
    </section>
  )
}

export { TodoMainHeader };