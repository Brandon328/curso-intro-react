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
      className={`addtodo-btn ${openModal && 'addtodo-btn--close'}`}
      onClick={toggleModal}
    >
      <AiOutlinePlus />
    </button>
  )
}

export { AddTodoBtn };