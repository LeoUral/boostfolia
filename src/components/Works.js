import React from 'react';
import { Container } from 'react-bootstrap';
import '../style/works.css';
import Navi from './Navi';
import Square from './Square';
import TitleHeader from './TitleHeader';

export default function Works() {

    return (
        <>
            <section id="works" className="works">
                <Container>
                    <TitleHeader titleHeader="OUR WORKS" titleText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab labore, aperiam neque minima adipisci totam sequi fugit quasi ratione amet.?" />
                    <Navi />
                </Container>
            </section>
            <Square />
        </>
    );
}