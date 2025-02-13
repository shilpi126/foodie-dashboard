import React from 'react';
import './App.css';
import Register from './pages/Register';

import { Navigate, Route, Routes } from 'react-router';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useSelector } from 'react-redux';
import CategoryForm from './pages/CategoryForm';
import CategoryPage from './pages/CategoryPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import RecipesPage from './pages/RecipesPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';



function App() {
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)

  return (
    <React.Fragment>
        {isLoggedIn &&   <Header />}
        <div className='flex justify-between'>
 <div className='w-[20%]'>
 {isLoggedIn &&   <Sidebar/>}
 </div>
      
<div className='w-[80%] mt-20 '>
<Routes>
      <Route path='/' element={isLoggedIn ? <RecipesPage/> : <Navigate to="/login" /> } />
  <Route path='/create-recipe' element={<Dashboard/> } />
  <Route path='/category' element={<CategoryForm/>}/>

  <Route path='/login' element={!isLoggedIn ? <Login/> :  <Navigate to="/" /> }/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/category-page' element={<CategoryPage/>}/>
  <Route path='/order-details' element={<OrderDetailsPage/>}/>
  
</Routes>
</div>
        </div>
        
  
    </React.Fragment>
  );
}

export default App;
