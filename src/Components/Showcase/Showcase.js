import React from 'react';
import { Carousel } from 'react-bootstrap';

const Showcase = () => {
    
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://image.freepik.com/free-vector/angry-robot-scolding-mechanical-dog-peeing-floor-home_74855-16028.jpg"
                    alt="First slide"
                    style={{height:'700px', with: '800px'}}
                />
                <Carousel.Caption>
                    <h3>Digital Art Complete Course</h3>
                    
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
                    <h3>Complete Paiting Course</h3>
                    
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
                    <h3>Complete Sketch Course</h3>
                    
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Showcase;