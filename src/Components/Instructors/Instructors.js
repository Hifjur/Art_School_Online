import React from 'react';
import InstructorsHandler from '../../Hook/InstructorsHandler';
import Instructor from '../Instructor/Instructor';


const Instructors = () => {
    const cardGroup= {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap:'30px',
    }

    const titleStyle={
        backgroundColor: '#292B2C',
        color: 'white',
        padding: '20px'
    }

    const instructorsdata = InstructorsHandler();
    const {instructors}= instructorsdata;
    console.log(instructors);
    return (
        <div>
            <h1 style={titleStyle}>All Instructors</h1>
            <div className = "container " style={cardGroup}>
            {
                instructors.map(instructor => <Instructor key= {instructor.key} data= {instructor}></Instructor>)                
            }
            </div>
        </div>
    );
};

export default Instructors;