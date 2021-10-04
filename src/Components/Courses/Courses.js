import React from 'react';
import CoursesHandler from '../../Hook/CoursesHandler';
import Course from '../Course/Course';

const Courses = () => {
    const cardGroup= {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap:'20px',
    }

    const coursesdata = CoursesHandler();
    const {courses, setCourses}= coursesdata;
    console.log(courses);
    return (
        <div>
            <h1>All Courses</h1>
            <div className = "container " style={cardGroup}>
            {
                courses.map(course => <Course data= {course}></Course>)                
            }
            </div>
        </div>
    );
};

export default Courses;