import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../style/about.css';


export default function Cardicon(props) {
    return (
        <>
            <Col>
                <Card style={{
                    width: '18rem',
                    backgroundColor: '#ebebeb'
                }}>
                    <Card.Img variant="top" src={props.nameimage} className="about-image" />
                    <Card.Body>
                        <Card.Title className="text-center">{props.title}</Card.Title>
                        <Card.Text className="text-center">
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}