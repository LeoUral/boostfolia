import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../style/cardimage.css';
import blogicon1 from '../image/icon-link-1.png';
import blogicon2 from '../image/icon-link-2.png';

export default function Cardimage(props) {

    return (
        <>
            <Col>
                <Card className="blog-card"
                    style={{
                        width: '18rem',
                        backgroundColor: '#ebebeb'
                    }}>
                    <Card.Img variant="top" src={props.blogimage} className="blog-image" />
                    <Row>
                        <Col>
                            <a href={props.bloglink_1} className="blog-link">
                                <img src={blogicon1} alt="icon" />
                            </a>
                        </Col>
                        <Col>
                            <a href={props.bloglink_2} className="blog-link">
                                <img src={blogicon2} alt="icon" />
                            </a>
                        </Col>
                    </Row>

                    <Card.Body>
                        <Card.Title className="text-left">{props.blogtitle}</Card.Title>
                        <Card.Text className="text-left">
                            {props.blogtext}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}