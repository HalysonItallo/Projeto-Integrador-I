import React from 'react';
import '../styles/sendSimpleInput.css'
import NavBar from '../components/NavBar';

export default function SendSimpleInput( props ) {

  return(
    <>
      <div className='wrapper'>
        <NavBar canBack={true} url='/'/>
        <div className='content content-center'>
          <form className="form">
            <div className="info">
              <h1>Problemas para entrar?</h1>
              <p> { props.description } </p>
            </div>
              
            <div className="input-block">
              <label htmlFor="Email">{ props.label }</label>
              <input type="email" id="Email" />
            </div>
            <button className='btn-submit' type='submit'>Enviar</button>
          </form>
        </div>
      </div>
     
    </>
  );
}