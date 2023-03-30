import React from 'react';

function TodosLeftBtn({ completed, pending }) {
  return (
    <span>{pending} todos left {completed > 0 && '/ ' + completed + ' completed'}</span>
  )
}

export { TodosLeftBtn };