import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'carousel-react';

/**
 * WhisperingMistCarousel component displays a carousel of images with a whispering mist effect.
 * @param {Object} props - Component props
 * @param {string[]} props.images - Array of image URLs to be displayed in the carousel
 * @param {number} [props.interval] - Interval in milliseconds between automatic slides (default: 3000)
 * @returns {JSX.Element} WhisperingMistCarousel component
 */
const WhisperingMistCarousel = ({ images, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length, interval, isPaused]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
  };

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Carousel interval={interval} activeIndex={activeIndex} onChange={handleSlideChange}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </Carousel>
      <div>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handlePlay}>Play</button>
      </div>
    </div>
  );
};

WhisperingMistCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default WhisperingMistCarousel;
