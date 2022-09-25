import { FunctionComponent, useLayoutEffect, useRef } from 'react';

const Header: FunctionComponent = () => {
	return (
		<header className='header'>
			<div className='logo-wrapper'>
				<div className='logo'>
					Horizontal Scroll Inspired by{' '}
					<a href='https://www.youtube.com/watch?v=_T_VMwD-AnY' target='_blank' rel='noreferrer'>
						Web Unlocked
					</a>
				</div>
			</div>
			<div></div>
			<nav>
				<ul>
					<li>About</li>
					<li>Work</li>
					<li>Services</li>
					<li>Blog</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
