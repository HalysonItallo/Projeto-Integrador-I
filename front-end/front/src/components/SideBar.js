import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import '../styles/sidebar.css'
import logoUser from '../assets/icons/user.png'

export default function NavBar(){

  return(
    <div className="sidebar">
      <div className="info-container">
        <img src={logoUser} alt='photo-profile'/>
        <label className="name-profile">João Pedro</label>
      </div>
        
      <ul>
        
        <li> {'>>'} <NavLink to>Boletim</NavLink> </li>
        <li> <NavLink to='/call'>Chamada</NavLink> </li> 
        <li> <NavLink to>Horários</NavLink> </li> 
      </ul>
      
      <button> <BiLogOut color="#CF0000" size={60}/> </button>
    </div>
  )
}

