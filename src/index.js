import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Heeyun/Login/Login'
import List from './pages/Heeyun/List/List'
import Detail from './pages/Heeyun/Detail/Detail'


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

ReactDOM.render(<Router />,
  document.getElementById('root')
);


