import React, { useEffect, useState } from 'react';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../api/todo';

const TodoContext = React.createContext();

/*
  componentDidMount
  componentWillMount
  componentDidUpdate
  componentWillReceiveProps
*/

export const TodoProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await getTodos();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleComplete = (checked, id) => {
    const index = data.findIndex((d) => d.id === id);
    const item = data[index];
    item.completed = checked;
    const newData = Array.from(data);
    newData[index] = item;
    setData(newData);
    updateTodo(id, { completed: checked });
  };

  const handleAddItem = async (title) => {
    const item = {
      userId: 1,
      title,
      completed: false,
    };

    const result = await addTodo(item);

    setData([...data, result]);
  };

  const handleDelete = (id) => {
    const index = data.findIndex((d) => d.id === id);
    const newData = Array.from(data);
    newData.splice(index, 1);

    setData(newData);

    deleteTodo(id);
  };
  return (
    <TodoContext.Provider
      value={{
        data,
        setData,
        handleComplete,
        handleAddItem,
        handleDelete,
        loading,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
