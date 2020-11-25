import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../style/contactform.css';

export default function Contactform() {

    function handleClickForm(event) {
        event.preventDefault();
        console.log('попытка отправить форму');
    }
    return (
        <>
            <Form>
                <Form.Row>
                    <Col style={{ margin: '0 30px 0 0' }}>
                        <Form.Group as={Row} controlId="formPlaintextName">
                            <Form.Label column sm="2">
                                NAME<span className="contact_form_star"> *</span>
                            </Form.Label>
                            <Form.Control plaintext defaultValue="" type="text" className="contact_form_input" />
                        </Form.Group>
                    </Col>
                    <Col style={{ margin: '0 0 0 30px' }}>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                EMAIL<span className="contact_form_star"> *</span>
                            </Form.Label>
                            <Form.Control plaintext defaultValue="" type="email" className="contact_form_input" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group as={Row} controlId="formPlaintextTextarea">
                    <Form.Label column sm="2">
                        MASSAGE
                    </Form.Label>
                    <Form.Control plaintext defaultValue="" as="textarea" rows={3} type="textarea" className="contact_form_input" style={{ resize: 'none' }} />
                </Form.Group>
                <Button variant="danger" type="submit" className="contact_form_btn" onClick={handleClickForm}>SUBMIT</Button>
            </Form>
        </>
    );
}