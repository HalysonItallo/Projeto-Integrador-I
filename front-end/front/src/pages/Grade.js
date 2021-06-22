import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/grade.css'
import '../styles/global.css'
import SideBar from '../components/SideBar';


export default function Home() {

  return(  
    <>
      <div className="wrapper">
        <NavBar canBack={false}/>
        <div className="content content-center">
         <div className='container'>
          <SideBar />
          <div className='grade-content' >
            <h1>
              Hello world
            </h1>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}
