import React from 'react';
import './WorkCard.scss';

const WorkCard = (props) => {
	const tagList = props.tags.map((tag, i) => (
		<div key={i} className='tag'>
			{tag}
		</div>
	));

	const trimString = (string) => {
		if (string.length > 100) return string.substring(0, 97) + '...';
		else return string;
	};

	const trimmedDescription = trimString(props.description);

	return (
		<a className='WorkCard' target='_blank' rel='noopener noreferrer' href={props.url}>
			<div
				style={{
					backgroundImage : `url("${props.img}")`,
				}}
				className='cardImage'
			/>
			<div className='cardContent'>
				<h4>{props.name}</h4>
				<p>{trimmedDescription}</p>
				<div className='About'>{tagList}</div>
			</div>
		</a>
	);
};

export default WorkCard;
