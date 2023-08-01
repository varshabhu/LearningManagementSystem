
import React, { useRef,useState} from 'react';
import ReactCardSlider from 'react-card-slider-component';
import './complete.css';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Slider from 'react-slick';


    
    const Complete = () => {

        const [searchTerm, setSearchTerm] = useState('');

        const handleSearch = (e) => {
          setSearchTerm(e.target.value);
        };
      
        const handleSearchSubmit = (e) => {
          e.preventDefault();
          // Handle search submit logic here
          console.log('Search term:', searchTerm);
          setSearchTerm('');
        };
      const [progress, setProgress] = useState(0);
    
      const handleProgressChange = (event) => {
          setProgress(event.target.value);
      };

      const Card2 = ({ title2, description2,disc, imageUrl2, isActive }) => {
        return (
          <div style={{ ...styles.card2, backgroundColor: isActive ? 'lightblue' : 'white' }}>
            <img src={imageUrl2} alt={title2} style={styles.image2} />
            <h3>{title2}</h3>
            <p>{description2}</p>
            <p style={styles.disc2}>{disc}</p>
          </div>
        );
      };
    
    
      
        const cards2 = [
          {
            imageUrl2:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689318412/ccccccccc-removebg-preview_jlttps.png',
            title2: '2',
            description2: 'Courses Enrolled',
          
          },
          {
            imageUrl2:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689318675/ttttttttttt-removebg-preview_1_hkquly.png',
            title2: '70.5%',
            description2: 'Overall Completion',
            disc:'',
          },
          {
            imageUrl2:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689318922/ddddddd-removebg-preview_nv33ir.png',
            title2: '0',
            description2: 'completed',
            disc:'',
          },
          {
            imageUrl2:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689319095/exxx-removebg-preview_1_xembks.png',
            title2: '0',
            description2: 'Expired',
            disc:'',
          },
  
         
         
        ];
    
        const styles = {
          container: {
            textAlign: 'center',
            padding: '-10px',
          },
          
          
  
            cardList2: {
        
              marginTop:'100px',
                display: 'flex',
                justifyContent: 'center',
              
              },
            
                card2: {
                  objectfit:'cover',
                  width: '500px',
                  height:'150px',
                 marginLeft:'50px',
                   border: '2px solid black',
                   borderRadius: '5px',
                   left:0,
                },
                
               
                image2: {
                  width: '20%',
                  height: '40%',
                  objectFit: 'cover',
                  marginLeft:'-200px',
                  // border: '2px solid white',
                  borderRadius: '25%',
                
                },
          }
      return (
          
          <div className="learning-progress">
        <nav className="navbar">
        <div className="it">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270779/beirio-removebg-preview_um4vby.png" width="40px" height="40px"/>
        </div>
        <div className="navbar-brand">Explore</div>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit" className="search-button">
            <img src=" https://res.cloudinary.com/dv3xtovhk/image/upload/v1689269368/siitiit-removebg-preview_e0lvku.png" width="20px" height="40px"/>
          </button>
          <div className="cse">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270147/profile-removebg-preview_zt8pt4.png" width="40px" height="40px"/>
          </div>
        </form>
      </nav>
      

      <div style={styles.cardList2}>
      {cards2.map((card2, index) => (
        <Card2
          key={index}
          imageUrl2={card2.imageUrl2}
          title2={card2.title2}
          description2={card2.description2}
          disc={card2.disc}
        />
      ))}
    </div>
      
    
   
   



       
    </div>
      );
    };
    
    export default Complete;
    
   


  
