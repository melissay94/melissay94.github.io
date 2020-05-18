import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

export default function ImageCarousel({ images }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;

    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  }

  const previous = () => {
    if (animating) return;

    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  }

  return (
    <Carousel 
      activeIndex={ activeIndex }
      next={ next }
      previous={ previous }
      interval={ false }>
      { images.map(image => (
        <CarouselItem
          className='image-item'
          tag='div'
          key={image.index}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}>
          <img src={ image.src } alt={ image.alt } />
        </CarouselItem>
      ))}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}
