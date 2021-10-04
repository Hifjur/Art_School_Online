import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

//css
const style ={
    color: 'white',
    textDecoration: 'none',
    padding: '20px',
    
};

const activeStyle={
    fontWeight: "bold",
    color: "orange",
    padding :"15px",
    border: "5px solid white",
    borderRadius: '20px'
  };

const title= {
    color: 'white',
    padding: '30px',
    backgroundColor: 'orange',
}
//css ends here
const Header = () => {
    return (
        <div className="header">
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    
                    <NavLink style={style} activeStyle={activeStyle} to ="/home">Home</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink style={style} activeStyle={activeStyle} to ="/courses" >Courses</NavLink>
                            <NavLink style={style} activeStyle={activeStyle} to ="/instructors">Instructors</NavLink>
                            <NavLink style={style} activeStyle={activeStyle} to ="/aboutus">About us</NavLink>
                        </Nav>
                        <Nav>
                            <Nav.Link to ="/login">Login</Nav.Link>
                            <Nav.Link to ="/profile">
                                Profile
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={title}>
            <h1 >Scribble School</h1>
            <small>TAKE YOUR ART TO THE NEXT LEVEL!</small>
            </div>
        </div>
    );
};

export default Header;