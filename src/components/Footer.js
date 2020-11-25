import React from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import logo from '../image/logo.png';
import telegram from '../image/telegram_icon_131945.png';
import vk from '../image/rus-vk-02_icon-icons.com_50758.png';
import fb from '../image/fb_icon-icons.com_65434.png';
import git from '../image/Git_icon-icons.com_66557.png';
import SkillsLink from './SkillsLink';
import '../style/footer.css';

export default function Footer() {

    return (
        <>
            <footer className="footer">
                <Container fluid >
                    <Row>
                        <Col className="footer_image">
                            <a href="#home"><img src={logo} alt="logo" /></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="footer_title">
                            <a href="#home" className="footer_title_link"><h2>BOOSTFOLIA</h2></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="footer_text">
                            <h6>MADE WITH LOVE BY CREATIVEPRODUCT</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav className="justify-content-center footer_nav-bar-link">
                                <SkillsLink nameLink={telegram} urlLink='/' />
                                <SkillsLink nameLink={vk} urlLink='/' />
                                <SkillsLink nameLink={fb} urlLink='/' />
                                <SkillsLink nameLink={git} urlLink='/' />
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}