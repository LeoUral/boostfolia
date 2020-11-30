import React from 'react';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import '../style/watch.css';
import Videoblock from './Videoblock';


export default class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playNow: 'PLAY NOW',
            styleBtn: 'danger'
        }
        this.handlePlayVideo = this.handlePlayVideo.bind(this);
    }


    handlePlayVideo() {
        const videoPlay = document.getElementsByTagName('video')[0];

        if (videoPlay.paused) {
            videoPlay.play();
            this.setState({ playNow: 'S T O P', styleBtn: 'warning' });
        } else {
            videoPlay.pause();
            this.setState({ playNow: 'PLAY NOW', styleBtn: 'danger' });
        }
        console.log(videoPlay.paused);
    };

    render() {
        const playNow = this.state.playNow;
        const styleBtn = this.state.styleBtn;
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
                                    <Button variant={styleBtn} className="watch_btn" onClick={this.handlePlayVideo}>{playNow}</Button>
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
}
