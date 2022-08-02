import React from 'react';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Todo from './pages/Todo';

function App() {
  return (
    <BrowserRouter>
      <nav className="todo-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo/:id" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// React Context

export default App;
