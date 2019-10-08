import React from 'react';
import { Nav, NavItem, Col } from 'reactstrap';


export default class Header extends React.Component {

    render() {
        return (
            <div>
                <Nav className="navbar">
                        <Col sm="3">
                            <NavItem>
                                <p className="brand">Clicky Game</p>
                            </NavItem>
                        </Col>
                        <Col sm="4">
                            <NavItem>
                                <p>Click on an image!</p>
                            </NavItem>
                        </Col>
                        <Col sm="5">
                            <NavItem>
                                <p>Score: 0 | Top Score: 0</p>
                            </NavItem>
                        </Col>

                </Nav>

            </div>
        );
    }

}