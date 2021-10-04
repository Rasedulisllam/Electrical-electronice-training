import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='my-5'>
            <Container>
                <Row className="text-start">
                    <Col md={6}>
                        <h1 className="text-uppercase text-warning">Get In Touch With Us</h1>
                        <p>E&#38;E Training Are High Rise Building wiring , Industrial Wiring , Panel Board Controlling Circuit , Industrial Load Calculation  Distribution , Motor Control Circuit , Electrical Machines Maintenances  Rewinding , Substation , Generator Setup , Maintenances And Others Industrial Goods Suppliers.</p>
                        <div className='my-5'>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your frist name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your last name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Number</Form.Label>
                                    <Form.Control type="text" placeholder="Your phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="@gmail.com" />
                                </Form.Group>
                                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Massage</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                            <Button className='btn btn-outline-success'>submit</Button>
                        </div>
                    </Col>
                    <Col md={6} className='ps-5'>
                        <h1 className='text-uppercase text-warning'>Contact Info</h1>
                        <p>E&#38;E Training Are High Rise Building wiring , Industrial Wiring , Panel Board Controlling Circuit , Industrial Load Calculation  Distribution , Motor Control Circuit , Electrical Machines Maintenances  Rewinding , Substation , Generator Setup , Maintenances And Others Industrial Goods Suppliers.</p>
                        <div className='d-flex mt-4'>
                            <span><i class="fa fa-home" aria-hidden="true"></i></span>
                            <div className='ms-3'>
                                <h5>E&#38;E Training</h5>
                                <h5>Gulshan-2</h5>
                                <h5>Dhaka, Bangladesh</h5>
                            </div>
                        </div>
                        <div className='d-flex mt-4'>
                            <span><i class="fa fa-phone" aria-hidden="true"></i></span>
                            <h5 className='ms-3'>+880150000000</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;