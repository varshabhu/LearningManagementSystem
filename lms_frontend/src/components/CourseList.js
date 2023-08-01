import React from 'react';
import CourseCard from './CourseCard';

const CourseList = ({ courses, deleteCourse }) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} deleteCourse={deleteCourse} />
      ))}
    </div>
  );
};

export default CourseList;
