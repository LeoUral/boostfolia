import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import '../style/skills.css';
import telegram from '../image/telegram_icon_131945.png';
import vk from '../image/rus-vk-02_icon-icons.com_50758.png';
import fb from '../image/fb_icon-icons.com_65434.png';
import git from '../image/Git_icon-icons.com_66557.png';
import SkillsItem from './SkillsItem';
import SkillsLink from './SkillsLink';

export default function Skills() {

    return (
        <>
            <Row className="skills-block">
                <Col xs={4} style={{ backgroundColor: '#eee', marginRight: '25px' }}>
                    <div className="skills-square"></div>
                    <h3 className="skills-title">JANE SMITH</h3>
                    <h5 className="skills-title">DESIGNER</h5>
                    <Nav className="justify-content-center nav-bar-link">
                        <SkillsLink nameLink={telegram} urlLink='/' />
                        <SkillsLink nameLink={vk} urlLink='/' />
                        <SkillsLink nameLink={fb} urlLink='/' />
                        <SkillsLink nameLink={git} urlLink='/' />
                    </Nav>
                </Col>
                <Col style={{ backgroundColor: '#eee' }}>
                    <h3 className="skills-title2">MY SKILLS</h3>
                    <p className="skills-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium nobis quos ex quam impedit maxime, officia corporis quas molestiae!
                    </p>
                    <Container>
                        <SkillsItem work='PHOTOHOP' progress='88' />
                        <SkillsItem work='ILLUSTRATOR' progress='92' />
                        <SkillsItem work='SKETCH' progress='90' />
                        <SkillsItem work='AFTER EFFECTS' progress='98' />
                    </Container>
                </Col>
            </Row>
        </>
    );
}