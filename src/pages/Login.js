import React from 'react';
import '../styles/login.css'

export default function Login() {
  return(
   <div className="login-page">
        <div className="form">
        <form className="login-form">
            <div className="input-block">
              <label for="login-matrc">Matrícula do aluno</label>
              <input type="matricula" id="login-matrc" />
            </div>
            <div className="input-block">
              <label for="login-password">Senha</label>
              <input type="password" id="login-password" />
            </div>
            <button>Entrar</button>
            <p className="message">Problema para entrar? <a href="#">Esqueci minha senha</a></p>
        </form>
        </div>
    </div>
  );
}