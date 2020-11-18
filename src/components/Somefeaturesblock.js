import React from 'react';
import { Col } from 'react-bootstrap';
import '../style/somefeaturesblock.css';

export default function SomeFeaturesBlock(props) {

    return (
        <>
            <Col className="some-block">
                <img src={props.someicon} className="some-image" alt="icon" />
                <p className="some-paragraf1">{props.temeName}</p>
                <p className="some-paragraf2">{props.temeNumber}</p>
            </Col>
        </>
    );
}