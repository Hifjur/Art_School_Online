import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const style ={
    color: 'white',
    textDecoration: 'none',
    padding: '20px',
    
};
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink style={style} to ="/home">Home</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink style={style} to ="/courses" >Courses</NavLink>
                            <NavLink style={style} to ="/instructors">Instructors</NavLink>
                            <NavLink style={style} to ="/aboutus">About us</NavLink>
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
        </div>
    );
};

export default Header;