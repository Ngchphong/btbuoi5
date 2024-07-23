import React from 'react';

function TodoList({ todos, deleteTodo, openModal }) {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className="todo-item" onClick={() => openModal(todo)}>
          <h2>{todo.title}</h2>
          <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
