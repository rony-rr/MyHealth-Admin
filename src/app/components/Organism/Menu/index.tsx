import React, { useState } from 'react';
import PropTypes from "prop-types";

import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Collapse, 
    NavbarToggler, 
    NavbarBrand,
  } from 'reactstrap';

/** Import Styles */
import { StyleMenuHeader, StyleMenuMobile } from './style';

export function MenuHeader({className = "", ishome = false, ...props}) {

    if ( ishome ){
        return(
            <StyleMenuHeader className={className} ishome >
                <Navbar color="light" light expand="md" >
                    <img className="logo-site" src="https://eitech.com.co/imagenes/portafolio.jpg " alt="logo-site" />
                    <Nav className="mr-auto" navbar >
                        <NavItem>
                            <NavLink href="/" >Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/categories">Categorias</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </StyleMenuHeader>
        );
    }else{
        return(
            <StyleMenuHeader className={className} >
                <Navbar color="light" light expand="md" >
                    <img className="logo-site" src="https://eitech.com.co/imagenes/portafolio.jpg " alt="logo-site" />
                    <Nav className="mr-auto" navbar >
                        <NavItem>
                            <NavLink href="/" >Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/categories">Categorias</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </StyleMenuHeader>
        );
    }

}

export function MenuMobile({className = "", ishome = false, ...props}) {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    if( ishome ){
        return(
            <StyleMenuMobile className={className} ishome >
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">
                        <img className="logo-site" src="https://eitech.com.co/imagenes/portafolio.jpg " alt="logo-site" />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/categories">Categorias</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </StyleMenuMobile>
        );
    }else{
        return(
            <StyleMenuMobile className={className} >
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">
                        <img className="logo-site" src="https://eitech.com.co/imagenes/portafolio.jpg " alt="logo-site" />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/categories">Categorias</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </StyleMenuMobile>
        );
    }
    
}

MenuHeader.propTypes = {
    className: PropTypes.string.isRequired,
    ishome: PropTypes.bool,
};

MenuMobile.propTypes = {
    className: PropTypes.string.isRequired,
    ishome: PropTypes.bool,
};