import React, { useContext, useState } from 'react';
import { Context } from '../Context/AuthContext';
import { NavLink } from 'react-router-dom';
import '../styles/login.css'

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);
  const[isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

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
            <button type="button" onClick={handleLogin}>Entrar</button>
            <p className="message">Problema para entrar? <NavLink to="/forgot-password" className="nav-link" onClick={handleToggle}><a href="#">Esqueci minha senha</a></NavLink></p>
            
        </form>
        </div>
    </div>
  );
}
 /*            <p className="message">Problema para entrar? <a href="#">Esqueci minha senha</a></p>
 */