import React, { useContext, useState } from 'react'
import { Context } from '../context/AuthContext'
import { NavLink, Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '../styles/login.css'

export default function Login(props) {
  const { authenticated, handleLogin } = useContext(Context)

  const [state, setState] = useState({
    registration: '',
    password: '',
  })

  function handleChange(e) {
    setState({
      registration: e.target.value,
      password: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleLogin(state.registration, state.password)
  }

  if (!authenticated || authenticated == null) {
    return (
      <>
        <div className="wrapper">
          <NavBar canBack={true} url="/" />
          <div className="content content-center">
            <form
              className="login-form"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="input-block">
                <label htmlFor="loginRegistration">
                  Matrícula do {props.location.typeUser}
                </label>
                <input
                  type="matricula"
                  name="registration"
                  id="loginRegistration"
                  maxLength={8}
                  onChange={handleChange}
                />
              </div>
              <div className="input-block">
                <label htmlFor="loginPassword">Senha</label>
                <input
                  type="password"
                  name="password"
                  id="loginPassword"
                  maxLength={8}
                  onChange={handleChange}
                />
              </div>
              {authenticated === false ? (
                <label className="validate-input">
                  Matrícula ou senha incorreta
                </label>
              ) : null}
              <button className="btn-login">Entrar</button>

              <NavLink to="/forgot-password" className="forgot-password-link">
                Esqueci minha senha
              </NavLink>
            </form>
          </div>
        </div>
      </>
    )
  } else {
    return <Redirect to="/grade" />
  }
}
