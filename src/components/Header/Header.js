import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typed from 'react-typed';
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Header = () => {
  return (
    <section className='header-sec'>
            <div className='header-inner-content'>
              <div className='header-social-ribbon'>
                <div>
                  <a href='#' className='cust-btn-scl'>
                    <FontAwesomeIcon icon={faFacebook}/>
                  </a>
                  <a href='#' className='cust-btn-scl'>
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                  <a href='#' className='cust-btn-scl'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                  <a href='#' className='cust-btn-scl'>
                    <FontAwesomeIcon icon={faInstagram}/>
                  </a>
                  <a href='#' className='cust-btn-scl'>
                    <FontAwesomeIcon icon={faYoutube}/>
                  </a>
                </div>
              </div>
              <div className='w-100 text-center content-head-div'>
                <p><span className='animate-1'>Full stack developer</span> |
                  <span className='animate-2'> Web Developer </span> |
                  <span className='animate-3'> UI/UX Designer</span> </p>
                <div className='header-divider'></div>
                <h1>
                  I am 
                  <span className='head-prt-1'>
                  <Typed
                    strings={['Muhammad Subhan Raza','Software Engineer']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                />
                  </span>
                </h1>
                <p className='header-desc'>
                 <div>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa fugit explicabo non expedita sint consequatur impedit maiores dolores exercitationem.
                 </div>
                </p>
                <div className='btn-head-sections'>
                  <a href='#' className='cust-btn'>What I do</a>
                  <span></span>
                  <a href='#' className='cust-btn'>download cv</a>
                </div>
              </div>
            </div>
          </section>
  )
}

export default Header