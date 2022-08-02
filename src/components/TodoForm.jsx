import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

const TodoForm = () => {
  const { handleAddItem } = useContext(TodoContext);
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem(title);
    setTitle('');
  };

  const onChange = (e) => setTitle(e.target.value);

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
