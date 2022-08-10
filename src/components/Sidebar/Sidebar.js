
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props) => {

      
   
  return (
    <>
        <motion.div transition={{ type: "spring", stiffness: 30 }} className='slider-nav' animate={{width:props.sidebar?"100%":"0%"}}>
            <motion.div animate={{visibility:props.sidebar?"visible":"collapse"}}>
            <button onClick={props.closeSidebar} className='btn-close-fullnav cust-btn'><FontAwesomeIcon icon={faTimes}/></button>
            <div className='full-nav-body'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>know about me</a></li>
                    <li><a href='#'>What I do</a></li>
                    <li><a href='#'>My Projetcs</a></li>
                    <li><a href='#'>What i am good at</a></li>
                    <li><a href='#'>get in touch</a></li>
                </ul>
            </div>
            <div className='full-nav-footer'>
                <p>Developed and Designed by <span>Muhammad Subhan Raza</span></p>
            </div>
            </motion.div>
        </motion.div>
    </>
  )
}

export default Sidebar

