import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/square.css';

export default function Square() {

    return (
        <>
            <Container fluid className="square">
                <Row className="square-row">
                    <Col className="square-block">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolores doloribus est omnis possimus mollitia.</p>
                    </Col>
                    <Col className="square-block">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ratione odio officiis asperiores voluptatum laudantium expedita nobis, rem pariatur nisi sed optio libero recusandae voluptate.
                    </p>
                    </Col>
                    <Col className="square-block" xs={3}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, ipsum.
                            </p>
                    </Col>
                </Row>
                <Row className="square-row">
                    <Col className="square-block">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolores doloribus est omnis possimus mollitia.
                            </p>
                    </Col>
                    <Col className="square-block">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ratione odio officiis asperiores voluptatum laudantium expedita nobis, rem pariatur nisi sed optio libero recusandae voluptate.
                    </p>
                    </Col>
                    <Col className="square-block" xs={3}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, ipsum.
                            </p>
                    </Col>
                </Row>
                <Row className="square-row">
                    <Col className="square-block">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium dolores doloribus est omnis possimus mollitia.
                            </p>
                    </Col>
                    <Col className="square-block">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ratione odio officiis asperiores voluptatum laudantium expedita nobis, rem pariatur nisi sed optio libero recusandae voluptate.
                    </p>
                    </Col>
                    <Col className="square-block" xs={3}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, ipsum.
                            </p>
                    </Col>
                </Row>

            </Container>
        </>
    );
}