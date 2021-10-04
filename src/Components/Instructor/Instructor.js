
import React from 'react';
import { Button, Card, Image, Row } from 'react-bootstrap';

const Instructor = (props) => {
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


    const { name, img, Position} = props.data;
    //console.log(props.data);
    return (
        <div className="container g-4 ">
            <Row xs={1} md={2} className="g-4">
                <Card className="card " style={cardStyle} >
                    <Image src={img} style={cardImage} rounded />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {/* <p style={info}>{description}</p> */}
                            {Position}
                            
                        </Card.Text>
                        <Button variant="dark">Contact</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
};

export default Instructor;