import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/home.css'

export default function Home() {

  const[isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return(  
    <div className="home-page">
        <div className="form">
        <form className="home-form">
            <h1>Escolha o tipo de usuário que deseja acessar</h1>
            
            <NavLink to="/login_p" className="nav-link" onClick={handleToggle}><button className="prof" type="button">Professor</button></NavLink>

            <NavLink to="/login" className="nav-link" onClick={handleToggle}><button className="aluno" type="button">Aluno</button></NavLink>

        </form>
        </div>
    </div>
  );
}
