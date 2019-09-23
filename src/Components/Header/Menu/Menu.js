import React from 'react';
import './Menu.scss';

const Menu = (props) => {
	return (
		<div
			className={
				'Menu ' +
				(
					props.active ? 'active' :
					'')
			}
			job='menu-btn'
		>
			<div job='menu-btn' />
			<div job='menu-btn' />
			<div job='menu-btn' />
		</div>
	);
};

export default Menu;
