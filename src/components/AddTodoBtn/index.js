import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { TodoContext } from '../TodoContext';
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
        <AiOutlinePlus />
      </button>
      {/* {openModal && createPortal(<TodoInput />, document.querySelector('main'))} */}
    </>
  )
}

export { AddTodoBtn };