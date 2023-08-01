import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import './ManageCourse.css';
import { BiSearch } from 'react-icons/bi';
import Axios from 'axios';

const ManageCourse = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  let token=localStorage.getItem("token");
  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  const fetchDataFromBackend = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses from backend:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();

    const newCourse = {
    
      cname: e.target.cname.value,
      duration: e.target.duration.value,
      fees: e.target.fees.value,
      imageurl: e.target.imageurl.value,
    };

    try {
      const response = await Axios.post('http://localhost:8181/course', newCourse,
      {
        headers:{
          Authorization: `Bearer ${token}`,
        }
        });
      const addedCourse = response.data;
      setCourses([...courses, addedCourse]);
      e.target.reset();
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const textStyle = {
    marginTop: '1px',
    marginLeft: '5px',
  };

  return (
    <div>
      <div>
        <nav className="navbar">
          <div className="it">
            <img
              src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270779/beirio-removebg-preview_um4vby.png"
              width="40px"
              height="40px"
              alt="Logo"
            />
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
              <img
                src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270147/profile-removebg-preview_zt8pt4.png"
                width="40px"
                height="40px"
                alt="Profile"
              />
            </div>
          </form>
        </nav>
      </div>
      <div style={textStyle}>
        <img
          src="https://img.freepik.com/free-photo/blank-notebook-surrounded-by-stationery-school-supplies_23-2148224242.jpg?w=1060&t=st=1690174750~exp=1690175350~hmac=a34cc936042990dbd3c9916cac43dcd6ec34558863ac56583b1f0bfb03204e12"
          alt="img"
          width="1500px"
          height="700px"
        />
      </div>
      <div className="course-form5">
        <h2>Courses</h2>
        <form onSubmit={handleAddCourse}>
          <label>
            cname
            <input type="text" name="cname" required />
          </label>
          <label>
            duration
            <input type="text" name="duration" required />
          </label>
          <label>
            fees
            <input type="text" name="fees" required />
          </label>
          <label>
            imageurl
            <input type="text" name="imageurl" required />
          </label>
          <button type="submit">Add Course</button>
        </form>
      </div>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default ManageCourse;
