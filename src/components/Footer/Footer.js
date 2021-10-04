import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    
    return (
        <div className='bg-dark p-4'>
            <Container>
                <Row>
                    <Col md={6} className="text-white text-start">
                       <h2>Electrical and Electronics Training</h2>
                       <p>High Rise Building wiring , Industrial Wiring , Maintenances And Others Industrial Goods Suppliers.</p>
                       <h4 className='mt-5'>E&#38;E Training</h4>
                    </Col>
                    <Col md={6} className='text-white'>
                        <ul className='d-flex align-items-center'>
                            <li className='list-unstyled px-2'>Follow us :</li>
                            <li className='list-unstyled px-2 social-icon'><i class="fab fa-facebook" aria-hidden="true"></i></li>
                            <li className='list-unstyled px-2 social-icon'><i class="fab fa-twitter" aria-hidden="true"></i></li>
                            <li className='list-unstyled px-2 social-icon'><i class="fab fa-youtube" aria-hidden="true"></i></li>
                            <li className='list-unstyled px-2 social-icon'><i class="fab fa-instagram" aria-hidden="true"></i></li>
                        </ul>
                    </Col>
                </Row>
                <Row className='bg-gray pt-4'>
                    <Col className='text-white'><small>&copy;COPYRIGHT 2021 E&#38;E TRAINING. ALL RIGHTS RESERVED.</small></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;