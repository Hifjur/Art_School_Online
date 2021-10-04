import React from 'react';
import { Image } from 'react-bootstrap';

//css
const imageStyle ={
    hight: '100%',
    width: '100%'
}
const NotFound = () => {
    return (
        <div>
            <Image src="https://macvertech.com/wp-content/uploads/2021/01/bg-img-404-error-1920x1080-1.jpg" style={imageStyle} rounded />
        </div>
    );
};

export default NotFound;