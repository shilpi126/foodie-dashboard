import React from 'react';
import './App.css';
import Register from './pages/Register';

import { Navigate, Route, Routes } from 'react-router';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import CategoryForm from './pages/CategoryForm';
import CategoryPage from './pages/CategoryPage';

function App() {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)

  return (
    <React.Fragment>
    <Routes>
      <Route path='/' element={isLoggedIn ? <Dashboard/> : <Navigate to="/login" /> } />
      <Route path='/category' element={<CategoryForm/>}/>
      <Route path='/login' element={!isLoggedIn ? <Login/> :  <Navigate to="/" /> }/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/categorypage' element={<CategoryPage/>}/>

    </Routes>
    </React.Fragment>
  );
}

export default App;
