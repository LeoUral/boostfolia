import React from 'react';
import { Col, Row, ProgressBar } from 'react-bootstrap';

export default function SkillsItem(props) {

    return (
        <>
            <Row className="mb-3">
                <Col xs={3}>
                    <h5 style={{ marginTop: '-5px' }}>{props.work}</h5>
                </Col>
                <Col>
                    <ProgressBar now={props.progress} label={`${props.progress}%`} variant="danger" />
                </Col>
            </Row>
        </>
    );
}