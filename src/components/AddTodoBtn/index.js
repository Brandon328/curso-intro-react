import React from 'react';
// import { createPortal } from 'react-dom';
import { TodoContext } from '../TodoContext';
// import { TodoInput } from '../TodoInput';
import './AddTodoBtn.css';

function AddTodoBtn() {
  const {
    toggleModal,
    openModal
  } = React.useContext(TodoContext);
  return (
    <>
      <button
        type='button'
        className={openModal ? 'addtodo-btn addtodo-btn--close' : 'addtodo-btn'}
        onClick={toggleModal}
      >
        +
      </button>
      {/* {openModal && createPortal(<TodoInput />, document.querySelector('main'))} */}
    </>
  )
}

export { AddTodoBtn };