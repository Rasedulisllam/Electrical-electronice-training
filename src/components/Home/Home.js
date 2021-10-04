import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./sortService.json')
            .then(res => res.json())
            .then (data => setServices(data))
    },[])
    return (
        <div>
            <div className='hero'>
                <Container>
                    <Row>
                    <Col sm={4}>
                        <h1 style={{color:'white',fontWeight:'bold',textAlign:'left'}}>Industrial Electrical and Electronics Training</h1>
                    </Col>
                    <Col sm={8}></Col>
                    </Row>
                </Container>
            </div>
            <div>
                <h1 className="py-5">Service</h1>
                <Container>
                  <Row xs={1} md={2} className="g-4 mb-5">
                      {
                        services.map(service=> <Service service={service} key={service.id}></Service>)
                      }
                  </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;


// const data=
// [
//     {
//         id:0,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63dH2K7kNbbdhKRfUXA-0VLPCykHVw1c41Q&usqp=CAU',
//         name:'Industrial PLC and HMI training',
//         price:10000,
//     },
//     {
//         id:1,
//         img:'https://www.ato.com/Content/Images/uploaded/vfd-and-soft-starter.jpg',
//         name:'Industrial VFD and Softstatar training',
//         price:8000,
//     },
//     {
//         id:2,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGW71SuUW2x8CNmTzOFwYTDSsrfGOiVEskPg&usqp=CAU',
//         name:'Basic Electronics and Electricity',
//         price:5000,
//     },
//     {
//         id:3,
//         img:'https://5.imimg.com/data5/TS/IV/IW/SELLER-20287497/star-delta-starter-control-panels-500x500-500x500.jpg',
//         name:'Star-delta and Single phase motors',
//         price:5000,
//     },

// ]