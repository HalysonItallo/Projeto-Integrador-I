import React, { useContext } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Context } from './context/AuthContext';

import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Grade from './pages/Grade';
import Call from './pages/Call';

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useContext(Context);


  if (isPrivate && !authenticated) {
    return <Redirect to="/" />
  }

  return <Route {...rest} />;
}

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path="/call" isPrivate={true} component={Call} />
        <CustomRoute exact path="/grade" isPrivate={true} component={Grade} />
        <CustomRoute exact path="/teacher-login" component={Login} />
        <CustomRoute exact path="/student-login" component={Login} />
        <CustomRoute exact path="/forgot-password" component={ForgotPassword} />
        <CustomRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;