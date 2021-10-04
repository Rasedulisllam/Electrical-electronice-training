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
                <h1 className="py-5 text-warning text-uppercase">Service</h1>
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
//         details:'Most modern control systems employ a PLC (Programmable Logic Controller) as a means to control motors, pumps, valves and various other equipment used in a process.',
//         price:10000,
//     },
//     {
//         id:1,
//         img:'https://www.ato.com/Content/Images/uploaded/vfd-and-soft-starter.jpg',
//         name:'Industrial VFD and Softstatar training',
//         details:'The main difference between the two is that a VFD can vary the speed of a motor while a soft starter only controls the starting and stopping of that motor.',
//         price:8000,
//     },
//     {
//         id:2,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGW71SuUW2x8CNmTzOFwYTDSsrfGOiVEskPg&usqp=CAU',
//         name:'Basic Electronics and Electricity',
//         details:'Comparing these two types of engineering is like comparing the meaning of electric vs electronic. Electrical devices convert electrical energy into other forms of energy,',
//         price:5000,
//     },
//     {
//         id:3,
//         img:'https://5.imimg.com/data5/TS/IV/IW/SELLER-20287497/star-delta-starter-control-panels-500x500-500x500.jpg',
//         name:'Star-delta and Single phase motors',
//         details:'We mostly use the terms star and delta in electrical systems while discussing three phase AC circuits and electric motors.',
//         price:5000,
//     },
//     {
//         id:4,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfr7o6Ncdd82N47cYr6xcp-bbkK07WFVeoTE4SH0P12HAwyiLAn8BFk5bRVIj4MS65kmY&usqp=CAU',
//         name:'DC Equipment and controls',
//         details:'The DC Equipment and Controls electrical course covers DC power applications in industry.',
//         price:6000,
//     },
//     {
//         id:5,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTignVUJ7k8bF7vAkBA016D6Rre39T157Rb6w&usqp=CAU',
//         name:'Transformers and AC circuits',
//         details:'The Transformers and AC Circuits online electrical course covers differences between DC and AC circuits.',
//         price:7000,
//     },
//     {
//         id:6,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5pPlvOueOAZIVTe_oP03pwfXd1FFqjVU47rJaULORUdktuLou-6k1oWqAZ803puH9U00&usqp=CAU',
//         name:'Batteries and DC Circuits',
//         details:'The Batteries and DC Circuits online electrical course course covers how electrochemical action is used. ',
//         price:3000,
//     },
//     {
//         id:7,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CnD80Iixa2yb18PjF1nG6O4CBVw9b0P5_Q&usqp=CAU',
//         name:'AC controls Equipment',
//         details:'The AC Control Equipment electrical training course covers the broad range of industrial motor starting.',
//         price:4500,
//     },
//     {
//         id:8,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEy2CKdUSMdEsweC92-wKtTEYEe3ySD8WWg&usqp=CAU',
//         name:'AutoCat Design',
//         details:'AutoCAD is a desktop software application for 2D and 3D design and drafting used for creating blueprints and other engineering plans.',
//         price:5000,
//     },

// ]