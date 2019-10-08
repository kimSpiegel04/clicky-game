import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Banner = (props) => {
    return (
        <div>
        <Jumbotron fluid className="jumbo">
            <Container fluid>
            <h1 className="title">Clicky Game!</h1>
            <br></br>
            <h3 className="desc">
                <p className="desc-1">Click on an image to earn points, </p>
                <p className="desc-2">but don't click on any more than once!</p>
            </h3>
            </Container>
        </Jumbotron>
        </div>
    );
};

export default Banner;
