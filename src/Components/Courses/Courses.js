import React from 'react';
import CoursesHandler from '../../Hook/CoursesHandler';
import Course from '../Course/Course';

const Courses = () => {
    //css
    const cardGroup= {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap:'20px',
    }
    const titleStyle={
        backgroundColor: '#292B2C',
        color: 'white',
        padding: '20px'
    }

    
    const coursesdata = CoursesHandler();
    const {courses}= coursesdata;
    console.log(courses);
    return (
        <div>
            <h1 style={titleStyle}>All Courses</h1>
            <div className = "container " style={cardGroup}>
            {
                courses.map(course => <Course key = {course.key} data= {course}></Course>)                
            }
            </div>
        </div>
    );
};

export default Courses;