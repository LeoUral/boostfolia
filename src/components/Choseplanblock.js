import React from 'react';
import { Button, Col } from 'react-bootstrap';
import '../style/choseplanblock.css';

export default function Choseplanblock(props) {

    return (
        <>
            <Col key={props.position.title} className="chose" >
                <header className="chose_header">
                    <h6>{props.position.title}</h6>
                    <h2>{props.position.price}</h2>
                </header>
                <main className="chose_main">
                    <div className="chose_position">
                        <span className="chose_number1">{props.position.number1}{' '}</span>
                        <span className="chose_text">Pages</span>
                    </div>
                    <div className="chose_position">
                        <span className="chose_number1">{props.position.number2}{' '}</span>
                        <span className="chose_text">GB Storage</span>
                    </div>
                    <div className="chose_position">
                        <span className="chose_number1">{props.position.number3}{' '}</span>
                        <span className="chose_text">Members</span>
                    </div>
                    <div className="chose_position">
                        <span className="chose_number1">{props.position.number4}{' '}</span>
                        <span className="chose_text">Contributors</span>
                    </div>
                </main>
                <Button className="chose_btn" variant="danger"> PURCHASE </Button>
            </Col>
        </>
    );
}