import {React, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../context/AuthContext';
import { BiLogOut } from 'react-icons/bi';
import '../styles/sideBar.css'
import logoUser from '../assets/icons/user.png'

export default function SideBar(){

  const { handleLogout } = useContext(Context);

  return(
    <div className="sidebar">
      <div className="info-container">
        <img src={logoUser} alt='photo-profile'/>
        <label className="name-profile">João Pedro</label>
      </div>
        
      <ul>
        
        <li> {'>>'} <NavLink to='/grade'>Boletim</NavLink> </li>
        <li> <NavLink to='/call'>Chamada</NavLink> </li> 
        <li> <NavLink to='/hour'>Horários</NavLink> </li> 
      </ul>
      
      <button onClick={handleLogout}> <BiLogOut color="#CF0000" size={60}/> </button>
    </div>
  )
}

