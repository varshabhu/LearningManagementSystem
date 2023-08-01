
import React, { useRef,useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './work.css';
import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';



    
    const LearningProgress = () => {

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

      const h2style={
        marginLeft:'600px',
        fontweight:'bold',
        marginTop:'100px'
      }
      const styles = {
        container: {
          textAlign: 'center',
          padding: '-10px',
        },

      cardList1: {
      
        marginTop:'50px',
          display: 'flex',
          marginLeft:'100px',
          justifyContent: 'center',
        
        },
      
          card1: {
    
            width: '250px',
            height:'250px',
            marginLeft:'80px',
             border: '2px solid white',
             borderRadius: '25px',
          },
          
          image1: {
            marginLeft:'-5px',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            border: '2px solid white',
            borderRadius: '25px',
          
          }
        }

      const Card1= ({ title1, description1, imageUrl1, isActive }) => {
        return (
          <div style={{ ...styles.card1, backgroundColor: isActive ? 'lightblue' : 'white' }}>
            <h3 style={{fontstyle:"italic"}}>{title1}</h3>
            <img src={imageUrl1} alt={title1} style={styles.image1} />
            <p>{description1}</p>
          </div>
        );
      };
      const cards1= [
        {
          title1: 'Python',
          imageUrl1:'https://images.unsplash.com/photo-1649180556628-9ba704115795?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
          description1: '',
        }
      ];
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
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
      
      <div className="delta">

     <div style={styles.cardList1}>
      {cards1.map((card1, index) => (
        <Card1
          key={index}
          title1={card1.title1}
          imageUrl1={card1.imageUrl1}
          description1={card1.description1}
        />
      ))}
    </div>
    <Link to="/Learn"><button type="submit"> Start</button></Link>

    </div>
    <fieldset className="cont">
    <h3>Duration: 14h 15m</h3>
    <h3>Level: beginner </h3>
        <p className="tstyle">Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.</p>
    </fieldset>
<br></br>
          <h2 className="hh">Learning Progress: {progress}%</h2>
<fieldset className="set">
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
          />
          
        <div className="cat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsRClJ698se6aeWMQvmg5coPOVm8y1SSrLA&usqp=CAU" width="40px" height="40px"/>
            <h3>Completion Status </h3>
            <p style={{color:'grey'}}> You can earn a certificate by completing this content</p>
        </div>
        </fieldset>
      <div className="dot">
        <Carousel responsive={responsive}>
        {/* <div className="video-container"> */}
        <iframe width="460" height="315" src="https://www.youtube.com/embed/QXeEoD0pB3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="460" height="315" src="https://www.youtube.com/embed/A74TOX803D0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="460" height="315" src="https://www.youtube.com/embed/ER8oKX5myE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="460" height="315" src="https://www.youtube.com/embed/QXeEoD0pB3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="460" height="315" src="https://www.youtube.com/embed/QXeEoD0pB3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="460" height="315" src="https://www.youtube.com/embed/QXeEoD0pB3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* </div> */}
        </Carousel>
        </div>
        
    
    
       
    </div>
      );
    };
    
    export default LearningProgress;
    
   


  
