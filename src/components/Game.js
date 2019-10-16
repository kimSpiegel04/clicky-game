import React from 'react';
import Image from './Image';
import { Container } from 'reactstrap';


export default class Game extends React.Component {

    render() {
        return (
            <Container className="container">
                {Object.keys(this.props.pokemon).map(key =>
                    <Image
                        key={key}
                        index={key}
                        pokemon={this.props.pokemon[key]}
                    />
                )}

                {/* <Row>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                </Row>
                <Row>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                </Row>
                <Row>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                </Row>
                <Row>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                    <Col>.col</Col>
                </Row> */}

            </Container>

        );
    }
}