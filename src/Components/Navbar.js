import React, { Component } from 'react';
import logo from './logo.svg';
import './Navbar.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faEnvelope } from '@fortawesome/free-brands-svg-icons'
import {Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faTwitterSquare, faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons'


class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
         <div class="logo">
            <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="nav-head">
                <Link to="/" class='navlink'>Home</Link>
                <Link to="/about" class='navlink'>About</Link>
                <Link to="/portfolio" class='navlink'>Portfolio</Link>
                <Link to="/resume" class='navlink'>Resume</Link>
                <Link to="/contact" class='navlink'>Contact Me</Link>
            </div>
            <div class="social-head">
            <div class="email">
            <FontAwesomeIcon icon={faEnvelope} className='fa fa-envelope' href='mailto:meredith_e_davis@yahoo.com'/>
            </div>
            <div class="twitter">
                <FontAwesomeIcon icon={faTwitterSquare} className="fa fa-twitter" href='' />
            </div>
            <div class="linkedin">
            <FontAwesomeIcon icon={faLinkedin} className='fa fa-linkedin' href='www.linkedin.com/in/meredithdavis23' />
            </div>
            <div class="github">
            <FontAwesomeIcon icon={faGithubSquare} className='fa fa-github' href='https://github.com/MeredithDavis23' />
            </div>
            </div>
        </div>
    )
  }
}

export default Navbar