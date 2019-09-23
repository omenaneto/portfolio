import React from 'react';
import './Cards.scss';
import WorkCard from './WorkCard/WorkCard';
import workInfo from '../workInfo';

const Cards = (props) => {
	const cardList = workInfo.map((work) => {
		return (
			<WorkCard
				key={work.id}
				id={work.id}
				img={work.img}
				url={work.url}
				name={work.name}
				description={work.description}
				tags={work.tags}
				className='WorkCard'
			/>
		);
	});

	return <div className='Cards'>{cardList}</div>;
};

export default Cards;
