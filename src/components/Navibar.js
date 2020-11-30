import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../image/logo.png';
import '../style/navibar.css';

export default function Navibar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="outline-dark" variant="light" className="fixed-top navibar">
            <Container>
                <Navbar.Brand href="#home" className="navibar_brand"><img src={logo} alt="logo" /> Boostfolia</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{ position: 'relative' }}>
                    <Nav className="mr-auto" style={{ position: 'absolute', right: '20px', fontWeight: '500' }}>
                        <Nav.Link href="#about" className="mr-2">About us</Nav.Link>
                        <Nav.Link href="#works" className="mr-2">Our works</Nav.Link>
                        <Nav.Link href="#who" className="mr-2">Who we are</Nav.Link>
                        <Nav.Link href="#blog" className="mr-2">Blog posts</Nav.Link>
                        <Nav.Link href="#contact" className="mr-2">Get in toch</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
