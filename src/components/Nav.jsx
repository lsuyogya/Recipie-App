import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';

const Nav = () => {
	return (
		<nav>
			<Link to='/random'> Random </Link>
			<Link to='/categories'> Categories </Link>
			<Link to='/ingredients'> Ingredients </Link>
			{/* <Link to='/allmeals'> Meal Catalogue </Link> */}
		</nav>
	);
};

export default Nav;
