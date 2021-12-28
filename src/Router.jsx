import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login, Home } from './templates';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
