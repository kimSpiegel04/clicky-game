import React from "react";
// import { Container, Row, Col } from 'reactstrap';

export default class Image extends React.Component {

    // handleClick = () => {
    //     arr.push(this.props.index);
    //     console.log(arr);
    // }

    render() {

        const { image, alt } = this.props.pokemon;
        const arr = [];

        return (
            <li className="li">
                <img 
                    className="image" 
                    src={image} 
                    alt={alt}
                    onClick={() => arr.push(this.props.index)}
                ></img>
            </li>        
        );
    }
}