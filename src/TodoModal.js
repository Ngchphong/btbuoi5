import React from 'react';

function TodoModal({ todo, closeModal }) {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{todo.title}</h2>
        <p>{todo.content}</p>
      </div>
    </div>
  );
}

export default TodoModal;
