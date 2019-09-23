import React from 'react';
import './JobCards.scss';

const JobCards = (props) => {
	const detailList = props.details.map((item, i) => <li key={i}>{item}</li>);

	return (
		<ul className='JobCard'>
			<li>
				<h4>{props.company}</h4>
				<h5>
					{props.title} | {props.time}
				</h5>
				<ul>{detailList}</ul>
			</li>
		</ul>
	);
};

export default JobCards;
