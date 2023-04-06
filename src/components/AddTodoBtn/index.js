import React from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import './AddTodoBtn.css';

function AddTodoBtn({
  toggleModal,
  openModal
}) {

  return (
    <button
      type='button'
      className={openModal ? 'addtodo-btn addtodo-btn--close' : 'addtodo-btn'}
      onClick={toggleModal}
    >
      <AiOutlinePlus />
    </button>
  )
}

export { AddTodoBtn };