import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import MeOutline from '../assets/meOutline.png';

export default function Intro() {
  const [tooltipShow, setTooltipShow] = useState(false);

  return(
    <div className='intro'>
      <div className='intro-bg'> </div>
      <h4>Hello! I am</h4>
      <h1>Melissa Young</h1>
      <h4>a Front End Developer</h4>
      <a href="#about">
        <FontAwesomeIcon icon={ faArrowDown } className='continue-arrow' id='continue-arrow' />
        <Tooltip isOpen={tooltipShow} target='continue-arrow' toggle={() => { setTooltipShow(!tooltipShow) }} placement='bottom'>
          Click to continue
        </Tooltip>
      </a>
      <img src={ MeOutline } alt='Outline of Melissa Young' className='me-outline'/>
    </div>
  );
};
