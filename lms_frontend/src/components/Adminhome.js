import React,{useState,useRef} from 'react';
import './Adminhome.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';



const NavigationBar = () => {
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

  const footerStyle = {
    backgroundColor: 'rgb(84,90,167)',
    color: 'black',
    padding: '20px',
    height:'90px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    //position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    marginLeft:'200px',
    marginTop:'-5px',
  };
  const socialIconStyle = {
    fontSize: '24px',
    marginRight: '10px',
    color: '#50afbf',
  };
    

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
         
         
          <Link to="/Profile" style={linkStyle} activeStyle={hoverStyle}>
            Profile
          </Link>
          
        </div>
      </nav>
      <div className="sidebarStyle">
        <br />
       
        
        <Link to="/ManageCourse" style={sidebarLinkStyle} activeStyle={hoverStyle}>
           Manage Courses
        </Link>
        {/* <Link to="/Learn" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Manage Instructors
        </Link> */}
        <Link to="/ManageUser" style={sidebarLinkStyle} activeStyle={hoverStyle}>
         Manage Users
        </Link>
       <Link to="/" style={sidebarLinkStyle}>
          <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689091000/logout_dvsxna.png" alt="Logo" style={logoStyle} />
        </Link>
      
      </div>
    
      <div style={textStyle}>
      
     <img src="https://img.freepik.com/free-vector/digital-online-education-concept-blank-space-laptop_255625-422.jpg?size=626&ext=jpg&uid=R109431248&ga=GA1.1.1000453362.1689049470&semt=ais" alt="img" width="1330px" height="600px"/>
      </div> 
      
 

  
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