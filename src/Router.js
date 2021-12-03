import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'
import List from './pages/List/List'
import Detail from './pages/Detail/Detail'

function Router(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/list' element={<List />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    )
  }

  export default Router