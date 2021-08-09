import React from 'react';
import PropTypes from "prop-types";
import { Container, Row, Col } from 'reactstrap';

/** Import Styled Components */
import Style from './style';

/** Import Components */
import CardOptionMenu from '../../Molecules/OptionMenu';

export default function MainHomeGrid({ className = "", ...props }) {
    return(
        <Style className={className} >
            <Container className="themed-container" fluid={true} >
                <Row className="o-row--container" >
                    <Col xs="4" className="o-card--div" ><CardOptionMenu className="m-card__option" /></Col>
                    <Col xs="4" className="o-card--div" ><CardOptionMenu className="m-card__option" /></Col>
                    <Col xs="4" className="o-card--div" ><CardOptionMenu className="m-card__option" /></Col>
                    <Col xs="4" className="o-card--div" ><CardOptionMenu className="m-card__option" /></Col>
                    <Col xs="4" className="o-card--div" ><CardOptionMenu className="m-card__option" /></Col>
                    <Col xs="4" className="o-card--div" ><CardOptionMenu className="m-card__option" /></Col>
                </Row>
            </Container>
        </Style>
    );
}

MainHomeGrid.propTypes = {
    className: PropTypes.string.isRequired,
};