import React from 'react';
import TLDR from '../components/TLDR';
import Map from '../components/Map';
import TechLogoList from '../components/TechLogoList';

export default function About() {
  return(
    <div id="about" className='section-layout'>
      <div className='brand-statement'>
        <h2 className='section-header'>The TL;DR</h2>
        <TLDR />
      </div>
      <h2 className='section-header'>The Tech</h2>
      <h6 className='section-subheader'>(Hover a logo for more information)</h6>
      <TechLogoList />
      <div className='map-section'>
        <h2 className='section-header'>The Tale</h2>
        <h6 className='section-subheader'>(Click on a city to learn more about me!)</h6>
        <Map />
      </div>
    </div>
  );
};
