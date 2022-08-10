import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';

const PointerNav = (props) => {


    const handleSideNav= () =>{

    }

  return (
    <>
        <nav className='pointer-nav'>
          <button className='opennav-btn'>
            <FontAwesomeIcon icon={faBars} onClick={props.openSidebar}/>
          </button>
          <ul>
            <li><a href='#'><span className='nav-point'></span></a></li>
            <li><a href='#'><span className='nav-point'></span></a></li>
            <li><a href='#'><span className='nav-point'></span></a></li>
            <li><a href='#'><span className='nav-point'></span></a></li>
            <li><a href='#'><span className='nav-point'></span></a></li>
            <li><a href='#'><span className='nav-point'></span></a></li>
            <li><a href='#'><span className='nav-point'></span></a></li>
            <li><a href='#'><span className='nav-point'></span></a></li>
            <li><a href='#'><span className='nav-point'></span></a></li>
          </ul>
        </nav>
    </>
  )
}

export default PointerNav