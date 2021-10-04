import Course from "../Course/Course";
import CoursesHandler from "../../Hook/CoursesHandler.js";
import './Home.css'
const Home = () => {

    const cardGroup= {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    }

    const coursesdata = CoursesHandler();
    const {courses, setCourses}= coursesdata;
    const featured = courses.filter(course => course.key <= 4)
    return (
        <div>
            <h1> Featured Courses</h1>
            <div className = "container " style={cardGroup}>
            {
                featured.map(course => <Course data= {course}></Course>)                
            }
            </div>
        </div>
    );
};

export default Home;