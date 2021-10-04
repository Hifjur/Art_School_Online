import { useEffect, useState } from "react";

const InstructorsHandler = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./instructor.JSON')
        .then(res => res.json())
        .then(data => setInstructors(data));
    },[])
    return {instructors};
};

export default InstructorsHandler;