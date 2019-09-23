import React from 'react';
import './Cta.scss';

const Cta = (props) => {
	if (props.title) {
		let icon;

		if (props.icon) {
			icon = (
				<div job={props.job} href={props.url} className='highlighted'>
					<i job={props.job} className={props.icon} />
				</div>
			);
		}
		else {
			icon = '';
		}

		return (
			<button job={props.job} className='Cta'>
				<span job={props.job}>{props.title}</span>
				{icon}
			</button>
		);
	}
	else {
		return (
			<button className='Cta'>
				<span>Call To Action</span>
			</button>
		);
	}
};

export default Cta;
