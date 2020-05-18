import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function StickyHeader({ show }) {

  const [tooltipShow, setTooltipShow] = useState(false);

  const changingStyle = {
    visibility: show ? 'visible' : 'hidden',
    transition: `all 300ms ${ show ? 'ease-in' : 'ease-out' }`,
    transform: `${ show ? 'none' : 'translate(0, -100%)' }`
  }

  return(
    <div className='sticky-header' style={changingStyle}>
      <a href='#'>
        <FontAwesomeIcon icon={ faArrowUp } id='return-arrow' />
        <Tooltip target='return-arrow' isOpen={tooltipShow} toggle={ () => setTooltipShow(!tooltipShow)} placement='bottom'>
          Return to Top
        </Tooltip>
      </a>
    </div>
  );
}
