import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/home.css'
import '../styles/global.css'

import InitialImage from '../assets/img/image-initial-page.png'


export default function Home() {

  return(  
    <>
      <div className="wrapper">
        <NavBar canBack={false}/>

        <div className="content content-center">
          <form className="home-form">
              <div>
                <h1>Escolha o tipo de usuário que deseja acessar</h1>
                
                <NavLink to={{pathname: "/teacher-login", 
                  typeUser: 'Professor'
                }}>
                  <button className="btn-select" type="button">Professor</button>
                </NavLink>

                <NavLink to={{pathname: "/student-login", 
                  typeUser: 'Aluno'
                }}>
                  <button className="btn-select" type="button">Aluno</button>
                </NavLink>
              </div>

              <img className="initial-image" src={InitialImage} alt='initial-img'/>
          </form>
        </div>
      </div>
    </>
  );
}
