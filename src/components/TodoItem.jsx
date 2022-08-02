import React from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({ id, title, completed, onCompleted, onDelete }) => {
  return (
    <div className="todo-item">
      <div className={`todo-left ${completed ? 'line-through' : ''}`}>
        <input id={id} type="checkbox" checked={completed} onChange={(e) => onCompleted(e.target.checked, id)} />
        <Link to={`/todo/${id}`}>{title}</Link>
      </div>

      <i className="fa fa-times icon" aria-hidden="true" onClick={() => onDelete(id)}></i>
    </div>
  );
};

export default TodoItem;
