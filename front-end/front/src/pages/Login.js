import React, { useContext, useState } from 'react';
import { Context } from '../context/AuthContext';
import { NavLink, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/login.css'

export default function Login( props ) {
  const { authenticated, handleLogin, setData } = useContext(Context);
  const [state, setState] = useState({
    registration: '',
    password: ''
  })
  
  
  function handleChange(e) {
    setState({ 
      registration: e.target.value,
      password: e.target.value
    });
  }
  
 async function handleSubmit(e) {
    e.preventDefault();
     
    await handleLogin(state.registration, state.password)
  }

  
  if(!authenticated){
    return(
      <>
        <div className="wrapper">
          <NavBar canBack={true} url='/'/> 
          <div className='content content-center'>
            <form className="login-form" onSubmit={handleSubmit} >
              <div className="input-block">
                <label htmlFor="loginRegistration">Matrícula do {props.location.typeUser}</label>
                <input type="matricula" name='registration' id="loginRegistration" onChange={handleChange}/>
              </div>
  
              <div className="input-block">
                <label htmlFor="loginPassword">Senha</label>
                <input type="password" name='password' id="loginPassword" onChange={handleChange}/>
              </div>
            
              <button className="btn-login">Entrar</button>
        
              <NavLink to="/forgot-password" className="forgot-password-link">Esqueci minha senha</NavLink>
            </form>
          </div>
         </div>
      </>
    );
  }   else{
    return(
      <Redirect to="/grade" />
    );
  }
}