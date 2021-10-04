import { faMailBulk, faMapSigns, faPhone,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Image } from 'react-bootstrap';
import img from '../../images/image.jpg'
const AboutUs = () => {
    const cardImage={
        hight: '100%',
        width: '100%'
    }
    return (
        <div>
            <h1>About US</h1>
            <p>We are here to bridge the gap between dreams and reality. For inquiries contacts us:</p>
            <p><FontAwesomeIcon icon={faPhone} /> 0254867889996</p>
            <p><FontAwesomeIcon icon={faMailBulk} /> scribble.school@scribble.edu</p>
            <p><FontAwesomeIcon icon={faMapSigns} /> New York</p>
            <Image src={img} style={cardImage} rounded />
            
        </div>
    );
};

export default AboutUs;