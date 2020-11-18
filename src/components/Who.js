import React from 'react';
import { Container } from 'react-bootstrap';
import '../style/who.css';
import Skills from './Skills';
import SomeFeatures from './Somefeatures';
import TitleHeader from './TitleHeader';

export default function Who() {

    return (
        <>
            <section id="who" className='who'>
                <Container>
                    <TitleHeader titleHeader="WHO WE ARE" titleText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore, aperiam neque minima adipisci totam sequi fugit quasi ratione amet.?" />
                    <Skills />
                </Container>
            </section>
            <SomeFeatures />
        </>
    );
}