import React from "react";
import { Container, Row, Col } from 'reactstrap';

export default class Image extends React.Component {

    render() {

        const { image } = this.props.pokemon;

        return (
            
            <img className="image" src={image}></img>

        );
    }
}