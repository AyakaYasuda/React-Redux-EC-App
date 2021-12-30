import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Login, Home } from './templates';

const Router = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path='/login' element={<Login />} />
    //     <Route exact path='/' element={<Home />} />
    //   </Routes>
    // </BrowserRouter>

    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='(/)?' component={Home} />
    </Switch>
  );
};

export default Router;
