import React from 'react';

import { Nav } from 'react-bootstrap';


export default function SkillsLink(props) {

    return (
        <>
            <Nav.Item>
                <Nav.Link href={props.urlLink}>
                    <img src={props.nameLink} alt="icon" />
                </Nav.Link>
            </Nav.Item>
        </>
    );
}