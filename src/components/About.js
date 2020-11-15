import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/about.css';
import Cardicon from './Cardicon';
import icon1 from '../image/icon-1.png';
import icon2 from '../image/icon-2.png';
import icon3 from '../image/icon-3.png';

export default function About() {

    return (
        <>
            <section id="about" className="about">
                <Container>
                    <Row>
                        <Col>
                            <h1>ABOUT US</h1>
                            <div className="aboute_block"></div>
                            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore, aperiam neque minima adipisci totam sequi fugit quasi ratione amet.?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Cardicon nameimage={icon1} title={'CREATIVE DESIGN'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...'} />
                        <Cardicon nameimage={icon2} title={'UNIQU PORTFOLIO'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...'} />
                        <Cardicon nameimage={icon3} title={'INFINITE UPDATES'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...'} />
                    </Row>
                </Container>
            </section>
        </>
    );
}