import React from 'react';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { data, loading, handleComplete, handleDelete } = useContext(TodoContext);
  return (
    <div className="todo-list">
      {loading
        ? 'Loading data'
        : data.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
              onCompleted={handleComplete}
              onDelete={handleDelete}
            />
          ))}
    </div>
  );
};

export default TodoList;
