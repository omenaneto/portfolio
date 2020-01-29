import React from 'react';
import './Heading.scss';

const Heading = (props) => {
	if (props.page === 2) {
		let title;
		if (props.laguageSelected === 'en') {
			title = 'My Work';
		}
		else if (props.laguageSelected === 'pt') {
			title = 'Portfólio';
		}
		return (
			<div className='Heading'>
				<h1 className='Title'>{title}</h1>
				<hr />
			</div>
		);
	}
	else if (props.page === -1) {
		return (
			<div className='Heading'>
				<h1 className='Title'>404</h1>
				<hr />
			</div>
		);
	}
	else {
		return (
			<div className='Heading'>
				<h1 className='Title'>Milton Neto</h1>
				<hr />
				<h2 className='SubTitle'>Full Stack Developer & Product Manager</h2>
			</div>
		);
	}
};

export default Heading;
