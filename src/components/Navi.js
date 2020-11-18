import React from 'react';
import { Nav } from 'react-bootstrap';
import '../style/navi.css';

export default function Navi() {

    return (
        <>
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href="/" className="navi-link">ALL PROJECTS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/" className="navi-link">PHOTOGRAPHY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/" className="navi-link">WEB DESIGN</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/" className="navi-link">BRANDING</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/" className="navi-link">MOBILE APP</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}