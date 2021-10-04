import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Chart from '../Chart/Chart';

const About = () => {

    return (
        <div>
           <div>
               <Container>
                <h1 className='fw-bold mt-4'><span className="text-warning">OUR</span> SPECIALITIES</h1>
                <p>EE Training Are High Rise Building wiring , Industrial Wiring , Panel Board Controlling Circuit , Industrial Load Calculation  Distribution , Motor Control Circuit , Electrical Machines Maintenances  Rewinding , Substation , Generator Setup , Maintenances And Others Industrial Goods Suppliers.</p>
               </Container>
               {/* student chart import */}
               <div>
                 <Chart></Chart>
               </div>
                
                <Container>
                    <Row>
                        <Col md={6}>
                            <img className='img-fluid' src={'https://thumbs.dreamstime.com/b/call-center-customer-support-hotline-operator-advises-client-online-technical-vector-illustration-139728240.jpg'} alt="" />
                        </Col>
                        <Col md={6} className='text-start mt-5'>
                            <h1 className='text-bold mb-2 text-warning'>OUR SUPPORTS</h1>
                            <p> High Rise Building wiring , Industrial Wiring , Panel Board Controlling Circuit , Industrial Load Calculation Distribution , Motor Control Circuit , Electrical Machines Maintenances Rewinding , Substation , Generator Setup , Maintenances And Others Industrial Goods Suppliers.</p>
                            <ul className='p-0 mt-4'>
                                <li className='list-unstyled fw-bold py-2 border-bottom border-1'>Friendly Trainers</li>
                                <li className='list-unstyled fw-bold py-2 border-bottom border-1'>Industrial Project Practice</li>
                                <li className='list-unstyled fw-bold py-2 border-bottom border-1'>Day  Evening Batch System</li>
                                <li className='list-unstyled fw-bold py-2 border-bottom border-1'>Facilities For Sub-Station Visit</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
           </div>
        </div>
    );
};

export default About;