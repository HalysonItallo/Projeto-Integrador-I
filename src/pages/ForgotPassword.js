import React from 'react';
import '../styles/forgotPassword.css'

export default function ForgotPassword() {
  return(
    <div className="login-page">
        <div className="form">
        <form className="login-form">
          <div className="txt">
            <h1>Problemas para entrar?</h1>
            <p>Insira seu email e enviaremos um link para você volta acessar sua conta.</p>
          </div>
            
          <div className="input-block">
            <label for="Email">E-mail</label>
            <input type="email" id="Email" />
          </div>
          <button>Enviar</button>
        </form>
        </div>
    </div>
  );
}