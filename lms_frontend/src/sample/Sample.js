import React, { useState } from 'react';
import './Sample.css';
import {BiSearch} from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Sample = () => {
  // ... existing code ...


  const rig = 
  {
    marginLeft:'10%',
  }
  // Sample courses data
  const courses = [
    {
      id: 1,
      name: 'Python',
      duration: '30 days',
      fees: '13,000',
      image: 'https://tse4.mm.bing.net/th?id=OIP.b4E5lI3Wkz40DK-KalZ3vwHaEc&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      name: 'Java',
      duration: '30 days',
      fees: '13,000',
      image: 'https://tse2.mm.bing.net/th?id=OIP.BbC4Rl-oucLWg869MVk5SAHaEn&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'SpringBoot',
      duration: '30 days',
      fees: '13,000',
      image: 'https://tse2.mm.bing.net/th?id=OIP.BbC4Rl-oucLWg869MVk5SAHaEn&pid=Api&P=0&h=180',
    },
    
    {
      id: 4,
      name: 'Mysql',
      duration: '30 days',
      fees: '13,000',
      image: 'https://tse2.mm.bing.net/th?id=OIP.BbC4Rl-oucLWg869MVk5SAHaEn&pid=Api&P=0&h=180',
    },
    
    {
      id: 5,
      name: 'Oracle',
      duration: '30 days',
      fees: '13,000',
      image: 'https://tse2.mm.bing.net/th?id=OIP.BbC4Rl-oucLWg869MVk5SAHaEn&pid=Api&P=0&h=180',
    },
    
    
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submit logic here
    console.log('Search term:', searchTerm);
  };

  // Filter the courses based on the search term
  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* ... existing code ... */}
      <div>
      <nav className="navbar">
        <div className="it">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270779/beirio-removebg-preview_um4vby.png" width="40px" height="40px"/>
        </div>
        <div className="navbar-brand">Explore</div>
      
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit"><BiSearch/></button>
          <div className="cse">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270147/profile-removebg-preview_zt8pt4.png" width="40px" height="40px"/>
          </div>
        </form>
        </nav>
      </div>
      {/* ... existing code ... */}
      <div style={{ display: 'flex', marginTop: '5%' }}>
        {/* Map through filtered courses instead of the hard-coded courses */}
        {filteredCourses.map((course) => (
          <div className="flip-card" style={rig} key={course.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={course.image}
                  alt="Avatar"
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <div className="flip-card-back">
                <br></br>
                <h1 style={{ color: 'black' }}>{course.name}</h1>
                <br></br>
                <p style={{ color: 'black' }}>Duration: {course.duration}</p>
                <br></br>
                <p style={{ color: 'black' }}>Fees: {course.fees}</p>
                <br></br>
                <Link to='/EnrollmentForm'>
                  <button type="submit">Enroll</button>
                </Link>
              </div>
            </div>
          </div>
        ))}


      </div>
      
    </div>


    
  );
};

export default Sample;
