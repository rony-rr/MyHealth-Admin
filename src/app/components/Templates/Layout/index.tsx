import React from 'react';
import PropTypes from "prop-types";
// import { FooterComponent } from '../../Organisms/Footer';

/** Import Components */
import { MenuHeader, MenuMobile } from '../../Organism/Menu'; 

const Layout = ({ className = '', children, isHomePage = false }) => {

	let classNames = ['Site-content', className].join(' ');

	return (
		<>
			{
				isHomePage ? 
				<>
					<MenuHeader className="o-menu--header" ishome />
					<MenuMobile className="o-menu__mobile--header" ishome />
				</>
				: 
				<>
					<MenuHeader className="o-menu--header" />
					<MenuMobile className="o-menu__mobile--header" />
				</>
			}
			<div className={classNames} >
				<div className="main-container" >{children}</div>
			</div>
			{/* <FooterComponent /> */}
		</>
	);
};

Layout.propTypes = {
    className: PropTypes.string.isRequired,
    isHomePage: PropTypes.bool,
};

export default Layout;