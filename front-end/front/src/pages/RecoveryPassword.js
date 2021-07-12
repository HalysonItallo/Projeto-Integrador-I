import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/recoveryPassword.css'

export default function RecoveryPassword() {
  return(
    <>
      <div className="wrapper">
        <NavBar canBack={true} url='/'/> 
        <div className='content content-center'>
          <form className="recovery-password-form">
            <div className="input-block">
              <label htmlFor="firstPassword">Senha</label>
              <input type="password" name='firstPassword'/>
            </div>

            <div className="input-block">
              <label htmlFor="secondPassword">Confirme sua senha</label>
              <input type="password" name='secondPassword'/>
            </div>
          
            <button className="btn-login">Cadastrar nova senha</button>
          </form>
        </div>
       </div>
    </>
  );
}