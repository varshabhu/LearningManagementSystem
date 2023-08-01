import React, { useState } from 'react';

const CourseForm = ({ addCourse }) => {
  const [course, setCourse] = useState({
    title: '',
    details: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({
      ...course,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(course);
    setCourse({
      title: '',
      details: '',
      image: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={course.title}
        onChange={handleChange}
        placeholder="Course Title"
        required
      />
      <textarea
        name="details"
        value={course.details}
        onChange={handleChange}
        placeholder="Course Details"
        required
      />
      <input
        type="url"
        name="image"
        value={course.image}
        onChange={handleChange}
        placeholder="Course Image URL"
        required
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CourseForm;
