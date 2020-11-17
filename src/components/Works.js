import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/works.css';

export default function Works() {

    return (
        <>
            <section id="works" className="works">
                <Container>
                    <Row>
                        <Col>
                            <h1>OUR WORKS</h1>
                            <div className="works_block"></div>
                            <p className="works-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore, aperiam neque minima adipisci totam sequi fugit quasi ratione amet.?</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}