import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Context } from './context/AuthContext'
import { HourContext } from './context/HourContext'

import Home from './pages/Home'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Grade from './pages/Grade'
import Call from './pages/Call'
import VerifyCode from './pages/VerifyCode'
import RecoveryPassword from './pages/RecoveryPassword'
import Hour from './pages/Hour'

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useContext(Context)
  const token = localStorage.getItem('token')

  if (isPrivate && !authenticated && token === null) {
    return <Redirect to="/" />
  }

  return <Route {...rest} />
}

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute exact path="/hour" isPrivate={true} component={Hour} />
        <CustomRoute exact path="/call" isPrivate={true} component={Call} />
        <CustomRoute exact path="/grade" isPrivate={true} component={Grade} />
        <HourContext>
          <CustomRoute exact path="/grade" isPrivate={true} component={Grade} />
        </HourContext>
        <CustomRoute
          exact
          path="/recovery-password"
          component={RecoveryPassword}
        />
        <CustomRoute exact path="/verify-code" component={VerifyCode} />
        <CustomRoute exact path="/teacher-login" component={Login} />
        <CustomRoute exact path="/student-login" component={Login} />
        <CustomRoute exact path="/forgot-password" component={ForgotPassword} />
        <CustomRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
