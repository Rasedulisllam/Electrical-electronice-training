import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
            .then(res => res.json())
            .then(data =>setServices(data))
    },[])
    return (
        <div>
            <Container>
                <h1 className='text-uppercase text-start fw-bold text-warning mt-5 mb-4'>Our services</h1>
                <Row xs={1} md={3} className="g-4 mb-5">
                    {
                        services.map(service=> <Service service={service} key={service.id}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;<h1>this is service</h1>