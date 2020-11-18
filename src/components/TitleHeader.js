import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../style/titleheader.css';

export default function TitleHeader(props) {

    return (
        <>
            <Row>
                <Col>
                    <h1 className="title-h1" >{props.titleHeader}</h1>
                    <div className="title-block"></div>
                    <p className="title-text">{props.titleText}</p>
                </Col>
            </Row>
        </>
    );
}