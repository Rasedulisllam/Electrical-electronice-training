import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand style={{color:'white'}}>E&#38;E TRAINING</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px',margin:'0 2rem' }}
                    navbarScroll
                >
                    <Nav.Link className='text-white'>Home</Nav.Link>
                    <Nav.Link className='text-white'>About</Nav.Link>
                    <Nav.Link className='text-white'>Service</Nav.Link>
                    <Nav.Link className='text-white'>Contact us</Nav.Link>
                    
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