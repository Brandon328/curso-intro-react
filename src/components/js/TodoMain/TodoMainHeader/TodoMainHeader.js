import React from 'react';

function TodoMainHeader(props) {
  return (
    <section className='todo-main__header'>
      {props.children}
    </section>
  )
}

export { TodoMainHeader };