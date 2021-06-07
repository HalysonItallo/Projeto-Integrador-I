import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';
import '../styles/navbar.css'

export default function NavBar(){
  const[isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return(
    <nav className="navbar navbar-expand=lg navbar-dark bg-primary">
      <div className={`${isOpen ? 'show' : ''} collapse navbar-collapse`} id="navbar01">
        <label class="logo">Edu Academic</label>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link" onClick={handleToggle}><BiExit/> </NavLink>
          </li>
        </ul>
      </div>
      
    </nav>
  )
}

/* <li className="nav-item">
            <NavLink to="/home" className="nav-link" onClick={handleToggle}><a href="#"></a> Home </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/login" className="nav-link" onClick={handleToggle}><a href="#"></a> Login </NavLink>
          </li> 
          <li className="nav-item">
            <NavLink to="/forgot-password" className="nav-link" onClick={handleToggle}><a href="#"></a> PorgotPassword </NavLink>
            <NavLink to="/login" className="nav-link" onClick={handleToggle}><BiExit/> </NavLink>
          </li>
*/

