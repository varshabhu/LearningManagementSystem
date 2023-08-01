import React, { useState, useEffect } from 'react';
import './Course.css';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Course = () => {
  const rig = {
    marginLeft: '10%',
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courses1, setCourses1] = useState([]);
  const [filteredCourses1, setFilteredCourses1] = useState([]);
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    fetchDataFromBackend();
  }, []);
  
  const fetchDataFromBackend = async () => {
    try {
      const response1 = await Axios.get('http://localhost:8181/',{
      headers:{
        Authorization: `Bearer ${token}`,
      }
      });
      setCourses(response1.data);
      setFilteredCourses(response1.data);

      const response2 = await Axios.get('/api/courses1');
      setCourses1(response2.data);
      setFilteredCourses1(response2.data);
    } catch (error) {
      console.error('Error fetching courses from backend:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const filteredCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCourses(filteredCourses);

    const filteredCourses1 = courses1.filter((course1) =>
      course1.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCourses1(filteredCourses1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <div>
        <nav className="navbar">
          <div className="it">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270779/beirio-removebg-preview_um4vby.png" width="40px" height="40px" alt="Logo" />
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
            <button type="submit"><BiSearch /></button>
            <div className="cse">
              <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270147/profile-removebg-preview_zt8pt4.png" width="40px" height="40px" alt="Profile" />
            </div>
          </form>
        </nav>
      </div>

      <div style={{ display: 'flex', marginTop: '5%' }}>
        {filteredCourses.map((course) => (
          <div className="flip-card" style={rig} key={course.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={course.imageurl}
                  alt="Avatar"
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <div className="flip-card-back">
                <br />
                <h1 style={{ color: 'black' }}>{course.cname}</h1>
                <br />
                <p style={{ color: 'black' }}>Duration: {course.duration}</p>
                <br />
                <p style={{ color: 'black' }}>Fees: {course.fees}</p>
                <br />
                <Link to='/EnrollmentForm'>
                  <button type="submit">Enroll</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', marginTop: '5%' }}>
        {filteredCourses1.map((course1) => (
          <div className="flip-card1" style={rig} key={course1.id}>
            <div className="flip-card-inner1">
              <div className="flip-card-front1">
                <img
                  src={course1.imageurl}
                  alt="Avatar"
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <div className="flip-card-back1">
                <br />
                <h1 style={{ color: 'black' }}>{course1.cname}</h1>
                <br />
                <p style={{ color: 'black' }}>Duration: {course1.duration}</p>
                <br />
                <p style={{ color: 'black' }}>Fees: {course1.fees}</p>
                <br />
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

export default Course;
