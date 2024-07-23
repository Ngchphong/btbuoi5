import React from 'react';

function TodoItem({ todo, deleteTodo, openModal }) {
  return (
    <div className="todo-item" onClick={() => openModal(todo)}>
      <h2>{todo.title}</h2>
      <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
