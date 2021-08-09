import React from 'react';
import PropTypes from "prop-types";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, ButtonToggle,
  } from 'reactstrap';

/** Import Styled Components */
import StyleCardOptionMenu from './style';


export default function CardOptionMenu({ className = "", ...props }) {
    return(
        <StyleCardOptionMenu className={className} >
            <Card className="text-center text-white" color="success" >
                <CardBody>
                    <CardTitle tag="h3">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 mt-2 text-white">Card subtitle</CardSubtitle>
                </CardBody>
                <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image option" />
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <ButtonToggle color="primary" >Go somewhere</ButtonToggle>
                </CardBody>
            </Card>
        </StyleCardOptionMenu>
    );
}

CardOptionMenu.propTypes = {
    className: PropTypes.string.isRequired,
};