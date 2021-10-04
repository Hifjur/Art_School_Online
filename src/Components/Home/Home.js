import Course from "../Course/Course";
import CoursesHandler from "../../Hook/CoursesHandler.js";
import './Home.css'
import Showcase from "../Showcase/Showcase";
const Home = () => {

    const cardGroup= {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    }

    const coursesdata = CoursesHandler();
    const {courses}= coursesdata;
    const featured = courses.filter(course => course.key <= 4)
    return (
        <div>
            <Showcase></Showcase>
            <h1> Featured Courses</h1>
            <div className = "container " style={cardGroup}>
            {
                featured.map(course => <Course key={course.key} data= {course}></Course>)                
            }
            </div>
        </div>
    );
};

export default Home;