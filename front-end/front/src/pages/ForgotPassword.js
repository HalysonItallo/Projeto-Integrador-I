import React from 'react';
import '../styles/forgotPassword.css'
import NavBar from '../components/NavBar';

export default function ForgotPassword() {

  return(
    <>
      <div className='wrapper'>
        <NavBar canBack={true} url='/'/>
        <div className='content content-center'>
          <form className="forgot-form">
            <div className="forgot-info">
              <h1>Problemas para entrar?</h1>
              <p>Insira seu email e enviaremos um link para você volta acessar sua conta.</p>
            </div>
              
            <div className="input-block">
              <label htmlFor="Email">E-mail</label>
              <input type="email" id="Email" />
            </div>
            <button className='btn-submit' type='submit'>Enviar</button>
          </form>
        </div>
      </div>
     
    </>
  );
}