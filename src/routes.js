import React from 'react'

import {
  Route,
  Switch,
} from "react-router-dom";

import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import Home from './pages/Home'


export default function MainRoutes(){
  return(
  <Switch>
    <Route path='/forgotPassword'> 
      <ForgotPassword /> 
    </Route>
    <Route path='/login'> 
      <Login /> 
    </Route>
    <Route path='/'> 
      <Home/> 
    </Route>
  </Switch>
  );  
}

