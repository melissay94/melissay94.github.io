import React, { useState } from 'react';
import { 
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import BlueLogo from '../assets/siteLogoBlue.png';

export default function Navigation() {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <Navbar expand='md' light className='nav-parent'>
      <NavbarBrand href='/'>
        <img src={ BlueLogo } alt="Site Logo" className='nav-logo'/> 
      </NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={ isOpen } navbar>
        <Nav className='mr-auto' navbar>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact">Contact Me</NavLink>
        </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
