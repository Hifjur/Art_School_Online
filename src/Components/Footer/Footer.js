import { faCopyright} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    //css
    const footerStyle={
        marginTop: '30px',
        backgroundColor:'orange',
        padding:'50px',
        color:'white',
        position:'relative',
        bottom:'0',
        width:'100%'
    }
    return (
        <div style={footerStyle}>
            <p>All Rights Reserved Hifjur <FontAwesomeIcon icon={faCopyright} /></p>
        </div>
    );
};

export default Footer;