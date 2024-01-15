import React, { useState } from 'react'
import './navbar.css'
import logo from '../images/logo.png'
import {Link} from 'react-scroll'
import at from '../images/at.png'
import menu from '../images/menu.png'




export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt="logo" />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-70} duration={500}className="desktopMenuListItem">Clients</Link>

      </div>

      <button className="desktopMenuButton" onClick={() =>{
        document.getElementById('contacts').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={at} alt="at" className="menuIcon" />
        Contact Us  </button>

        <img className='mobMenu' src={menu} alt="Menu" onClick={() =>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() =>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() =>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() =>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-70} duration={500}className="listItem" onClick={() =>setShowMenu(false)}>Clients</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} duration={500}className="listItem" onClick={() =>setShowMenu(false)}>Contact</Link>

      </div>
       
      
        
    </nav>
  )
}

