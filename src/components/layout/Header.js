import React from 'react';
import { FaPizzaSLice } from 'react-icons/fa';
export const Header = () => {
	return (
		<header className='header' data-testid='header'>
			<nav>
				<div className='logo'>
					<img src='/images/logo.png' alt='' />
				</div>
				<div className='settings'>
					<ul>
						<li>+</li>
						<li>
							<FaPizzaSLice />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
