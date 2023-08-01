import React, { useRef,useState} from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './NavSide.css';
import Product from './Product';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';
import 'react-slideshow-image/dist/styles.css';

import { useSelector } from 'react-redux'
const NavigationBar = () => {
  const email = useSelector((state) => state.login.email);
   
    const username = email.substr(0, email.indexOf('@')); 
    const letter = username.substr(0, 1);
    const uppercaseLetter = letter.toUpperCase();
    const name = email.substr(1, email.indexOf('@')-1);
  const navStyle = {
    backgroundColor: 'rgb(84,90,167)',
    color: 'white',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  }

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '50px',
    height: '40px',
  };

  
  const sidebarStyle = {
    backgroundColor: 'rgb(33, 99, 230)',
    padding: '20px',
    width: '200px',
    position: 'fixed',
    top: '50px',
    left: 0,
    bottom: 0,
  };

  const sidebarLinkStyle = {
    display: 'block',
    margin: '25px 0',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const hoverStyle = {
    backgroundColor: 'blue',
    color: 'black',
  };

  
  const textStyle = {
   marginTop:'70px',
    marginLeft:'190px',


   };
  const headstyle={
    marginLeft:'500px',
  }
  const hstyle={
    marginLeft:'400px',
    fontweight:'bold',
  }
  const h2style={
    marginLeft:'600px',
    fontweight:'bold',
    marginTop:'100px'
  }
  const h3style={
    marginLeft:'600px',
    fontweight:'bold',
    marginTop:'50px'
  }
  const hai={
    marginLeft:'620px',
  }
  const styles = {
    container: {
      textAlign: 'center',
      padding: '-10px',
    },
    cardList: {
      display: 'flex',
      marginLeft:'200px',
      justifyContent: 'center',
    },
  
      card: {
        width: '250px',
        height:'200px',
        marginRight:'10px',
         border: '1px solid #ccc',
         borderRadius: '5px',
      },
      
      image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      
      },
      cardList1: {
      
      marginTop:'50px',
        display: 'flex',
        marginLeft:'100px',
        justifyContent: 'center',
      
      },
    
        card1: {
  
          width: '250px',
          height:'200px',
          marginLeft:'80px',
           border: '2px solid black',
           borderRadius: '5px',
        },
        
        image1: {
          marginLeft:'100px',
          width: '20%',
          height: '20%',
          objectFit: 'cover',
        
        },
        cardList2: {
      
          marginTop:'50px',
            display: 'flex',
            marginLeft:'100px',
            justifyContent: 'center',
          
          },
        
            card2: {
      
              width: '250px',
              height:'200px',
              marginLeft:'80px',
               border: '2px solid white',
               borderRadius: '25px',
            },
            
           
            image2: {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              // border: '2px solid white',
              borderRadius: '50%',
            
            },
    
  };
  const footerStyle = {
    backgroundColor: 'rgb(84,90,167)',
    color: 'black',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    //position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    marginLeft:'210px',
    marginTop:'50px',
  };

  const socialIconStyle = {
    fontSize: '24px',
    marginRight: '10px',
    color: '#50afbf',
  };
  
  const slideshowRef = useRef(null);


  const handleSlideChange = () => {
    if (slideshowRef.current) {
      slideshowRef.current.goNext();
    }
  };

 


  

  
   

    const Card1= ({ title1, description1, imageUrl1, isActive }) => {
      return (
        <div style={{ ...styles.card1, backgroundColor: isActive ? 'lightblue' : 'white' }}>
          <img src={imageUrl1} alt={title1} style={styles.image1} />
          <h3>{title1}</h3>
          <p>{description1}</p>
        </div>
      );
    };
    const cards1= [
      {
        title1: 'Personalized Learning',
        imageUrl1:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689182634/ppfdsnd-removebg-preview_jl2iqb.png',
        description1: 'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.'
      },
     
      {
        imageUrl1:'https://tse1.mm.bing.net/th?id=OIP.oY6F-ORlnG639PHJaKwBMwHaHa&pid=Api&P=0&h=180',
        title1: 'Trusted content',
        description1: 'Created by experts, ABH Academy’s library of trusted, standards-aligned practice and lessons covers math K-12 through early college, grammar, science, history, SAT®, and more. It’s all free for learners and teachers.',
      },
      {
        imageUrl1:'https://tse3.mm.bing.net/th?id=OIP.ami-QlMyEl72o6C3U7ACCwHaHa&pid=Api&P=0&h=180',
        title1: 'Tools to empower teachers',
        description1: 'With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.',
      },
      
     
    ];

    const Card2 = ({ title2, description2, imageUrl2, isActive }) => {
      return (
        <div style={{ ...styles.card2, backgroundColor: isActive ? 'lightblue' : 'white' }}>
          <img src={imageUrl2} alt={title2} style={styles.image2} />
          <h3>{title2}</h3>
          <p>{description2}</p>
        </div>
      );
    };
  
  
    
      const cards2 = [
        {
          imageUrl2:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689188201/WhatsApp_Image_2023-07-13_at_12.25.52_AM_k35x6s.jpg',
          title2: 'Bhuvaneshwari',
          description2: 'Even more important than knowledge is confidence, which i have gained through my learning journey.No matter what you are looking to learn, or gain confidence in,ABH academy has something for you',
        },
       
        {
          imageUrl2:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689189013/WhatsApp_Image_2023-07-13_at_12.39.10_AM_hiw8bs.jpg',
          title2: 'Anusree',
          description2: 'Earning my IT certificates helped me demonstrate my knowledge to recruiters and enhanced my standing as an applicant.',
        },
       
        {
          imageUrl2:'https://res.cloudinary.com/dtrytsho8/image/upload/v1669134572/dhaks_mo4mu3.jpg',
          title2: 'Dhakshiniya C A',
          description2: 'The program  totally changed my life.I have this career in front of me now that was not even in sight before,and its what I want to be doing.Thats really powerful',
        },
       
      
       
       
      ];
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
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
      const productdata =[
       
        {
          id:1,
          imageUrl:'https://wallpapercave.com/wp/wp8816346.jpg',
          name:'python',
          description:'soem jsfsj'
        },
        {
          id:2,
          imageUrl:'https://tse1.mm.bing.net/th?id=OIP.LhWTiTZosp1jQXZ7-zc6egHaDj&pid=Api&P=0&h=180',
          name:'Java',
          description:'soem jsfsj'
        },
        {
          id:3,
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIv9VemwFYtx8jbgL0ap84wXK6uR8ss9RTJg&usqp=CAU',
          name:'React',
          description:'soem jsfsj'
        },
        {
          id:4,
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURGhJ0tAMrhU2qo9gD1sjsqWXx7Od14WGhH13nPtNvVyfToX6Zmu6bxOO-tkxlyFnmoA&usqp=CAU',
          name:'Spring Boot',
          description:'soem jsfsj'
        },
        {
          id:5,
          imageUrl:'https://cdn.educba.com/academy/wp-content/uploads/2020/06/MYSQL-Database.jpg',
          name:'Mysql ',
          description:'soem jsfsj'
        },
        {
          id:6,
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qYg0_BYEUQpuSzag44weX9KgZlTbRyX3SMHnVfBxXRMsXYtYNc7Ggq_P7tsMRbC_o4s&usqp=CAU',
          name:'Flutter',
          description:'soem jsfsj'
        },
        {
          id:7,
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWck3TAMdfP6Zz87erqP4WX3uEXsi_bwsoLg&usqp=CAU',
          name:'AWS',
          description:'soem jsfsj'
        },
      ]
      
     const product= productdata.map((item) => <Product name={item.name} url={item.imageUrl} description={item.description}/>);
    

  return (
    <>
      <nav style={navStyle}>
      <h1 style={headstyle}>LEARNING MANAGEMENT SYSTEM</h1>
        <Link to="/home" style={linkStyle}>
        
        </Link>
        <div style={containerStyle}>
          <Link to="/Navi" style={linkStyle} activeStyle={hoverStyle}>
            Home 
          </Link>
          <Link to="/Contact" style={linkStyle} activeStyle={hoverStyle}>
           Contact us
          </Link>
          <Link to="/Feedback" style={linkStyle} activeStyle={hoverStyle}>
           FeedBack
          </Link>
         
         
          <Link to="/Profile" style={linkStyle} activeStyle={hoverStyle}>
            Profile
          </Link>
          
        </div>
      </nav>
      <div className="sidebarStyle">
        <br />
       
        
        <Link to="/Course" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Courses
        </Link>
        <Link to="/Learn" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Assesments
        </Link>
        <Link to="/Complete" style={sidebarLinkStyle} activeStyle={hoverStyle}>
         Completion Status
        </Link>
       <Link to="/" style={sidebarLinkStyle}>
          <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689091000/logout_dvsxna.png" alt="Logo" style={logoStyle} />
        </Link>
      
      </div>
     <div style={textStyle}>
      
     <img src="https://t3.ftcdn.net/jpg/04/75/86/04/240_F_475860473_FH3qJuToJ2IjBRpBaX0Bzb554B8kiMMP.jpg" alt="img" width="1340px" height="500px"/>
      </div> 
  
    <h1 style={hstyle}> 
    <h2>Welcome {uppercaseLetter}{name}</h2>
    <br></br>Explore New And Trending Online Courses </h1>
    <br></br><br></br>
     <div className="del">
    <Carousel responsive={responsive}>
     {product}
    </Carousel>
    </div> 

<br></br><br>
</br>

<div className="cool">
<h1 style={h2style}>Why ABH Academy Works</h1>
<div style={styles.cardList1}>
      {cards1.map((card1, index) => (
        <Card1
          key={index}
          title1={card1.title1}
          description1={card1.description1}
          imageUrl1={card1.imageUrl1}
        />
      ))}
    </div>
    </div>

<br></br><br></br>
    <div className="div2">
<h1  style ={h3style}>From  OUR ACADEMY</h1>
<h3 style={hai}>peoples have already joined Our Course</h3>
<div style={styles.cardList2}>
      {cards2.map((card2, index) => (
        <Card2
          key={index}
          title2={card2.title2}
          description2={card2.description2}
          imageUrl2={card2.imageUrl2}
        />
      ))}
    </div>
    </div>
    <br></br>      
    

   <fieldset className="feel">
    <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689190211/child_l70502.jpg"alt="img" width="500px" height="400px"/>
      <div className="none">
      <h2 style={{color:'grey'}}>Together we can make a difference</h2><br></br>
    <h1 style={{fontweight:"bold"}}>Every child deserves the chance to learn.</h1>
    <p style={{fontsize:"10px"}}> Across the globe, 617 million children are missing basic math and reading skills. We’re a nonprofit delivering the education they need, and we need your help. You can change the course of a child’s life.</p>
    <br></br>
    <button type="submit"> Give Them Chance</button>
   </div>
   </fieldset>
           
          <br>
          </br>
          <fieldset className="col">
            <h1>We collaborate with 100+ leading universities and companies</h1><br></br><br></br>
            <div className="imm">
            <img src="https://tse3.mm.bing.net/th?id=OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj&pid=Api&P=0&h=180" alt="img" width="100px" height="100px"/>
            <img src="https://lh3.googleusercontent.com/proxy/PqWsFMvlVBwVgApk3gnLA9KC-4WMqFW8tmvqY6maQEzH3YNVtjaQkIx5f0iuu6ocJP48zrnkczL-540QPvD8XJvIIqrCPlMLC-3_X3igsnz4=s0-d" alt="img" width="100px" height="100px"/>
            <img src="https://tse2.mm.bing.net/th?id=OIP.YdkQGmhB9c2Sr84FeDD9egHaEK&pid=Api&P=0&h=180" alt="img" width="100px" height="100px"/>
            <img src="https://tse1.mm.bing.net/th?id=OIP.A9OlN711xOJKpHopyUSkTgHaF7&pid=Api&P=0&h=180" alt="img" width="100px" height="100px"/>
            <img src="https://tse2.mm.bing.net/th?id=OIP.xbl5Q9A03db7zcxaI1dBWgHaJl&pid=Api&P=0&h=180" alt="img" width="100px" height="100px"/>
            <img src="https://tse4.mm.bing.net/th?id=OIP.jaYUrGTA1AvMhnLd8G-1BgHaFr&pid=Api&P=0&h=180" alt="img" width="100px" height="100px"/>
            <img src="https://tse3.mm.bing.net/th?id=OIP.jdQ0-zCqys8HUsVr1-EE6AHaEK&pid=Api&P=0&h=180" alt="img" width="100px" height="100px"/>
            <img src="https://tse4.mm.bing.net/th?id=OIP.rtObMjjqqqdm33jeSeBzcwHaHa&pid=Api&P=0&h=180" alt="img" width="100px" height="100px"/>
            <img src="https://tse2.explicit.bing.net/th?id=OIP.1GajfyJ3PdMjI42NkxAWKQHaEo&pid=Api&P=0&h=180" alt="img" width="100px" height="100px"/>
            <img src="https://tse1.mm.bing.net/th?id=OIP.PKxy2PqNWzzMkSO52jO6WwHaG2&pid=Api&P=0&h=180 "  alt="img" width="100px" height="100px"/>
            </div>
          </fieldset>

   <br></br><br></br>
      <br></br> 
      <footer style={footerStyle}>
      <div>
        <span>&copy; 2023  All rights reserved.</span>
      </div>
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={socialIconStyle} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={socialIconStyle} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={socialIconStyle} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={socialIconStyle} />
        </a>
      </div>
    </footer>

     
    

     
   
    </>
  );
};

export default NavigationBar;