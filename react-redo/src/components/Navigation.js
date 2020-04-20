import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import WhiteLogo from '../assets/siteLogoWhite.png';

export default function Navigation() {

  return(
    <div>
      <img src={WhiteLogo} alt="Site Logo" />
      <Nav>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#profile">Projects</NavItem>
        <NavItem href="#contact">Contact Me</NavItem>
        <NavItem href='http://melissay94.github.io/YoungMelissaResume.pdf' target='_blank'>Resume</NavItem>
      </Nav>
    </div>
  );
}
