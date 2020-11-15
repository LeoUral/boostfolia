import React from 'react';
import { Container, Jumbotron as Jumbo } from 'react-bootstrap';
import '../style/creative.css';


export default function Creative() {

    return (
        <>
            <Jumbo id="home" className="creative" style={{ marginBottom: '0px' }}>
                <Container>
                    <h1>WE THINK CREATIVE BE CREATIVE</h1>
                    <h3>LIKE TO DO CREATIVE WORKS</h3>
                </Container>
            </Jumbo>
        </>
    );
}