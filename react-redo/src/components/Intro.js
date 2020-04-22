import React from 'react';
import ContinueArrow from '../assets/continueArrow.png';
import MeOutline from '../assets/meOutline.png';

export default function Intro() {
  return(
    <div className='intro'>
      <div className='intro-bg'> </div>
      <h4>Hello! I am</h4>
      <h1>Melissa Young</h1>
      <h4>a Front End Developer</h4>
      <a href="#about">
        <img src={ ContinueArrow } alt='Continue to next section' className='continue-arrow' />
      </a>
      <img src={ MeOutline } alt='Outline of Melissa Young' className='me-outline'/>
    </div>
  );
};
