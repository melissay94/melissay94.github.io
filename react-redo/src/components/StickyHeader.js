import React from 'react';
import ReturnArrow from '../assets/returnArrow.png';

export default function StickyHeader({ show }) {

  const changingStyle = {
    visibility: show ? 'visible' : 'hidden',
    transition: `all 300ms ${ show ? 'ease-in' : 'ease-out' }`,
    transform: `${ show ? 'none' : 'translate(0, -100%)' }`
  }

  return(
    <div className='sticky-header' style={changingStyle}>
      <a href='#'>
        <h6>Return to Top</h6>
        <img src={ ReturnArrow } alt='Back to Top' />
      </a>
    </div>
  );
}
