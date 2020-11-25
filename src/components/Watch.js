import React from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import '../style/watch.css';
import Videoblock from './Videoblock';


export default function Watch() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col style={{ padding: '0px', margin: '0' }}>
                        <Card className="watch">
                            <Card.Body>
                                <Card.Title className="text-center watch_title">WATCH BEHIND THE SCENE</Card.Title>
                                <Card.Text className="watch_text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid suscipit quasi voluptatem quas amet cum maiores ut quos ea, atque, quidem veritatis alias adipisci veniam iure error. Ducimus ratione impedit praesentium, eius libero error odio suscipit porro quia aperiam?
                                </Card.Text>
                                <Button variant="danger" className="watch_btn">PLAY NOW</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ padding: '0px', margin: '0' }}>
                        <Card className="video_block">
                            <Card.Body style={{ padding: '0px' }}>
                                <Videoblock />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );

}