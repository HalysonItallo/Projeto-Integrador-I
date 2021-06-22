import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import '../styles/navbar.css'
import logo from '../assets/icons/icone-test.svg'

export default function NavBar( props ){

  return(
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt='Logo'/>
        <label className="logo-label">Edu Academic</label>
      </div>
        
      {props.canBack && 
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to={props.url} className="nav-link">
              <BiArrowBack color="#000" size={60}/>
            </NavLink>
          </li>
        </ul>}
    </nav>
  )
}

