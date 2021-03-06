import { useEffect, useState } from "react";

const CoursesHandler = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return {courses};
};

export default CoursesHandler;