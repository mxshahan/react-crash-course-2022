import React from 'react';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { TodoProvider } from '../context/TodoContext';

function Home() {
  return (
    <div className="todo-container">
      <TodoProvider>
        <Header />
        <TodoList />
        <TodoForm />
      </TodoProvider>
    </div>
  );
}

export default Home;
