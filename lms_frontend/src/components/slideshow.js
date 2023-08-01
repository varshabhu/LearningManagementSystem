import React, { useState } from 'react';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
   
    
  };

  return (
    <div className="div1">
      <button onClick={handlePreviousSlide}>Previous</button>
      <img src={images[currentImageIndex]} alt="Slideshow" />
      <button onClick={handleNextSlide}>Next</button>
    </div>
  );
};

export default Slideshow;
