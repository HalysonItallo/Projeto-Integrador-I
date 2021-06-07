import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Context } from './Context/AuthContext';

import ForgotPassword from './pages/ForgotPassword'
import Login from './pages/Login'
import Login_p from './pages/Login_p'
import Home from './pages/Home'

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

function Routes() {
  return(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <CustomRoute exact path="/login" component={Login} />
        <CustomRoute exact path="/login_p" component={Login_p} />
        <CustomRoute exact path="/forgot-password" component={ForgotPassword} />
        <CustomRoute exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

/*
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
*/