import React from 'react';
import { Button, Card, Image, Row } from 'react-bootstrap';
import './Coruse.css'



const Course = (props) => {

    const cardImage={
        height: '250px',
        width: 'auto',
        marginTop: '30px',
        border: '5px solid orange',
        borderRadius: '20px',
    }
    
    const cardStyle ={ 
        width: '18rem', 
        flex: 1, 
        height: '500px',
        boxShadow: '5px 10px #888888'
    };

    // const info= {
    //     display: 'none',
    //     animation: {
    //         ":hover": {display: 'block'}
    //     }
    // }
    
    

    const { key, name, price, catagory, img, description } = props.data;
    //console.log(props.data);
    return (
        <div className="container g-4 ">
            <Row xs={1} md={2} className="g-4">
                <Card className="card " style={cardStyle} >
                    {/* <Card.Img class="card-image"variant="top" src={img} /> */}
                    <Image src={img} style={cardImage} rounded />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {/* <p style={info}>{description}</p> */}
                            <p>Catagory: {catagory}</p>
                            <p>Price: {price}</p>
                        </Card.Text>
                        <Button variant="dark">Enroll</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
};

export default Course;