import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/choseplane.css';
import Choseplanblock from './Choseplanblock';

export default function Choseplane() {

    const dataBlock = [
        { 'title': 'BASIC', 'price': 'Free', 'number1': '20', 'number2': '2', 'number3': '150', 'number4': '2' },
        { 'title': 'STANDART', 'price': '$24.00', 'number1': '25', 'number2': '10', 'number3': '300', 'number4': '5' },
        { 'title': 'PREMIUM', 'price': '$40.00', 'number1': '30', 'number2': '20', 'number3': '500', 'number4': '10' },
        { 'title': 'PROFESSIONAL', 'price': '$75.00', 'number1': '40', 'number2': '40', 'number3': '1000', 'number4': '20' }
    ];

    const chosenRender = [];

    // либо так
    // for (let i = 0; i < dataBlock.length; i++) {
    //     choseRender.push(<Choseplanblock position={dataBlock[i]} />);
    // };
    // либо через forEach

    dataBlock.forEach((position) => { chosenRender.push(<Choseplanblock position={position} />) })

    return (
        <>
            <section className="chose-plan">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="chose-plan-title-h1" >CHOSE PLAN</h1>
                            <div className="chose-plan-title-block"></div>
                        </Col>
                    </Row>
                    <Row>
                        {chosenRender}
                    </Row>
                </Container>
            </section>
        </>
    );
}