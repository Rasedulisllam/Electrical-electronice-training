import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const navLink={
        textDecoration:'none',
        color:'white'
    }
    const active={
        fontWeight: "bold",
        color: "aqua"
      }

    return (
        <div>
            <Navbar bg="dark" expand="lg">
            <Container >
                <Navbar.Brand style={{color:'white'}}>E&#38;E TRAINING</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px',margin:'0 2rem' }}
                    navbarScroll
                >
                    <Nav.Link className='text-white'><NavLink style={navLink} activeStyle={active}  to='/home'>Home</NavLink></Nav.Link>
                    <Nav.Link className='text-white'><NavLink style={navLink} activeStyle={active} to='/about'>About</NavLink></Nav.Link>
                    <Nav.Link className='text-white'><NavLink style={navLink} activeStyle={active} to='/service'>Service</NavLink></Nav.Link>
                    <Nav.Link className='text-white'><NavLink style={navLink} activeStyle={active} to='/contact'>Contact us</NavLink></Nav.Link>
                    
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success" className='btn btn-outline-success'>Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;