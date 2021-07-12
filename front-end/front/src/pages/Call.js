import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/call.css'
import '../styles/global.css'
import SideBar from '../components/SideBar';
import iconRight from '../assets/icons/icon-right.png'


export default function Call() {

  return(  
    <>
      <div className="wrapper">
        <NavBar canBack={false}/>
        <div className="content content-center">
         <div className='container'>
          <SideBar />
          <div className='content-center grade-content' >
            <div className='info-call'>
              <label>Matemática</label>
              <label>07/11/2001</label>
              
              <button> 
                Presente 
                <img className="icon-right" src={iconRight} alt='icon-right'/> 
              </button>
              
            </div>  
          </div>
         </div>
        </div>
      </div>
    </>
  );
}
