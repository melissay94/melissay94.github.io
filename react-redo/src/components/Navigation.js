import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import BlueLogo from '../assets/siteLogoBlue.png';

export default function Navigation() {

  return(
    <div>
      <Nav className='nav-parent'>
        <img src={ BlueLogo } alt="Site Logo" className='nav-logo'/>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#profile">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            href='http://melissay94.github.io/YoungMelissaResume.pdf' 
            target='_blank'
          >
            Resume
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
