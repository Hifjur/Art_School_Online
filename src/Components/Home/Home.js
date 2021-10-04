import Course from "../Course/Course";
import CoursesHandler from "../../Hook/CoursesHandler.js";

import Showcase from "../Showcase/Showcase";
const Home = () => {

    const cardGroup= {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap : '80px'
    }

    const titleStyle={
        backgroundColor: '#151617',
        color: 'white',
        padding: '20px'
    }

    const coursesdata = CoursesHandler();
    const {courses}= coursesdata;
    const featured = courses.filter(course => course.key <= 4)
    return (
        <div>
            <Showcase></Showcase>
            <h1 style={titleStyle}> Featured Courses</h1>
            <div className = "container " style={cardGroup}>
            {
                featured.map(course => <Course key={course.key} data= {course}></Course>)                
            }
            </div>
        </div>
    );
};

export default Home;