import React, { useState } from 'react';
import './App.css'; 
import TodoList from './TodoList';
import TodoModal from './TodoModal';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = (title, content) => {
    const newTodo = { title, content, id: Date.now() };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const openModal = (todo) => {
    setSelectedTodo(todo);
  };

  const closeModal = () => {
    setSelectedTodo(null);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} openModal={openModal} />
      {selectedTodo && (
        <TodoModal todo={selectedTodo} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;
