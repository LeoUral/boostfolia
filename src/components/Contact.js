import React from 'react';
import { Container } from 'react-bootstrap';
import TitleHeader from './TitleHeader';
import '../style/contact.css';
import Contactform from './Contactform';

export default function Contact() {

    return (
        <>
            <section id="contact" className="contact">
                <Container>
                    <TitleHeader titleHeader="GET IN TOUCH" titleText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore, aperiam neque minima adipisci totam sequi fugit quasi ratione amet.?" />
                </Container>
                <Container style={{ width: '80%' }}>
                    <Contactform />
                </Container>
            </section>
        </>
    );
}