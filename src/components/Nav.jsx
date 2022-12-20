import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';
import { ReactComponent as LogoImg } from '../assets/Logo.svg';

const Nav = () => {
	return (
		<header className='nav'>
			<nav>
				<Link to='/'>
					<LogoImg className='logo' />
				</Link>
				{/* <Link to='/'>Home</Link> */}
				<Link to='/categories'> Categories </Link>
				<Link to='/ingredients'> Ingredients </Link>
				{/* <Link to='/allmeals'> Meal Catalogue </Link> */}
			</nav>
		</header>
	);
};

export default Nav;
