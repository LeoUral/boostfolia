import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import '../style/location.css';

export default function Location() {

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Card className="location">
                    <Card.Header style={{ margin: '0 auto' }}>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="location_btn" style={{ textDecoration: 'none' }} >
                            LOCATE ON MAP <span> </span><span className="location_span">&gt;</span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="location_body">
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A486b600a7bd16c37a131bef4a320d5c81553fea849914c24a41ec3513b6be325&amp;source=constructor" width="100%" height="400" frameborder="0" title="map">
                                Ваш браузер не поддерживает плавающие фреймы!
                            </iframe>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}