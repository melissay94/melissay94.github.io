import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as FilledStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as OutlineStar } from '@fortawesome/free-regular-svg-icons';

export default function StarRating({ rating }){

  const starRating = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FontAwesomeIcon icon={FilledStar} key={`filled-${i}`} />);
    }
    if (Math.floor(rating) < rating) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key='half-filled' />);
    }
    for (let i = 0; i < (5 - Math.ceil(rating)); i++) {
      stars.push(<FontAwesomeIcon icon={OutlineStar} key={`outline-${i}`}/>);
    }

    return stars;
  }

  return (
    <div className='star-rating'>
      {starRating().map(star => (
        star
      ))}
    </div>
  );
}
