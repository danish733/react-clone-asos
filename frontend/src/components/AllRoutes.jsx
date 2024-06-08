import React from 'react'
import Men from '../pages/Men'
import Women from '../pages/Women'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import WomenProductList from './WomenProductList';
import MenProductList from './MenProductList';
import Admin from '../pages/Admin';
import SingleWomenProduct from './SingleWomenProduct';
import SingleMenProduct from './SingleMenProduct';
import Wishlist from '../pages/Wishlist';
import Signup from '../pages/Signup';
import AdminLogin from '../pages/AdminLogin';
import PrivateRoute from './PrivateRoute';
import PrivateAdminRoute from './PrivateAdminRoute';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route path='/wishlist' element={ <PrivateRoute><Wishlist/></PrivateRoute>}/>
        <Route path='/women/product' element={<WomenProductList/>}/>
        <Route path='/men/product' element={<MenProductList/>}/>
        <Route path='/admin-product' element={<PrivateAdminRoute> <Admin/> </PrivateAdminRoute>}/>
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/women/product/:id' element={<SingleWomenProduct/>}/>
        <Route path='/men/product/:id' element={<SingleMenProduct/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes