import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/somefeatures.css';
import someicon1 from '../image/some-icon-1.png';
import someicon2 from '../image/some-icon-2.png';
import someicon3 from '../image/some-icon-3.png';
import someicon4 from '../image/some-icon-4.png';
import SomeFeaturesBlock from './Somefeaturesblock';


export default function SomeFeatures() {

    return (
        <>
            <section className="some-features">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="some-features-title-h1" >SOME FEATURES</h1>
                            <div className="some-features-title-block"></div>
                        </Col>
                    </Row>
                    <Row>
                        <SomeFeaturesBlock someicon={someicon1} temeName="Shortcodes" temeNumber="46" />
                        <SomeFeaturesBlock someicon={someicon2} temeName="Integrated Plugins" temeNumber="128" />
                        <SomeFeaturesBlock someicon={someicon3} temeName="Creative Products" temeNumber="450" />
                        <SomeFeaturesBlock someicon={someicon4} temeName="Clients Worldwide" temeNumber="100+" />
                    </Row>
                </Container>
            </section>
        </>
    );
}