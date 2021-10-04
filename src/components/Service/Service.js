import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

const Service = props => {
    const {name,img,price,details}=props.service
    return (
        <div>
            <Col>
                <Card className="text-start p-3 card">
                        <Card.Img style={{width:'100%',height:'16rem', borderRadius:'.4rem'}} variant="top" src={img} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                           {
                               details?details:''
                           }
                        </Card.Text>
                        <h2>Price: ${price}</h2>
                        <Button className='btn btn-outline-secondary'>join now</Button>
                        </Card.Body>
                 </Card>
            </Col>
        </div>
    );
};

export default Service;