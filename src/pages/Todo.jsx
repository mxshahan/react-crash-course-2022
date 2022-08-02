import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodo } from '../api/todo';

const Todo = ({ match }) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState();

  const fetchApi = async () => {
    const data = await getTodo(params.id);
    setTodo(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return <div className="todo-container">{loading ? 'Loading...' : JSON.stringify(todo)} </div>;
};

export default Todo;
