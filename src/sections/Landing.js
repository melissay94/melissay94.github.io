import React from 'react';
import Navigation from '../components/Navigation';
import Intro from '../components/Intro';

export default function Landing() {
  return(
    <div id="landing" className='section-layout'>
      <Navigation />
      <Intro />
    </div>
  );
};
