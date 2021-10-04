import React from 'react';
import { Carousel } from 'react-bootstrap';

const Showcase = () => {
    
    const textColor={
        color: "orange",
        backgroundColor: 'rgba(206, 230, 252, 0.648)',
        padding: '5px'
    }
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.ft.com/__origami/service/image/v2/images/raw/http://prod-upp-image-read.ft.com/e9a0d7ee-a1be-11e8-85da-eeb7a9ce36e4?source=next&fit=scale-down&quality=highest&width=1067"
                    alt="First slide"
                    style={{height:'700px', with: '800px'}}
                />
                <Carousel.Caption>
                    <h3 style={textColor} >Digital Art Complete Course</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-photo/ilustration-photography-abstract-art-wallpaper-design-background-perfect-batik-pattern-bohemian-wall-art-mirror-frame-luxury-background-carpet-design-tapestry-pattern-mat_182379-906.jpg"
                    alt="Second slide"
                    style={{height:'700px', with: '800px'}}
                />

                <Carousel.Caption>
                    <h3 style={textColor}>Complete Paiting Course</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-photo/top-view-colorful-pencils-with-copybooks-blue-wall-color-pen-school-kids-children_140725-65712.jpg"
                    alt="Third slide"
                    style={{height:'700px', with: '800px'}}
                />

                <Carousel.Caption>
                    <h3 style={textColor}>Complete Sketch Course</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Showcase;