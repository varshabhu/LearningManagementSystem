
import React, { useRef,useState} from 'react';
import './NavSide.css';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const About = () => {
 

  
  const mainContentStyle = {
    marginLeft: '220px',
    padding: '20px',
  };

  const slideshowContainerStyle = {

     marginLeft: '220px',
     marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const slideImages = [
    "https://tse2.mm.bing.net/th?id=OIP.1ZwbiO2COpPjfJ7ppEXfngHaDQ&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.o0-QlfkZf9xlNmwa9Sk3xAHaEK&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.uKDrg9_OIgtS_qajSkJ5agHaDB&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.wxj_VetISpGTp7JcSsiq_QHaEK&pid=Api&P=0&h=180",

  ];

  const slideProperties = {
    duration: 5000, 
    transitionDuration: 500, // Transition duration between slides in milliseconds
    infinite: true, // Whether to loop the slideshow continuously
    indicators: true, // Whether to show slide indicators at the bottom
    arrows: true, // Whether to show previous/next arrows
    autoplay: true, // Whether to automatically transition to the next slide
    pauseOnHover: true, // Whether to pause the slideshow on hover
    canSwipe: true, // Whether to allow swiping on touch-enabled devices
  };

  const slideContainerStyle = {
    height: '10px', // Adjust the height as needed
    width: '500px', // Adjust the width as needed
    marginTop: '0px', // Center the slideshow horizontally
  };

  const slideImageStyle = {
    height: '100%', // Make the images fill the slide container vertically
    width: '100%', // Make the images fill the slide container horizontally
    objectFit: 'cover', // Scale and crop the images to fit the container
  };
 
  const slideshowRef = useRef(null);


  const handleSlideChange = () => {
    if (slideshowRef.current) {
      slideshowRef.current.goNext();
    }
  };

 

  
   


  return (
    <>
      <div>
    <Topbar/>
      
      <div style={slideshowContainerStyle}>
        <br></br>
        <br></br>
        
        <div style={slideContainerStyle}>
          <Slide {...slideProperties} ref={slideshowRef}>
            {slideImages.map((image, index) => (
              <div key={index} className="each-slide">
                <img src={image} alt={`Slide ${index + 1}`} style={slideImageStyle} />
              </div>
            ))}
          </Slide>
        </div>
      </div>   
      </div>

    

     
   
    </>
  );
};

export default About;